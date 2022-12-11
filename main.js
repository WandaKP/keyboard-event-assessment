const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let randomLetter;
const ol = document.querySelector("ol")
document.ol.addEventListener('keyup', function(event) {
    const keyPressed = event.key.toLowerCase();
    let letterFound = false;
    for(let i = 0; i <= letters; i++) {
        if (keyPressed === letters[i]) {
            letterFound = true;
            const h2Secret = document.createElement(h2);
            h2Secret.textContent = "SECRECT KEY PRESSED" + [i]
            ol.appendChild(h2Secret);
            setup()
        }
    }
})
function setup() {
    randomLetter = letters[Math.floor(map.random() * letters.length)].toLowerCase
}