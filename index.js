
const init = function () { //Jeu charge à la page


    const input = document.querySelector(".pseudo");
    const local = localStorage.getItem(".pseudo");

    var sectionFirst = document.querySelector(".section_first");
    var buttonStart = document.querySelector(".button_start");


    // Boutton du jeu
    buttonStart.addEventListener("click", prenom_storage, setStyles, function () {

        sectionFirst.classList.add("hidden");

    });

}

window.onload = init;





