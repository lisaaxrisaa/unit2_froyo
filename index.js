let froyoPrompt = prompt(
  'Please enter your ice cream flavors, separated by , .'
);

let arrFroyo = froyoPrompt.split(',');

const objFroyo = {};

const countFroyo = () => {
  for (let i = 0; i < arrFroyo.length; i++) {
    let flavor = arrFroyo[i];
    if (objFroyo[flavor]) {
      objFroyo[flavor]++;
    } else objFroyo[flavor] = 1;
  }
};

countFroyo();

console.log(objFroyo);
