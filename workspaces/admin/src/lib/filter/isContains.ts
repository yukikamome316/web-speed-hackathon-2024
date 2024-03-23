type Params = {
  query: string;
  target: string;
};

function normalizeString(str: string): string {
  return str.normalize('NFKC').toLowerCase();
}

export function isContains({ query, target }: Params): boolean {
  const normalizedQuery = normalizeString(query);
  const normalizedTarget = normalizeString(target);

  return normalizedTarget.includes(normalizedQuery);
}
