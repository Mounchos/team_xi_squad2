let prenom = prompt("Saisir un prénom");
alert(`Bienvenue ${prenom}`);

let nombre1 = Number(prompt("nombre1"));
let nombre2 = Number(prompt("nombre2"));
let somme = Number(nombre1 + nombre2);
alert(`la somme des deux nombres est ${somme}`);

const x = 23;
const y = 12;

if (x == y) {

    console.log(`${x} est égale à ${y}, strictement ça n'existe pas!`);
} else if (x < y) {
    alert(`${x} est inférieur à ${y}`);
} else {
        alert(`${x} est supérieur à ${y}`)
    }

    const todos = [
        {
            id: 1,
            Text: "Faire les courses",
            isCompleted: true,
        },
        
        {
            id: 2,
            Text: "Parti dormir",
            isCompleted: false,
        },
        
        {
            id: 3,
            Text: "Faire ses besoins",
            isCompleted: true,
        },
        ]
        
let saisi = Number(prompt(`Veuillez saisir un nombre entre 0 et 2`));

        if (saisi >= 0 && saisi <= 3) { 
            if (todos[saisi].isCompleted == true) {
                alert(todos[saisi].Text + "a été effectué");
            }
            else {
            alert(todos[saisi].Text + "n'a pas été effectué");
            }
        }
        else {
    alert("Saisie incorrecte veuillez recommencer!");
}

