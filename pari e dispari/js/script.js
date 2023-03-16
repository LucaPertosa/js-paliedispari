// Chiedo all'utente di scegliere tra pari o dispari
let userChoice;
do {
    userChoice = prompt("Scegli tra pari o dispari").toLowerCase();
} while (userChoice !== "pari" && userChoice !== "dispari");

console.log(`Hai scelto l'opzione ${userChoice}`);
// Chiedo all'utente di inserire un numero compreso tra 1 e 5
let userNumber;
do {
    userNumber = parseInt(prompt("Scegli un numero da 1 a 5"))
} while (userNumber < 1 || userNumber > 5);

console.log(`Hai scelto il numero ${userNumber}`);
// Creo una funzione che mi genera un numero random da 1 a 5 per il computer
function randomNmbr(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;    
}

// Creo la costante con il numero generato randomicamente
let rndComNumb = randomNmbr(1, 5)
console.log(`Il computer ha scelto il numero ${rndComNumb}`);
// Sommiamo il numero dell'utente con il numero creato per il computer
let sum;
sum = parseInt(rndComNumb + userNumber);
console.log(`La somma dei vostri numeri è: ${sum}`);
// Stabiliamo se la somma dei numeri è pari o dispari attraverso una funzione

function isOddOrEven(number) {
    if (sum % 2 === 0) {
        return "pari"
    } else {
        return "dispari"
    }
}

let result = isOddOrEven(sum)
console.log(result);
// Dichiaro chi ha vinto
if (result === userChoice) {
    console.log(`Hai vinto!`);
} else {
    console.log(`Hai perso!`);
}