let adresse = `hello world` ;
let age = 23;

console.log(adresse);
console.log(age);

console.log(`Bonjour mon âge est de ${age} + ans!`);

age = 23;
adresse = "bonjour l'équipe";

console.log("bonjour mon âge est de" + age + " ans !");
console.log(adresse.length);
console.log(adresse.toUpperCase());
console.log(adresse.substring(10,16));


const numbers = new Array (1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const fruits =  ["mangue","pastèque","poire","orange","ananas","fraise","framboise","citron"];
console.log(fruits[5]);

fruits.unshift("hindi");
fruits.push("durian");
console.table(fruits);

fruits.shift();
fruits.pop();
console.log(fruits);

console.log(fruits.indexOf("poire"));
console.log(Array.isArray);

const personne = {
    prenom: "Anas",
    nom: "Tounsi",
    age: 70,
    passions: ["Foot","Maths","Chimie"],
    adresse: {
        rue: "Rue Colbert",
        ville: "Lille",
        code_postal: "59000",
    }
}

console.log(personne)

personne.prenom = "Julie";
personne.email = "Julie@example.fr"
console.log(personne.prenom)

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

console.table(todos);

console.log(todos)
