/* Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
    --I numeri nella lista delle bombe non possono essere duplicati.--
        In seguito l'utente clicca su ogni cella:
            se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina,
            altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

            La partita termina quando
                -il giocatore clicca su una bomba
                -o raggiunge il numero massimo possibile di numeri consentiti. (numero celle - 16)


    Al termine della partita il software deve scoprire tutte le bombe e comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito. */


let is_game_in_progress = false;
const btnSubmit = document.getElementById("btn-start-game")
const btnLevel = document.getElementById("levelup")
const gameContainer = document.getElementById("boxgame")
const resultContainer = document.getElementById("result")
let bombs; //bombe
let count = 0;
let numberCellToAdd;
let cell;





btnSubmit.addEventListener("click", function() {



    difficoltLevel = btnLevel.value
    numberCellToAdd = cellNumber(difficoltLevel)
    bombs = bombNumberGenerator(numberCellToAdd)

    //reset
    gameContainer.innerHTML = "";
    const numberCol = Math.sqrt(numberCellToAdd)



    //creo la griglia
    is_game_in_progress = true;
    console.log(is_game_in_progress);
    for (let index = 1; index <= numberCellToAdd; index++) {
        cell = document.createElement("div")
        cell.classList.add("cel-box-" + Math.round(numberCol))
        gameContainer.append(cell)

        //stampa i numeri
        cell.innerHTML += index

        cell.addEventListener("click", cellonclick)

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

// in base al alla variabile numerototale di celle io andrò a creare un tot di quadrati
function cellonclick(event) {
    let cellclick = parseInt(event.target.innerText)
    if (bombs.includes(cellclick)) {
        is_game_in_progress = false;
        this.classList.add('bomb')
        console.log(is_game_in_progress);
        resultContainer.innerHTML = `<h1 class="mb-0 h-100 w-100 text-center end-game">Hai Perso </h1> `

    } else {
        is_game_in_progress = true;
        this.classList.toggle("active")
        if (is_game_in_progress == true) {
            console.log('gioca');
        } else {
            console.log('interrompi');
        }

    }

}


//generare le bombe
function bombNumberGenerator(numberCellToAdd) {
    const arrayBombs = []
    while (arrayBombs.length < 16) {
        const numbersRandomBombs = numsBombGenerator(1, numberCellToAdd)

        if (!arrayBombs.includes(numbersRandomBombs)) {
            arrayBombs.push(numbersRandomBombs)
        }
    }
    //valori delle bombe
    console.log(arrayBombs.sort());
    return arrayBombs;
}
//funzione che genera random il numero delle bombe
function numsBombGenerator(minNumber = 1, maxNumber = numberCellToAdd) {

    const numRandom = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
    return numRandom;
}