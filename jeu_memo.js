
const cards = [
    "asset_fish.png",
    "asset_gamelle.png",
];

const init = function () { //Jeu charge à la page

    var score = 0;
    var time = 30;
    var speed = 600;
    var images = document.querySelectorAll(".box img");
    var scoreElt = document.querySelector(".score");
    var timeElt = document.querySelector(".time");
    var sectionFirst = document.querySelector(".section_first");
    var modalText = document.querySelector(".section_first_texte");
    var buttonStart = document.querySelector(".button_start");
    var setTimer, setShowHide;

    // Pour faire la grille

    const grid = new Array(4).fill(-1); //tableau 2 par 2


    function start() {


        var cards_element = document.querySelectorAll(".card_front");

        cards.forEach((cardImage, currentCard) => {

            //Permet de déterminer si il faut encore insérer cette carte
            while (grid.filter((card) => card === currentCard).length < 2) {
                const cell = randomize(grid.length);

                if (grid[cell] === -1) {
                    grid[cell] = currentCard;
                    cards_element[cell].src = `images/${cardImage}`;


                }
            }

        })

        sectionFirst.classList.add("hidden");
    }


    // Boutton du jeu
    buttonStart.addEventListener("click", start);

    // timer
    function timer() {
        if (time) {
            time -= 1;
            timeElt.innerHTML = time;
        }
        else {
            restart();
        }
    }

    // Pour rejouer
    function restart() {
        modalText.innerHTML = "You scored " + score + " !";
        sectionFirst.classList.remove("hidden");
        clearInterval(setTimer);
        clearInterval(setShowHide);
        time = 30;
        score = 0;
        timeElt.innerHTML = time;
        scoreElt.innerHTML = score;
    }

    // function random
    function randomize(rand) {
        return Math.floor(Math.random() * rand);
    }



}

window.onload = init;


