let num1 = parseInt(prompt("Ingresa el número 1: "));
let num2 = parseInt(prompt("Ingresa el número 2: "));
let num3 = parseInt(prompt("Ingresa el número 3: "));

console.log("número 1: " + num1);
console.log("número 2: " + num2);
console.log("número 3: " + num3);

let primero;
let segundo;
let tercero;

if(num1 === num2 && num2 === num3){
  console.log("Los 3 números son iguales");
    primero = num1;
    segundo = num2;
    tercero = num3;
} else if(num1 == num2){
  if(num1 > num3){
    primero = num1;
    segundo = num2;
    tercero = num3;
  } else {
    primero = num3;
    segundo = num1;
    tercero = num2;
  }
} else if(num2 == num3){
  if(num2 > num1){
    primero = num2;
    segundo = num3; 
    tercero = num1;
  } else {
    primero = num1;
    segundo = num2;
    tercero = num3;
  }
} else if(num1 == num3){
  if(num1 > num2){
    primero = num1;
    segundo = num3;
    tercero = num2;
  } else {
    primero = num2;
    segundo = num1;
    tercero = num3;
  }
} else if (num1 > num2 && num1 > num3){
  primero = num1;
  if(num2 > num3){
    segundo = num2;
    tercero = num3;
  } else{
    segundo = num3;
    tercero = num2;
  }
} else if (num2 > num1 && num2 > num3){
  primero = num2;
  if(num1 > num3){
    segundo = num1;
    tercero = num3;
  } else {
    segundo = num3;
    tercero = num1;
  }
} else {
  primero  = num3;
  if(num1 > num2){
    segundo = num1;
    tercero = num2;
  } else {
    segundo = num2;
    tercero = num1;
  }
}

console.log(`Mayor a mejor: ${primero}, ${segundo}, ${tercero}`);
console.log(`Menor a Mayor: ${tercero}, ${segundo}, ${primero}`);