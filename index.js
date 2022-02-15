const btn = document.getElementById("btn");
const passwordLength = "15";
const samples = document.querySelectorAll(".samples");

// array of all the possible characters for password
const chars = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    ".",
    "-",
    "=",
    "+",
    "/",
    "*",
    "&",
    "!",
    "?",
    ">",
    "<",
    "$",
    "%",
    "#",
];

// get a random number
function getNumber() {
    return Math.floor(Math.random() * chars.length);
}

// get random passwords
btn.addEventListener("click", function () {
    for (let i = 0; i < samples.length; i++) {
        let psswrd = "";
        for (let k = 0; k < passwordLength; k++) {
            psswrd += chars[getNumber()];
        }
        samples[i].value = psswrd;
        // change cursor style
        samples[i].style.cursor = "copy";
    }
});

// copy password to clipboard
function clipboard(password) {
    // if input is not empty copy password
    if (password.value != "" && password.value != "Copied!") {
        password.select();
        navigator.clipboard.writeText(password.value);
        // notify the user that they copied password succesfully
        password.value = "Copied!";
        // reset cursor style
        password.style.cursor = "default";
    }
}
