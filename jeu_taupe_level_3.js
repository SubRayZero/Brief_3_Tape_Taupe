
const init = function () { //Jeu charge à la page

    var score = 0;
    var time = 30;
    var speed = 600;
    var images = document.querySelectorAll(".box img");
    //var imagesDore = document.querySelector(".marteleur_dore");
    var scoreElt = document.querySelector(".score");
    var timeElt = document.querySelector(".time");
    var sectionFirst = document.querySelector(".section_first");
    var modalText = document.querySelector(".section_first_texte");
    var buttonStart = document.querySelector(".button_start");
    var setTimer, setShowHide;

    // Boutton démarrage du jeu
    buttonStart.addEventListener("click", function () {

        sectionFirst.classList.add("hidden");
        setTimer = setInterval(timer, 1000);
        setShowHide = setInterval(showHide, speed * 2);

    });


    // score
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", marteleurTapper, marteleurDoreTapper);
    }

    function marteleurTapper(e) {
        curr = e.target;

        curr.parentNode.classList.add("touched");

        //pour vérifier si il y a le mot "or" : si oui, alors +=10
        if (curr.src.includes("or")) {
            score += 10;
        } else {
            score += 1;
        }
        scoreElt.innerHTML = score;
        setTimeout(function () {
            curr.parentNode.classList.remove("touched");
        }, speed / 2);

    }

    function marteleurDoreTapper(d) {
        curr = d.target;
        curr.parentNode.classList.add("touched");
        score += 100;
        scoreElt.innerHTML = score;
        setTimeout(function () {
            curr.parentNode.classList.remove("touched");
        }, speed / 2);
    }

    // Pour cacher et montrer les marteleurs
    function showHide() {
        var randd = randomize(9);
        images[randd].style.top = "30px"; //taille du marteleur qui se montre


        setTimeout(function () {
            images[randd].style.top = "200px";
        }, speed);
    }

    // timer
    function timer() {
        if (time) {
            time -= 1; // soustraction 30-1 et time = 1
            timeElt.innerHTML = time;
        }
        else {
            showScore();
        }
    }

    const buttonEnter = document.querySelector(".button_enter");

    buttonEnter.addEventListener("click", () => {
        const pseudo = document.querySelector(".pseudo_input").value;

        if (pseudo !== "") {
            putInLocalStorage(pseudo, score);
        }

        restart();

    });

    function showScore() {
        const scoreTexte = document.querySelector(".section_end_score");
        scoreTexte.innerHTML = "You scored " + score + " !";

        const enterPseudo = document.querySelector(".section_end");
        enterPseudo.classList.remove("hidden");



    }

    function putInLocalStorage(pseudo, score) {
        const tableScore = JSON.parse(localStorage.getItem("tableScore") || "[]");

        tableScore.push({ pseudo, score });

        localStorage.setItem("tableScore", JSON.stringify(tableScore));

    }

    // Pour rejouer
    function restart() {
        document.querySelector(".section_end").classList.add("hidden");
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





