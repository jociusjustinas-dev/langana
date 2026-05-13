/** Paieška Google žemėlapyje – naršyklėje naujame skirtuke; mobiliuose dažnai pasiūlo „Google Maps“ programą. */
export function googleMapsSearchUrl(address: string): string {
  const q = `${address}, Lietuva`;
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
}
