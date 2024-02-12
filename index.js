
const init = function () {

    var score = 0;
    var time = 30;
    var speed = 600;
    var images = document.querySelectorAll(".box img");
    var scoreElt = document.querySelector(".score");
    var timeElt = document.querySelector(".time");
    var modal = document.querySelector(".modal");
    var modalText = document.querySelector(".modal_texte");
    var buttonStart = document.querySelector(".button_start");
    var setTimer, setShowHide;

    // play button
    buttonStart.addEventListener("click", function () {
        //clearInterval(checkPageInterval);
        modal.classList.add("hidden");
        setTimer = setInterval(timer, 1000);
        setShowHide = setInterval(showHide, speed * 2);

    });


    // click handler and score updater
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", poissonAttraper);
    }

    function poissonAttraper(e) {
        curr = e.target;
        curr.parentNode.classList.add("touched");
        score += 10;
        scoreElt.innerHTML = score;
        setTimeout(function () {
            curr.parentNode.classList.remove("touched");
        }, speed / 2);
    }

    // show and hide with interval
    function showHide() {
        var randd = randomize(9);
        images[randd].style.top = "60px";
        setTimeout(function () {
            images[randd].style.top = "200px";
        }, speed);
    }

    // manage timer
    function timer() {
        if (time) {
            time -= 1;
            timeElt.innerHTML = time;
        }
        else {
            restart();
        }
    }

    function restart() {
        modalText.innerHTML = "You scored " + score + " !";
        modal.classList.remove("hidden");
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


