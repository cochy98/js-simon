/**
    Descrizione:
    Visualizzare in pagina 5 numeri casuali.
    Da lì parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

/**
 * 1) Mi creo nell'html un elemento dove posso andare a visualizzare 5 numeri random.
 * 2) Inizializzo un array vuoto, dopodiché con la funzione random inserisco all'interno 5 numeri random.
 * 3) Richiamo tramite ID l'elemento del DOM creato in precedenza e al suo interno visualizzo i numeri.
 */

// Inizializzo un array vuoto
const randomNums = [];

// Aggiugo all'interno dell'array 5 numeri random da 1 a 50 e li visualizzo in console
for (let i = 0; i < 5; i++){
    randomNums.push(getRandomInt(50));
    console.log(randomNums[i]);
    document.querySelector('#output').innerHTML += `${randomNums[i]} `;
}






/* **********************************FUNCTIONS*********************************** */
/**
 * La seguente funzione genera un numero random da 1 a un numero definito
 * @param {*} max   Numero max random che può ritornare la funzione
 * @returns         Ritorna un numero random tra 1 e un max definito
 */
function getRandomInt(max) {
    return Math.floor( (Math.random() * max) + 1);
}