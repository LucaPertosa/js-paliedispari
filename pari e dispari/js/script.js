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

// Sommiamo il numero dell'utente con il numero creato per il computer

// Stabiliamo se la somma dei numeri è pari o dispari attraverso una funzione

// Dichiaro chi ha vinto