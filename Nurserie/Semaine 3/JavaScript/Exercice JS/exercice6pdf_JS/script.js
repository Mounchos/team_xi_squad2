let x = Number(prompt("Veuillez indiquer un nombre"));
let operator = prompt("Veuillez indiquer un des opérateurs suivants: +,-,/,*");
let z = Number(prompt("Veuillez indiquer un second nombre"));

let result

if (operator === '+') {
    result = x + z;
}

else if (operator === '-') {
result = x - z;
}

else if (operator === '*') {
    result = x * y;
}

else {
    result = x / y;
}

alert("Le résultat est de" + result);
