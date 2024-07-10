const clicker1 = document.querySelector(".clicker1");
const clicker2 = document.querySelector(".clicker2");
const clicker = document.querySelector(".clicker");
const form = document.querySelector(".calculator");
const resultValue = document.querySelector(".result"); // Corrected to select the element with class "result"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

clicker1.addEventListener('click', () => {
    let colors = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
    clicker1.style.backgroundColor = `${colors}`;
});

clicker2.addEventListener('click', () => {
    alert(`Congratulations!\nYou are live at ${new Date()}`); // Changed "Congratulation" to "Congratulations"
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let num1 = Number(form[0].value);
    let num2 = Number(form[1].value);
    let sum = num1 + num2;
    
    // Clear previous result
    resultValue.innerHTML = '';

    // Create a text node for the result
    let resultTextNode = document.createTextNode(`Result: ${sum}`);

    // Append the result text node to the result element
    resultValue.appendChild(resultTextNode);
});