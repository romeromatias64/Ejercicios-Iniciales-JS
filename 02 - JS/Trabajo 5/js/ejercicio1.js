// 1. Calcular el área de un rectángulo: Pedir al usuario la base y la altura de un rectángulo, y mostrar el área en la consola.

function calcularRectangulo() {
    const base = prompt("Ingresar la base del rectángulo")
    const altura = prompt("Ingresar la altura del rectángulo")
    const area = base * altura

    console.log(`El area del rectangulo ingresado es de ${area} centimetros cuadrados`)
}

calcularRectangulo()
