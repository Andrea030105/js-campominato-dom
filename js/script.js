/* 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta;
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'arrey delle bombe non potranno esserci due numeri ugalai.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati "abiamo calpestato una bomaba" la cella si colora di rosso e la partita termina.

La partita termina qunado il giocatore clicca su una bomba o quando raggiunge il numero massimo di caselle azzurre.

Il software comunica il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella azzurra.

BONUS


*/

/* INTERCETTO IL CLICK DEL BOTTONE */

const btn_Genera = document.getElementById("btn-genera");

btn_Genera.addEventListener("click", function () {

    /* PREDNO LA DIFFICOLTA' SELEZIONATA */

    let diff = document.getElementById("diff").value;
    let min;
    let max;

    if (diff == 3) {
        min = 1;
        max = 49;
        btnGenera(min, max);
    } else if (diff == 2) {
        min = 1;
        max = 81;
        btnGenera(min, max);
    } else {
        min = 1;
        max = 100;
        btnGenera(min, max);
    }

})

/* COLLEGO TUTTO AL BOTTONE GENERATORE */

function btnGenera(min, max) {
    const grid = document.getElementById("grid");
    let bombsArrey = bombs(min, max);
    console.log(bombsArrey);
    generateGameGrid(min, max, bombsArrey);

}

/* CREO ARREY CON LE BOMBE */

function bombs(min, max) {
    let bombsArrey = [];

    let i = 0;

    while (i < 16) {
        let randomBombs = Math.floor(Math.random() * (max - min + 1) + min);

        if (!bombsArrey.includes(randomBombs)) {
            bombsArrey.push(randomBombs);
            i++
        }
    }
    return bombsArrey;
}

/* MOSTRO TUTTE LE BOMBE */

function showAllBombs(bombsArrey) {
    const cells = document.getElementsByClassName("square");

    for (let i = 0; i < cells.length; i++) {
        let cell = cells[i];
        if (bombsArrey.includes(parseInt(cell.innerText))) {
            cell.classList.add("red-bomb")
        }
    }
}

/* CREA LA GRIGLIA E RICHIAMO I QUADRATI */

function generateGameGrid(min, max, bombsArrey) {
    grid.innerHTML = "";
    grid.classList.remove("pointer-none");
    let pointAqua = 0;

    const pointContainer = document.querySelector(".point-container");
    let point = document.createElement("h1");

    for (let i = min; i <= max; i++) {
        const currentSquare = createSquare(i);
        grid.appendChild(currentSquare);
        currentSquare.innerText = i;
        currentSquare.addEventListener("click", function () {
            if (bombsArrey.includes(parseInt(this.innerText))) {
                this.classList.add("red-bomb");
                grid.classList.add("pointer-none");
                showAllBombs(bombsArrey);
                point.innerHTML = `Il tuo punteggio è ${pointAqua}`;
                pointContainer.appendChild(point);

            } else {
                pointAqua++;
                this.classList.add("bg-aqua");
                this.classList.add("pointer-none");
                console.log(pointAqua);
                if (pointAqua == (max - 16)) {
                    point.innerHTML = `Il tuo punteggio è ${pointAqua}`;
                    pointContainer.appendChild(point);
                }
            }
        })
    }
}

/* CREO I QUADRATI IN BASE ALLA DIFFICOLTA' */

function createSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    if (diff == 3) {
        square.classList.add("square-3");
    } else if (diff == 2) {
        square.classList.add("square-2");
    }
    return square;
}