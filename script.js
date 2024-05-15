// Exercise #3
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}

// Exercise #4
let xValue = 3;
while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}

//
let Num = 1;
while (Num <= 100) {
  if (Num % 2 == 0) {
    console.log(Num);
  }
  Num++;
}

//
let square = 0;
while (square <= 5) {
  console.log([square]);
  square++;
}

//
function totalNum(j) {
  if (j <= 0) {
    return 0;
  }
  let Sum = 0;
  let Number = 1;
  while (Number <= j) {
    Sum += Number;
    Number++;
  }
  return Sum;
}
console.log(totalNum(8));