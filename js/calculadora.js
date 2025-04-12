function calculate(operation) {
    // Obtener valores de los campos de entrada
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultElement = document.getElementById('result');
    
    // condicional para validad los campos
    if (isNaN(num1) || isNaN(num2)) {
        resultElement.textContent = "Por favor ingrese ambos números";
        resultElement.classList.add('error');
        return;
    }
    
    // un Switch: Realizar la operación seleccionada
    let result;
    
    switch(operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            // Verificar división por cero
            if (num2 === 0) {
                resultElement.textContent = "Error: No se puede dividir por cero";
                resultElement.classList.add('error');
                return;
            }
            result = num1 / num2;
            break;
    }
    
    // Muestra los  resultado redondeado a 4 decimales si es necesario
    resultElement.textContent = result % 1 !== 0 ? result.toFixed(4) : result;
    resultElement.classList.remove('error');
}