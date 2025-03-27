export function extractOffset(url: string): number | undefined {
  try {
    const urlObject = new URL(url);
    const offset = urlObject.searchParams.get('offset');
    if (offset) {
      return parseInt(offset, 10);
    }
  } catch (error) {
    console.warn(`Failed to parse offset in ${url}`, error);
  }
}
