const formatter = new Intl.DateTimeFormat("tr-TR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

/** ISO tarihi Türkçe biçimde gösterir. Sunucu ve istemcide aynı sonucu verir. */
export function formatDate(iso: string): string {
  return formatter.format(new Date(`${iso}T00:00:00Z`));
}
