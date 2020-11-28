const math = require('./math')
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

const userSelection = (action, num1, num2) => {
    switch(action) {
        case 1:
            result = math.add(num1, num2)
            break;
        case 2:
            result = math.subtract(num1, num2)
            break;
        case 3:
            result = math.multiply(num1, num2)
            break;
        case 4:
            result = math.divide(num1, num2)
            break;
        default:
            console.log('Sorry wrong option chosen.')
    }
}

menu()
const selection = userInput()
userSelection(selection.action, selection.num1, selection.num2)
console.log(`The result is ${result}.`)