/*****************************
 * 029-2 - Boucles pour parcourir des tableaux
 */

// EXERCICE 1 :
// 1. Créez un tableau 'films' contenant les films "Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux" et "Harry Potter".
const films = ["Forrest Gump", "Bohemian Rhapsody", "Le Seigneur des anneaux", "Harry Potter"];

// 2. Parcourez ce tableau pour afficher les films qu'il contient :
//    1°) avec une boucle for
for (let i = 0; i < films.length; i++) {
    console.log(`Avec une boucle for :${films[i]}`);
}

//    2°) avec une boucle while
let i = 0;
while (i < films.length) {
    console.log(`Avec une boucle while :${films[i]}`);
    i++;
}

//    3°) avec une boucle for of
for (const film of films) {
    console.log(`Avec une boucle for of :${film}`);
}

// EXERCICE 2 :
// - Stockez le tableau ['John', 'Smith', 1990, 'designer', false, 'blue'] dans une variable 'john'.
const john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// - Parcourez ce tableau pour afficher les informations qu'il contient :
//    1°) avec une boucle for
for (let i = 0; i < john.length; i++) {
    console.log(`Avec une boucle for :${john[i]}`);
}

//    2°) avec une boucle while
let j = 0;
while (j < john.length) {
    console.log(`Avec une boucle while :${john[j]}`);
    j++;
}

//    3°) avec une boucle for of
for (const johns of john) {
    console.log(`Avec une boucle for of :${johns}`);
}

// EXERCICE 3 :
// - Créez un tableau "nombres" contenant les 5 premiers entiers.
const nombres = [1, 2, 3, 4, 5];
const carres = [];

// - Affichez "Voici mon tableau de nombres :" suivi du tableau.
for (const nombre of nombres) {
    console.log(nombre);
    carres.push(nombre*nombre);
}
// - Créez un tableau vide "carres" qui contiendra les carrés de vos nombres.

// - Parcourez le tableau "nombres" avec une boucle forEach et ajoutez dans le tableau "carres" le carré de chaque nombre.


// - Affichez "Voici mon tableau de nombres au carré :" suivi du tableau contenant les carrés.

console.log(`Voici mon tableau de nombres au carré: ${carres}`);
