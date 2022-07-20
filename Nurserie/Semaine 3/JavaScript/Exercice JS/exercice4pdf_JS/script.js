const num1 = Number(prompt("Veuillez noter le nombre"));
const num2 = Number(prompt("Veuillez noter le nombre"));
const num3 = Number(prompt("Veuillez noter le nombre"));
let largest;

if(num1 >= num2 && num1 >= num3) {
    largest = num1;
} 
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}
alert("Le plus grand nombre est" + largest);