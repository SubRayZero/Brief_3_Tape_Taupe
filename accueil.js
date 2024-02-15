
const init = function () { //Jeu charge à la page


    const input = document.querySelector(".pseudo");
    const local = localStorage.getItem(".pseudo");

    var sectionFirst = document.querySelector(".section_first");
    var buttonStart = document.querySelector(".button_start");


    // Boutton du jeu
    buttonStart.addEventListener("click", prenom_storage, function () {

        sectionFirst.classList.add("hidden");

    });


    function prenom_storage() {

        localStorage.setItem(".pseudo", input.value);

        

    }
}

window.onload = init;





