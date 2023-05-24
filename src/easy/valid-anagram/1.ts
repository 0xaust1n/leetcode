function isAnagram(s: string, t: string): boolean {
  const sMap = new Map();
  const tMap = new Map();

  for (const str of s.split("")) {
    if (!sMap.has(str)) {
      sMap.set(str, 1);
    } else {
      let temp = sMap.get(str);
      sMap.set(str, +1);
    }
  }

  for (const str of t.split("")) {
    if (!tMap.has(str)) {
      tMap.set(str, 1);
    } else {
      tMap.set(str, tMap.get(str) + 1);
    }
  }

  for (const key of sMap.keys()) {
    if (sMap.get(key) !== tMap.get(key)) {
      return false;
    }
  }
  return true;
}
