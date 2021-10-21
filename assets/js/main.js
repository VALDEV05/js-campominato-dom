/*
L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata,
    in cui ogni cella contiene un numero tra quelli compresi in un range:
        con difficoltà 1 => tra 1 e 100
        con difficoltà 2 => tra 1 e 81
        con difficoltà 3 => tra 1 e 49

    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.

*/

const btnSubmit = document.getElementById("btn-start-game")
const btnLevel = document.getElementById("levelup")
const gameContainer = document.getElementById("boxgame")

btnSubmit.addEventListener("click", function() {
    difficoltLevel = btnLevel.value
    const numberCellToAdd = cellNumber(difficoltLevel)
    gameContainer.innerHTML = "";
    const numberCol = Math.sqrt(numberCellToAdd)

    for (let index = 1; index <= numberCellToAdd; index++) {
        // const element = numberCellToAdd[x];
        const cell = document.createElement("div")
        cell.classList.add("cel-box-" + Math.round(numberCol))
        gameContainer.append(cell)

        cell.innerHTML += index

        cell.addEventListener("click", function() {
            const array = ['1', '2', '3', '4', '5', '6']
            console.log(`cliccata la cella ${index}`);
            let cellnumber = index
            for (let index = 0; index < array.length; index++) {
                const element = array[index];
                if (element == cellnumber) {
                    console.log('bomba');

                } else {
                    cell.classList.toggle("active")
                }
            }

        })


    }
    console.log('Il livello scelto dall`utente è: ' + difficoltLevel)
})

//funzione che gestisce il numero delle celle in base al livello selezionato
function cellNumber(difficoltLevel) {
    let risultato

    if (difficoltLevel === "easy") {
        risultato = 100
    } else if (difficoltLevel === "medium") {
        risultato = 81
    } else(
        risultato = 49
    )

    return risultato

}


/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    --I numeri nella lista delle bombe non possono essere duplicati.--
        In seguito l'utente clicca su ogni cella:
            se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
            altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

            La partita termina quando
                -il giocatore clicca su una bomba
                -o raggiunge il numero massimo possibile di numeri consentiti. (numero celle - 16)


    Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */


//generare le bombe

function bombsGenerate(numberCellToAdd) {
    const bombs = []

    function getRandomNumber(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
    //creao array vuoto
    //ciclare finchè non si arriva alla lunghezza dell'array pari a 16

    while (bombs.length < 16) {
        //genera un numero tra un min e un max
        const randomNumber = getRandomNumber(1, numberCellToAdd)
            //verifica che il numero non è già incluso
        if (!bombs.includes(randomNumber)) {
            bombs.push(randomNumber)
        }
    }
    console.log(bombs);
}