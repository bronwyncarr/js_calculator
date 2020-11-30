const equation = require('./equations')
const readlineSync = require('readline-sync');

const menu = () => {
    console.log('Welcome to the calculator app');
    console.log('What would you like to do?')
    console.log(`
        1. Add two numbers
        2. Subtract two numbers
        3. Multiply two numbers
        4. Divide two numbers`)
}

const userInput = () => {
    const action = parseInt(readlineSync.question('>'));
    if (action < 1 || action > 4) {
        console.log("Sorry please choose a number between 1 and 4");
    }
    else {
        console.log('What is the first number?')
        const num1 = parseInt(readlineSync.question('>'));
        console.log('What is the second number?')
        const num2 = parseInt(readlineSync.question('>'));
        return {
            action: action,
            num1: num1,
            num2: num2
        }
    }
}

const userSelection = (action, num1, num2) => {
    switch(action) {
        case 1:
            return equation.add(num1, num2)
        case 2:
            return equation.subtract(num1, num2)
        case 3:
            return equation.multiply(num1, num2)
        case 4:
            return equation.divide(num1, num2)
    }
}

menu()
const selection = userInput()
if (selection) {
    result = userSelection(selection.action, selection.num1, selection.num2)
    console.log(`The result is ${result}.`)
}
