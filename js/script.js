/* 
L'utente clicca su un bottone che genererà una griglia di gioco quadrata;
Ogni cella ha un numero progressivo, da 1 a 10;
Ci saranno quindi 10 caselle per ognuna delle 10 righe;
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

BONUS

Aggiungere una select accanto al bottone di genrazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1=> 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;

- con difficoltà 2=> 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;

- con difficoltà 3=> 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
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