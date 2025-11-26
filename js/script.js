/* 
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta;
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'arrey delle bombe non potranno esserci due numeri ugalai.

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati "abiamo calpestato una bomaba" la cella si colora di rosso e la partita termina.

La partita termina qunado il giocatore clicca su una bomba o quando raggiunge il numero massimo di caselle azzurre.

Il software comunica il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella azzurra.

BONUS


*/

const btn_Genera = document.getElementById("btn-genera");

btn_Genera.addEventListener("click", function () {
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

    function btnGenera(min, max) {
        const grid = document.getElementById("grid");
        generateGameGrid(min, max);


        function generateGameGrid(min, max) {
            grid.innerHTML = "";
            for (let i = min; i <= max; i++) {
                const currentSquare = createSquare(i);
                grid.appendChild(currentSquare);
                currentSquare.innerText = i;
                currentSquare.addEventListener("click", function () {
                    this.classList.toggle("bg-aqua");
                    console.log(i)
                })
            }

        }

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

    }

})