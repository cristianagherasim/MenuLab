const letters = document.getElementById("rowsOfLetters");
const numbers = document.getElementById("numbersRow");


function changeView(displayType) {
    console.log(displayType);
    if (displayType == 0) {
        letters.style.display = "block";
        numbers.style.display = "none";
    }
    else {
        letters.style.display = "none";
        numbers.style.display = "block";
    }
}
