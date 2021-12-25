let n1 = 0;
let n2 = 1;
let i = n1 + n2;

while (true) {
  if (i > 1000) break;
  n1 = n2;
  n2 = i;
  i = n1 + n2;
  console.log(i);
}