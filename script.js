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

const numberInput = document.getElementById('numberInput');
const addThreeButton = document.getElementById('addThreeButton');
const addThreeOutput = document.getElementById('addThreeOutput');

addThreeButton.addEventListener('click', function() {
    const number = parseInt(numberInput.value, 10) || 0;
    const result = number + 3;
    addThreeOutput.innerText = `Výsledek: ${result}`;
});

const firstNumber = document.getElementById('firstNumber');
const secondNumber = document.getElementById('secondNumber');
const sumButton = document.getElementById('sumButton');
const sumOutput = document.getElementById('sumOutput');

sumButton.addEventListener('click', function() {
    const num1 = parseInt(firstNumber.value, 10) || 0;
    const num2 = parseInt(secondNumber.value, 10) || 0;
    const result = num1 + num2;
    sumOutput.innerText = `Součet: ${result}`;
});

const hoverImage = document.getElementById('hoverImage');

hoverImage.addEventListener('mouseover', function() {
    hoverImage.style.transform = 'scale(1.5)';
    hoverImage.style.transition = 'transform 0.3s ease';
});

hoverImage.addEventListener('mouseout', function() {
    hoverImage.style.transform = 'scale(1)';
});

const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerText = taskText;

        taskItem.addEventListener('click', function() {
            taskList.removeChild(taskItem);
        });

        taskList.appendChild(taskItem);
        taskInput.value = ''; 
    }
});