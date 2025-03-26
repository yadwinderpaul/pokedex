export function extractOffset(url: string): number {
  const urlObject = new URL(url);
  const offset = urlObject.searchParams.get('offset');
  return offset ? parseInt(offset, 10) : 0;
}
