const alertButton = document.getElementById('alertButton');

alertButton.addEventListener('click', function() {
    alert('Ahoj, tohle je alert!');
});

const textChangeButton = document.getElementById('textChangeButton');

textChangeButton.addEventListener('click', function() {
    textChangeButton.innerText = 'Text změněn.';
});

const text = document.getElementById('text');
const changeTextButton = document.getElementById('changeTextButton');

changeTextButton.addEventListener('click', function() {
    text.innerText = 'Nový text.';
});

const writeTextButton = document.getElementById('writeTextButton');
const outputText = document.getElementById('outputText');

writeTextButton.addEventListener('click', function() {
    outputText.innerText = 'Tento text byl přidán po kliknutí.';
});

const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');

greetButton.addEventListener('click', function() {
    const name = nameInput.value;
    alert(`Ahoj, ${name}!`);
});

const hoverText = document.getElementById('hoverText');

hoverText.addEventListener('mouseover', function() {
    hoverText.innerText = 'Text se změnil.';
});

const showTimeButton = document.getElementById('showTimeButton');
const timeOutput = document.getElementById('timeOutput');

showTimeButton.addEventListener('click', function() {
    const now = new Date();
    timeOutput.innerText = `Čas: ${now.toLocaleTimeString()}`;
});

const showDateButton = document.getElementById('showDateButton');
const dateOutput = document.getElementById('dateOutput');

showDateButton.addEventListener('click', function() {
    const today = new Date();
    dateOutput.innerText = `Datum: ${today.toLocaleDateString()}`;
});