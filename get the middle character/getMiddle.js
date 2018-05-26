
const getMiddle = s => {
  let h = s.length / 2;
  return s.substring(s.length %2 == 0 ? Math.round(h) - 1 : h, h + 1);
}
