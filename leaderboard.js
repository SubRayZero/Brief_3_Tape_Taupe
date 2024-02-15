
const init = function () { //Jeu charge à la page

    const pseudo = document.querySelector(".score_board");

    function instantiateScore(pseudo, score) {

        const scoreItem = document.createElement("tr");
        scoreItem.classList.add("scoreItem");

        scoreItem.insertAdjacentHTML("beforeend", `<td>${pseudo}</td>`);
        scoreItem.insertAdjacentHTML("beforeend", `<td>${score}</td>`);

        return scoreItem;

    }

    JSON.parse(localStorage.getItem("tableScore") || "[]").forEach(element => {

        pseudo.appendChild(instantiateScore(element.pseudo, element.score));

    });

}

window.onload = init;





