const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bienvenido a la calculadora básica.");
console.log("Operaciones disponibles: suma (+), resta (-), multiplicación (*), división (/).");

rl.question("Ingresa el primer número: ", (num1) => {
    rl.question("Ingresa el operador (+, -, *, /): ", (operator) => {
        rl.question("Ingresa el segundo número: ", (num2) => {
            const a = parseFloat(num1);
            const b = parseFloat(num2);
            let result;

            switch (operator) {
                case '+':
                    result = a + b;
                    break;
                case '-':
                    result = a - b;
                    break;
                case '*':
                    result = a * b;
                    break;
                case '/':
                    if (b !== 0) {
                        result = a / b;
                    } else {
                        console.log("Error: División por cero no permitida.");
                        rl.close();
                        return;
                    }
                    break;
                default:
                    console.log("Operador no válido.");
                    rl.close();
                    return;
            }

            console.log(`El resultado de ${a} ${operator} ${b} es: ${result}`);
            rl.close();
        });
    });
});