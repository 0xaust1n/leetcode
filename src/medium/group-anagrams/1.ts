function groupAnagrams(strs: string[]): string[][] {
  const recordMap: Map<string, string[]> = new Map();

  for (const item of strs) {
    const sortStr = item.split('').sort().join('');
    // put item into map
    const mapStore = recordMap.get(sortStr) || [];
    mapStore.push(item);
    recordMap.set(sortStr, mapStore);
  }
  return Array.from(recordMap.values());
}
