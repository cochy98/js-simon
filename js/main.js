/**
    Descrizione:
    Visualizzare in pagina 5 numeri casuali.
    Da lì parte un timer di 30 secondi.
    Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
    Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
    BONUS
    L'utente potrebbe inserire tutti i numeri esatti ma nell'ordine sbagliato. Implementare un meccanismo che prevede tale errore.
 */

/**
 * PARTE 1
 * 1) Mi creo nell'html un elemento dove posso andare a visualizzare 5 numeri random.
 * 2) Inizializzo un array vuoto, dopodiché con la funzione random inserisco all'interno 5 numeri random.
 * 3) Richiamo tramite ID l'elemento del DOM creato in precedenza e al suo interno visualizzo i numeri.
 * 
 * PARTE 2
 * 4) Faccio passare 30 secondi e chiedo all'utente di inserire uno per volta 5 numeri
 * 5) Confronto i numeri inseriti dall'utente con quelli random e comunico quanti e quali erano corretti.
 */

// Inizializzo un array vuoto
const randomNums = [];

// Aggiugo all'interno dell'array 5 numeri random da 1 a 50 e li visualizzo in console
for (let i = 0; i < 5; i++){
    randomNums.push(getRandomInt(50));
    console.log(randomNums[i]);
    document.querySelector('#output').innerHTML += `${randomNums[i]} `;
}

// Eseguo una funzione dopo 30 secondi
setTimeout (numberComparsion, 5 * 1000, randomNums);






/* **********************************FUNCTIONS*********************************** */
/**
 * La seguente funzione genera un numero random da 1 a un numero definito
 * @param {*} max   Numero max random che può ritornare la funzione
 * @returns         Ritorna un numero random tra 1 e un max definito
 */
function getRandomInt(max) {
    return Math.floor( (Math.random() * max) + 1);
}


/**
 * 
 * @param {*} randomNumsArray Array di numeri random da confrontare con quelli inseriti dall'utente
 */
function numberComparsion(randomNumsArray){
    // Comparando i numeri mi fermo alla prima iterazione
    let trovato = false;
    // Memorizzo i numeri inseriti dall'utente
    const userNumberArray = [];
    // Memorizzo i numeri inseriti dall'utente, che comparati con quelli random del PC risultano uguali
    const numbersCompared = [];
    let outputText = "";

    for (let i = 0; i < randomNumsArray.length; i++){
        userNumberArray.push( parseInt(prompt(`Inserisci il ${i + 1}° da confontare`)) );
    }

    for (let i = 0; i < userNumberArray.length; i++){
        for (let j = 0; j < randomNumsArray.length; j++){
            // Se il numero inserito dall'utente è uguale a quello generato random
            if ( (userNumberArray[i] === randomNumsArray[j]) && !(trovato) ){
                numbersCompared.push(userNumberArray[i]);
                // Ho trovato il numero, posso uscire dal ciclo più interno
                trovato = true;
            }
        }
        // Risetto 'trovato = false', altrimenti non entrerà più nel ciclo più interno
        trovato = false;
    }
    outputText = `L'utente ha inserito correttamente ${numbersCompared.length} numeri, e sono: ${numbersCompared}`;
    console.log(outputText);
}