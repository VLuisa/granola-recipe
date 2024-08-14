export let gcf = (n, d) => {
  let a, b;

  a = n > d ? n : d; // a will be top and should be larger
  b = n > d ? d : n; // b will be bottom and should be smaller

  let r = a % b; // remainder of larger/smaller

  while (r !== 0) {
    a = b;
    b = r;
    r = a % b;
  }
  return b;
};

export let fractionize = (decimal) => {
  if (typeof decimal !== "number") throw "Input must be a number";

  let dec = decimal % 1;
  let int = decimal - dec;

  let places = Number(dec.toString().length - 2); // decimal always leads with 0. so removing 2 from count
  if (places < 1) return int;
  let n = dec * Math.pow(10, places);
  let d = Math.pow(10, places);
  let g = gcf(n, d);
  n = n / g;
  d = d / g;

  if (int === 0) return `<sup>${n}</sup>&frasl;<sub>${d}</sub>`;
  return `${int}<sup>${n}</sup>&frasl;<sub>${d}</sub>`;
};
