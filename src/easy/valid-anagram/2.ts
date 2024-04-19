function isAnagram2(s: string, t: string): boolean {
  let sArr = s.split('');
  let tArr = t.split('');

  // early error return
  if (sArr.length !== tArr.length) {
    return false;
  }

  let sMap = new Map<string, number>();
  let tMap = new Map<string, number>();

  sArr.forEach((item: string) => {
    if (sMap.has(item)) {
      sMap.set(item, sMap.get(item)! + 1);
    } else {
      sMap.set(item, 1);
    }
  });

  tArr.forEach((item: string) => {
    if (tMap.has(item)) {
      tMap.set(item, tMap.get(item)! + 1);
    } else {
      tMap.set(item, 1);
    }
  });

  sMap.forEach((v, k) => {
    // early error turn
    if (!tMap.has(k)) {
      return false;
    }

    if (v != tMap.get(k)) {
      return false;
    }
  });

  return true;
}
