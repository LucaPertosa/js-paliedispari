// Chiedere all'utente di inserire una parola
const userWord = prompt("Ciao utente! Inserisci una parola e ti dirò se è palindroma");
console.log(userWord);
// Creare una funzione per capire se la parola inserita è palindroma.


// Creo la fuznione
function isPalindroma(userChoice) {
    // Trasformo la parola dell'utente in un array dove ogni lettera indica un elemento e ne inverto l'ordine
    let reverseWord = userChoice.split('').reverse().join('');
    // Restituisco il valore booleano come risposta alla funzione
    return reverseWord === userChoice;
};

// Stampo i messaggi 
if (isPalindroma(userWord)) {
    console.log('La parola inserita è palindroma');
} else {
    console.log('La parola inserita non è palindroma');
};

