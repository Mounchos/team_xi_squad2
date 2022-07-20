let x = Number(prompt(`Veuillez saisir le prix de fabrication`));
let y = Number(prompt(`Veuillez saisir le prix de vente`));

let z = x-y
let a = x-y*(-1)

switch(true) {
case x>y:
    alert(`Perte de ${z}`)
break;

case x<y:
    alert(`Bénéfice de ${a}`)
    break;
}