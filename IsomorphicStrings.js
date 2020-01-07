var isIsomorphic = function(s, t) {
  if (s === t) return true;
  const lens= s.length;
  let i = 1;
  if (lens !== t.length) return false;
  while (i < lens) {
    if (s.indexOf(s[i]) === t.indexOf(t[i])) {
      i++;
    } else {
      break;
    }
  }
  return i === lens;
};

console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));
