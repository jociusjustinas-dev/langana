import "server-only";

type JsonLdNode = Record<string, unknown>;

interface JsonLdProps {
  /** Vienas ar keli schema.org objektai (be @context — prideda komponentas). */
  data: JsonLdNode | JsonLdNode[];
}

export function JsonLd({ data }: JsonLdProps) {
  const nodes = Array.isArray(data) ? data : [data];
  const payload: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
  return (
    <script
      // eslint-disable-next-line react/no-danger -- JSON-LD
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
      type="application/ld+json"
    />
  );
}
