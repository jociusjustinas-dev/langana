"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useId, useMemo, useRef, useState, type ChangeEvent, type FormEvent } from "react";

import { FormSelect } from "@/components/ui/FormSelect";
import { contactQuoteProductFromPathname, getContactQuoteProductGroups } from "@/data/contact-quote-product-options";
import {
  CONTACT_MESSAGE_HINT_PREFIX,
  CONTACT_PREFILL_FROM_SESSION_KEY,
  contactMessageHintFromPathname,
  contactMessageHintSessionKey,
  contactSolutionFromQueryParam,
  contactSolutionsFromPathname,
  sanitizeContactFromPath,
  sanitizeContactProductSlug,
} from "@/lib/contact-form-from-path";
import { PRIVACY_POLICY_HREF } from "@/lib/contact-href";
import {
  CONTACT_OFFER_FILE_NAME_REGEX as ACCEPT_EXT,
  CONTACT_OFFER_MAX_FILE_BYTES as MAX_FILE_BYTES,
  CONTACT_OFFER_SOLUTION_OPTIONS as SOLUTION_OPTIONS,
  type ContactOfferSolution,
} from "@/lib/contact-offer-shared";
import {
  QUOTE_PREFILL_EVENT,
  QUOTE_PREFILL_STORAGE_KEY,
  type QuotePrefillPayload,
} from "@/lib/quote-prefill";

const OBJECT_TYPE_OPTIONS: { value: string; label: string }[] = [
  { value: "", label: "Pasirinkite (nebūtina)" },
  { value: "Privatus namas", label: "Privatus namas" },
  { value: "Butas / daugiabutis", label: "Butas / daugiabutis" },
  { value: "Komercinis objektas", label: "Komercinis objektas" },
  { value: "Viešosios paskirties objektas", label: "Viešosios paskirties objektas" },
  { value: "Pramoninis objektas", label: "Pramoninis objektas" },
  { value: "Kita", label: "Kita" },
];

const ERR = {
  name: "Įveskite vardą.",
  email: "Įveskite el. pašto adresą.",
  emailInvalid: "Įveskite teisingą el. pašto adresą.",
  solutions: "Pasirinkite bent vieną sprendimą.",
  privacy: "Patvirtinkite sutikimą dėl duomenų naudojimo.",
  file: "Failas per didelis. Įkelkite failą iki 10 MB.",
  fileType: "Netinkamas failo formatas. Naudokite JPG, PNG, PDF ar HEIC.",
} as const;

type FieldErrors = Partial<Record<"name" | "email" | "solutions" | "privacy" | "file", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readPrefillFromStorage(): string {
  if (typeof window === "undefined") return "";
  try {
    const raw = sessionStorage.getItem(QUOTE_PREFILL_STORAGE_KEY);
    if (!raw) return "";
    sessionStorage.removeItem(QUOTE_PREFILL_STORAGE_KEY);
    const parsed = JSON.parse(raw) as QuotePrefillPayload;
    return typeof parsed.messageHint === "string" ? parsed.messageHint : "";
  } catch {
    return "";
  }
}

const inputBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-[#16216b] outline-none transition placeholder:text-[#59799f]/60 focus:ring-2 focus:ring-offset-0";
const inputOk = "border-[rgba(163,170,214,0.45)] focus:border-[#263cd0]/55 focus:ring-[#263cd0]";
const inputErr =
  "border-[#b42318] focus:border-[#b42318] focus:ring-[#b42318]/35 aria-invalid:border-[#b42318]";

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

const brandCheckboxBoxClass =
  "mt-1 flex size-[18px] shrink-0 items-center justify-center rounded border-2 border-[rgba(163,170,214,0.75)] bg-white transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-[#263cd0] peer-focus-visible:ring-offset-2 peer-checked:border-[#263cd0] peer-checked:bg-[#263cd0]";

function BrandCheckboxControl({
  id,
  checked,
  onToggle,
  required,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
}: {
  id: string;
  checked: boolean;
  onToggle: () => void;
  required?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}) {
  return (
    <>
      <input
        aria-describedby={ariaDescribedBy}
        aria-invalid={ariaInvalid}
        checked={checked}
        className="peer sr-only"
        id={id}
        onChange={() => onToggle()}
        required={required}
        type="checkbox"
      />
      <span aria-hidden className={brandCheckboxBoxClass}>
        {checked ? (
          <Check aria-hidden className="size-3 text-white" strokeWidth={2.5} />
        ) : null}
      </span>
    </>
  );
}

export function OfferRequestForm() {
  const formId = useId();
  const nameId = `${formId}-name`;
  const phoneId = `${formId}-phone`;
  const emailId = `${formId}-email`;
  const solutionsId = `${formId}-solutions`;
  const objectTypeId = `${formId}-object-type`;
  const interestProductId = `${formId}-interest-product`;
  const cityId = `${formId}-city`;
  const messageId = `${formId}-message`;
  const fileId = `${formId}-file`;
  const privacyId = `${formId}-privacy`;

  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const solutionsFieldsetRef = useRef<HTMLFieldSetElement>(null);
  const honeypotRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [solutions, setSolutions] = useState<Record<string, boolean>>(
    () => Object.fromEntries(SOLUTION_OPTIONS.map((o) => [o, false])) as Record<string, boolean>,
  );
  const [objectType, setObjectType] = useState("");
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [prefillData, setPrefillData] = useState(false);
  const [interestProduct, setInterestProduct] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const productSlugSet = useMemo(() => {
    const groups = getContactQuoteProductGroups();
    const s = new Set<string>();
    for (const g of groups) {
      for (const o of g.options) s.add(o.value);
    }
    return s;
  }, []);

  const productGroups = useMemo(() => getContactQuoteProductGroups(), []);

  const applyMessageHint = useCallback((hint: string) => {
    if (!hint) return;
    setMessage((prev) => {
      if (prev.includes(CONTACT_MESSAGE_HINT_PREFIX)) return prev;
      return prev ? `${hint}${prev}` : hint;
    });
  }, []);

  const applyFromUrlQuery = useCallback(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const fromUrl = sanitizeContactFromPath(params.get("from"));
    let fromStored: string | null = null;
    try {
      const rawStored = sessionStorage.getItem(CONTACT_PREFILL_FROM_SESSION_KEY);
      fromStored = rawStored ? sanitizeContactFromPath(rawStored) : null;
    } catch {
      /* ignore */
    }

    const from = fromUrl ?? fromStored;
    const rawProduct = sanitizeContactProductSlug(params.get("produktas"));

    if (fromUrl) {
      try {
        sessionStorage.setItem(CONTACT_PREFILL_FROM_SESSION_KEY, fromUrl);
      } catch {
        /* ignore */
      }
    }

    const extra = contactSolutionFromQueryParam(params.get("sprendimas"));

    const toCheck: ContactOfferSolution[] = [];
    if (from) toCheck.push(...contactSolutionsFromPathname(from));
    if (extra && !toCheck.includes(extra)) toCheck.push(extra);

    const derivedProduct = from ? contactQuoteProductFromPathname(from) : null;
    const slugFromQuery = rawProduct && productSlugSet.has(rawProduct) ? rawProduct : null;
    const slugFromPath =
      derivedProduct?.value && productSlugSet.has(derivedProduct.value) ? derivedProduct.value : null;
    const productSlug = slugFromQuery ?? slugFromPath ?? "";

    if (toCheck.length) {
      setSolutions((prev) => {
        const next = { ...prev };
        for (const s of toCheck) {
          next[s] = true;
        }
        return next;
      });
    }

    if (productSlug) {
      setInterestProduct(productSlug);
    }

    if (from && from !== "/kontaktai") {
      try {
        const sk = contactMessageHintSessionKey(from);
        if (!sessionStorage.getItem(sk)) {
          applyMessageHint(contactMessageHintFromPathname(from));
          sessionStorage.setItem(sk, "1");
        }
      } catch {
        applyMessageHint(contactMessageHintFromPathname(from));
      }
    }

    if (fromStored && !fromUrl) {
      try {
        sessionStorage.removeItem(CONTACT_PREFILL_FROM_SESSION_KEY);
      } catch {
        /* ignore */
      }
    }

    if (toCheck.length || productSlug || (from && from !== "/kontaktai") || extra) {
      setPrefillData(true);
    }

    if (params.has("from") || params.has("sprendimas") || params.has("produktas")) {
      window.history.replaceState({}, "", `${window.location.pathname}#uzklausa`);
    }
  }, [applyMessageHint, productSlugSet]);

  useEffect(() => {
    const runPrefill = () => {
      const hint = readPrefillFromStorage();
      if (hint) {
        setPrefillData(true);
        applyMessageHint(hint);
      }
      applyFromUrlQuery();
    };
    const onEvent = () => {
      const hint = readPrefillFromStorage();
      if (hint) {
        setPrefillData(true);
        applyMessageHint(hint);
      }
    };
    const t = window.setTimeout(runPrefill, 0);
    window.addEventListener(QUOTE_PREFILL_EVENT, onEvent);
    return () => {
      window.clearTimeout(t);
      window.removeEventListener(QUOTE_PREFILL_EVENT, onEvent);
    };
  }, [applyMessageHint, applyFromUrlQuery]);

  const selectedSolutionLabels = SOLUTION_OPTIONS.filter((o) => solutions[o]);

  const clearFile = () => {
    setFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setErrors((e) => ({ ...e, file: undefined }));
  };

  const onFileChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const f = ev.target.files?.[0] ?? null;
    setErrors((e) => ({ ...e, file: undefined }));
    if (!f) {
      setFile(null);
      return;
    }
    if (f.size > MAX_FILE_BYTES) {
      setErrors((e) => ({ ...e, file: ERR.file }));
      setFile(null);
      ev.target.value = "";
      return;
    }
    if (!ACCEPT_EXT.test(f.name)) {
      setErrors((e) => ({ ...e, file: ERR.fileType }));
      setFile(null);
      ev.target.value = "";
      return;
    }
    setFile(f);
  };

  const validate = (): FieldErrors => {
    const e: FieldErrors = {};
    if (!name.trim()) e.name = ERR.name;
    const emailTrim = email.trim();
    if (!emailTrim) e.email = ERR.email;
    else if (!EMAIL_RE.test(emailTrim)) e.email = ERR.emailInvalid;
    if (!selectedSolutionLabels.length) e.solutions = ERR.solutions;
    if (!privacy) e.privacy = ERR.privacy;
    return e;
  };

  const onSubmit = async (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    setSubmitError(null);
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      if (e.name) nameRef.current?.focus();
      else if (e.email) emailRef.current?.focus();
      else if (e.solutions) solutionsFieldsetRef.current?.focus();
      else if (e.privacy) document.getElementById(privacyId)?.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("name", name.trim());
      fd.append("phone", phone.trim());
      fd.append("email", email.trim());
      selectedSolutionLabels.forEach((label) => {
        fd.append("solutions", label);
      });
      if (interestProduct && productSlugSet.has(interestProduct)) {
        const label =
          productGroups.flatMap((g) => g.options).find((o) => o.value === interestProduct)?.label ?? interestProduct;
        fd.append("interestProduct", label);
      }
      if (objectType) fd.append("objectType", objectType);
      if (city.trim()) fd.append("city", city.trim());
      if (message.trim()) fd.append("message", message.trim());
      if (file) fd.append("file", file);
      fd.append("privacy", privacy ? "1" : "");
      fd.append("website", honeypotRef.current?.value ?? "");

      const res = await fetch("/api/contact-offer", { method: "POST", body: fd });
      let json: { ok?: boolean; error?: string } = {};
      try {
        json = (await res.json()) as { ok?: boolean; error?: string };
      } catch {
        /* ignore */
      }

      if (!res.ok || !json.ok) {
        setSubmitError(typeof json.error === "string" ? json.error : "Įvyko klaida. Bandykite dar kartą.");
        return;
      }
      setSuccess(true);
    } catch {
      setSubmitError("Nepavyko prisijungti prie serverio. Patikrinkite ryšį ir bandykite vėliau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setName("");
    setPhone("");
    setEmail("");
    setSolutions(Object.fromEntries(SOLUTION_OPTIONS.map((o) => [o, false])) as Record<string, boolean>);
    setObjectType("");
    setCity("");
    setMessage("");
    clearFile();
    setPrivacy(false);
    setErrors({});
    setSuccess(false);
    setSubmitError(null);
    setIsSubmitting(false);
    setPrefillData(false);
    setInterestProduct("");
  };

  if (success) {
    return (
      <div
        aria-live="polite"
        className="flex max-w-[560px] flex-col gap-5 rounded-2xl border border-[rgba(163,170,214,0.35)] bg-[#f6f7ff] p-6 md:p-8"
        role="status"
      >
        <div className="flex flex-col gap-3 text-center">
          <h3 className="text-xl font-semibold text-[#16216b]">Ačiū! Užklausa gauta.</h3>
          <p className="text-[15px] text-[#16216b]">
            Atsakysime jums el. paštu per 24 val. darbo dienomis.
          </p>
          <p className="text-[14px] text-[#16216b]">
            Klausimų? Skambinkite:{" "}
            <a href="tel:+37060620666" className="font-semibold text-[#263cd0]">
              +370 606 20 666
            </a>
          </p>
          <Link href="/" className="mt-2 text-[13px] font-medium text-[#263cd0] underline underline-offset-2">
            Grįžti į pradžią
          </Link>
        </div>
        <button
          className="inline-flex w-full items-center justify-center rounded-full border border-[#263cd0] bg-white px-6 py-3 text-[15px] font-semibold text-[#263cd0] transition hover:bg-[#f6f7ff] sm:w-auto"
          onClick={resetForm}
          type="button"
        >
          Pateikti naują užklausą
        </button>
      </div>
    );
  }

  return (
    <div className="flex w-full max-w-[720px] flex-col gap-8">
      <p className="text-[13px] font-medium text-[#16216b]" id={`${formId}-required-note`}>
        <span className="text-[#b42318]" aria-hidden>
          *
        </span>{" "}
        Pažymėti laukai yra privalomi.
      </p>

      {submitError ? (
        <p className="text-[13px] font-medium text-[#b42318]" role="alert">
          {submitError}
        </p>
      ) : null}

      <form className="flex flex-col gap-10" noValidate onSubmit={onSubmit}>
        <input
          ref={honeypotRef}
          aria-hidden
          autoComplete="off"
          className="sr-only"
          name="website"
          tabIndex={-1}
          type="text"
        />
        {prefillData && (
          <div
            className="flex items-start gap-2.5 rounded-xl bg-[#f0f3ff] px-4 py-3 text-[13px] font-medium text-[#263cd0]"
            role="status"
          >
            <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-[#263cd0]" strokeWidth={2.5} />
            <span>
              Kai kurie laukai užpildyti automatiškai pagal projektą arba peržiūrėtą puslapį. Patikrinkite ir pateikite
              užklausą.
            </span>
          </div>
        )}
        {/* Kontaktai */}
        <fieldset className="min-w-0 space-y-5 border-0 p-0">
          <legend className="mb-1 text-[16px] font-semibold text-[#16216b] md:text-[17px]">Kontaktai</legend>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-start">
            <div className="min-w-0 space-y-1.5">
              <label className="block text-[13px] font-semibold text-[#16216b]" htmlFor={nameId}>
                Vardas <span className="text-[#b42318]">*</span>
              </label>
              <input
                aria-describedby={errors.name ? `${nameId}-err` : undefined}
                aria-invalid={errors.name ? true : undefined}
                autoComplete="name"
                className={cx(inputBase, errors.name ? inputErr : inputOk)}
                id={nameId}
                onChange={(ev) => {
                  setName(ev.target.value);
                  if (errors.name) setErrors((er) => ({ ...er, name: undefined }));
                }}
                placeholder="Pvz. Tomas"
                ref={nameRef}
                required
                type="text"
                value={name}
              />
              {errors.name ? (
                <p className="text-[13px] font-medium text-[#b42318]" id={`${nameId}-err`} role="alert">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="min-w-0 space-y-1.5">
              <label className="block text-[13px] font-semibold text-[#16216b]" htmlFor={emailId}>
                El. paštas <span className="text-[#b42318]">*</span>
              </label>
              <input
                aria-describedby={errors.email ? `${emailId}-err` : undefined}
                aria-invalid={errors.email ? true : undefined}
                autoComplete="email"
                className={cx(inputBase, errors.email ? inputErr : inputOk)}
                id={emailId}
                inputMode="email"
                onChange={(ev) => {
                  setEmail(ev.target.value);
                  if (errors.email) setErrors((er) => ({ ...er, email: undefined }));
                }}
                placeholder="Pvz. vardas@email.lt"
                ref={emailRef}
                required
                type="email"
                value={email}
              />
              {errors.email ? (
                <p className="text-[13px] font-medium text-[#b42318]" id={`${emailId}-err`} role="alert">
                  {errors.email}
                </p>
              ) : null}
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-semibold text-[#16216b]" htmlFor={phoneId}>
              Telefono numeris
            </label>
            <input
              autoComplete="tel"
              className={cx(inputBase, inputOk)}
              id={phoneId}
              inputMode="tel"
              onChange={(ev) => setPhone(ev.target.value)}
              placeholder="+370 600 00 000"
              type="tel"
              value={phone}
            />
          </div>
        </fieldset>

        {/* Projektas */}
        <fieldset className="min-w-0 space-y-5 border-0 p-0">
          <legend className="mb-1 text-[16px] font-semibold text-[#16216b] md:text-[17px]">Projektas</legend>

          <fieldset
            aria-describedby={errors.solutions ? `${solutionsId}-err` : undefined}
            aria-invalid={errors.solutions ? true : undefined}
            aria-required="true"
            className="min-w-0 space-y-3 border-0 p-0"
            id={solutionsId}
            ref={solutionsFieldsetRef}
            tabIndex={-1}
          >
            <legend className="text-[13px] font-semibold text-[#16216b]">
              Kokio sprendimo ieškote? <span className="text-[#b42318]">*</span>
            </legend>
            <div className="grid gap-3 sm:grid-cols-2">
              {SOLUTION_OPTIONS.map((opt) => {
                const cid = `${formId}-sol-${opt.replace(/\s+/g, "-")}`;
                return (
                  <div className="flex items-start gap-2.5" key={opt}>
                    <BrandCheckboxControl
                      checked={solutions[opt] ?? false}
                      id={cid}
                      onToggle={() => {
                        setSolutions((s) => ({ ...s, [opt]: !s[opt] }));
                        if (errors.solutions) setErrors((er) => ({ ...er, solutions: undefined }));
                      }}
                    />
                    <label className="cursor-pointer text-[14px] leading-snug text-[#16216b] md:text-[15px]" htmlFor={cid}>
                      {opt}
                    </label>
                  </div>
                );
              })}
            </div>
            {errors.solutions ? (
              <p className="text-[13px] font-medium text-[#b42318]" id={`${solutionsId}-err`} role="alert">
                {errors.solutions}
              </p>
            ) : null}
          </fieldset>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-semibold text-[#16216b]" htmlFor={interestProductId}>
              Produktas (nebūtina)
            </label>
            <FormSelect
              emptyLabel="—"
              groups={productGroups.map((g) => ({ label: g.group, options: g.options }))}
              id={interestProductId}
              onChange={setInterestProduct}
              value={interestProduct}
            />
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:items-start">
            <div className="min-w-0 space-y-1.5">
              <label className="block text-[13px] font-semibold text-[#16216b]" htmlFor={objectTypeId}>
                Objekto tipas
              </label>
              <FormSelect
                id={objectTypeId}
                onChange={setObjectType}
                options={OBJECT_TYPE_OPTIONS}
                value={objectType}
              />
            </div>

            <div className="min-w-0 space-y-1.5">
              <label className="block text-[13px] font-semibold text-[#16216b]" htmlFor={cityId}>
                Miestas arba objekto vieta
              </label>
              <input
                autoComplete="address-level2"
                className={cx(inputBase, inputOk)}
                id={cityId}
                onChange={(ev) => setCity(ev.target.value)}
                placeholder="Pvz. Šiauliai"
                type="text"
                value={city}
              />
            </div>
          </div>
        </fieldset>

        {/* Papildoma informacija */}
        <fieldset className="min-w-0 space-y-5 border-0 p-0">
          <legend className="mb-1 text-[16px] font-semibold text-[#16216b] md:text-[17px]">
            Papildoma informacija
          </legend>

          <div className="space-y-1.5">
            <label className="block text-[13px] font-semibold text-[#16216b]" htmlFor={messageId}>
              Trumpai aprašykite poreikį
            </label>
            <textarea
              className={cx(inputBase, inputOk, "min-h-[120px] resize-y leading-relaxed")}
              id={messageId}
              onChange={(ev) => setMessage(ev.target.value)}
              placeholder="Trumpai aprašykite situaciją — kokios angos, koks pastatas, kokie norai..."
              rows={5}
              value={message}
            />
          </div>

          <div className="space-y-2">
            <label className="block text-[13px] font-semibold text-[#16216b]" htmlFor={fileId}>
              Pridėkite nuotrauką, brėžinį arba matmenis
            </label>
            <p className="text-[13px] leading-relaxed text-[#16216b]" id={`${fileId}-hint`}>
              Galite įkelti balkono, terasos, angos nuotrauką, brėžinį ar matmenų failą.
            </p>
            <input
              accept=".jpg,.jpeg,.png,.pdf,.heic,image/jpeg,image/png,application/pdf,image/heic"
              aria-describedby={`${fileId}-hint${errors.file ? ` ${fileId}-err` : ""}`}
              aria-invalid={errors.file ? true : undefined}
              className="sr-only"
              id={fileId}
              onChange={onFileChange}
              ref={fileInputRef}
              type="file"
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <button
                className="inline-flex w-full items-center justify-center rounded-full border border-[#263cd0] bg-white px-6 py-3 text-[14px] font-semibold text-[#263cd0] transition hover:bg-[#f6f7ff] focus:outline-none focus:ring-2 focus:ring-[#263cd0] focus:ring-offset-2 sm:w-auto"
                onClick={() => fileInputRef.current?.click()}
                type="button"
              >
                Pasirinkti failą
              </button>
              {file ? (
                <div className="flex min-w-0 flex-1 flex-wrap items-center gap-2 text-[14px] text-[#16216b]">
                  <span className="min-w-0 truncate font-medium" title={file.name}>
                    {file.name}
                  </span>
                  <span className="text-[#59799f]">({Math.round(file.size / 1024)} KB)</span>
                  <button
                    className="shrink-0 rounded-full border border-[rgba(163,170,214,0.5)] px-3 py-1 text-[13px] font-semibold text-[#59799f] transition hover:border-[#b42318]/40 hover:text-[#b42318] focus:outline-none focus:ring-2 focus:ring-[#263cd0] focus:ring-offset-2"
                    onClick={clearFile}
                    type="button"
                  >
                    Šalinti
                  </button>
                </div>
              ) : null}
            </div>
            {errors.file ? (
              <p className="text-[13px] font-medium text-[#b42318]" id={`${fileId}-err`} role="alert">
                {errors.file}
              </p>
            ) : null}
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <BrandCheckboxControl
                aria-describedby={errors.privacy ? `${privacyId}-err` : undefined}
                aria-invalid={errors.privacy ? true : undefined}
                checked={privacy}
                id={privacyId}
                onToggle={() => {
                  setPrivacy((p) => !p);
                  if (errors.privacy) setErrors((er) => ({ ...er, privacy: undefined }));
                }}
                required
              />
              <label className="cursor-pointer text-[14px] leading-relaxed text-[#16216b]" htmlFor={privacyId}>
                <span className="text-[#b42318]">*</span> Sutinku, kad mano pateikti duomenys būtų naudojami atsakymui
                į užklausą paruošti.{" "}
                <Link className="font-semibold text-[#263cd0] underline underline-offset-2" href={PRIVACY_POLICY_HREF}>
                  Privatumo politika
                </Link>
              </label>
            </div>
            {errors.privacy ? (
              <p className="text-[13px] font-medium text-[#b42318]" id={`${privacyId}-err`} role="alert">
                {errors.privacy}
              </p>
            ) : null}
          </div>

          <button
            className="inline-flex w-full items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8] focus:outline-none focus:ring-2 focus:ring-[#263cd0] focus:ring-offset-2 enabled:cursor-pointer disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            disabled={isSubmitting}
            type="submit"
          >
            {isSubmitting ? "Siunčiama…" : "Siųsti užklausą"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
