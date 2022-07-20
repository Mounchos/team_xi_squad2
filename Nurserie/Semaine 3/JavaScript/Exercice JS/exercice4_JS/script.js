
// Boucle for
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
    ];

//     for (let i = 0; i < todos.length; i++) {
//         if (todos[i].isCompleted == true) {
//         document.write(`Boucle n°${ i + 1 } ${todos[i].Text} FAIT <br>`)
//     }        
//    else {
//         document.write(`Boucle n°${ i + 1 } ${todos[i].Text} PAS FAIT <br>`)
//     }
// }

function somme(a,b) {
    return document.write(a - b);

}
somme(12,14);

function affichageDate() {
const date = new Date();
document.write(`Aujourd'hui nous sommes le ${date.getDate()}/ ${date.getMonth() + 1}/ ${date.getFullYear()}`)
}

affichageDate();