const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let randomLetter = letters[Math.floor(Math.random() * letters.length)]
const ol = document.querySelector("ol")
document.body.addEventListener('keyup', function(event) {
    const keyPressed = event.key;
    if( keyPressed === randomLetter) {
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        const h2 = document.createElement('h2');
        h2.innerHTML = "SECRECT KEY PRESSED " + randomLetter
        ol.appendChild(h2);
    }
})