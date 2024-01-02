let display = document.getElementById('display');

function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = '';
}

function calculate() {
    try {
        display.value = evaluateExpression(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

function evaluateExpression(expression) {
    const operators = ['+', '-', '*', '/'];
    const isValid = /^[0-9+\-*/.() ]+$/.test(expression);

    if (!isValid) {
        throw new Error('Invalid expression');
    }

    operators.forEach(operator => {
        const regex = new RegExp('\\' + operator + '+', 'g');
        expression = expression.replace(regex, operator);
    });

    return Function('return ' + expression)();
}
