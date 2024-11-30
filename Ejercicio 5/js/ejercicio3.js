// 3. Solicita al usuario dos números y una operación (+, -, *, /) usando prompt. Muestra el resultado de la operación en un alert.

function numValidation() {
    let num1 = prompt("Ingresa el primer número.")
    let num2 = prompt("Ingresa el segundo número.")
    const operacion = prompt("Ingresa una operación (+, -, *, /)")

    if(num1 === null) {
        alert("no se ha ingresado ningun número")
        return
    }
    if(num2 === null) {
        alert("no se ha ingresado ningun número")
        return
    }
    if(num1 === "") {
        alert("no se ha ingresado ningun número")
        return
    }
    if(num2 === "") {
        alert("no se ha ingresado ningun número")
        return
    }
    if(operacion === null) {
        alert("no se ha ingresado ninguna operación")
        return
    }
    if(operacion === "") {
        alert("no se ha ingresado ninguna operación")
        return
    }

    operation(operacion,num1,num2)
}

function operation(operacion,num1,num2) {
    num1 = +num1
    num2 = +num2

    if(operacion === "+") {
        const resultado = num1 + num2
        alert("El resultado de la suma es " + resultado)
    
    } else if(operacion === "-") {
        const resultado = num1 - num2
        alert("El resultado de la resta es " + resultado)
        
    } else if(operacion === "*") {
        const resultado = num1 * num2
        alert("El resultado de la multiplicación es " + resultado)
        
    } else if(operacion === "/") {
        const resultado = num1 / num2
        alert("El resultado de la división es " + resultado)
        
    } else {
        alert("La operación ingresada no es correcta")
    }
}

