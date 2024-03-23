type Params = {
  query: string;
  target: string;
};

function toHiragana(str: string): string {
  return str.replace(/[\u30a1-\u30f6]/g, function(match) {
    const chr = match.charCodeAt(0) - 0x60;
    return String.fromCharCode(chr);
  });
}

function normalizeString(str: string): string {
  return toHiragana(str.normalize('NFKC')).toLowerCase();
}

export function isContains({ query, target }: Params): boolean {
  const normalizedQuery = normalizeString(query);
  const normalizedTarget = normalizeString(target);

  return normalizedTarget.includes(normalizedQuery);
}
