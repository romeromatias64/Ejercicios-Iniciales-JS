// 4. Pide al usuario dos valores y muestra cómo se intercambian entre sí. Por ejemplo, si ingresa a=5 y b=10, el resultado será a=10 y b=5. Los resultados se deben mostrar con un document.write donde se muestre si el user ingreso a=5 y b=10:
// a = 10
// b = 5

function replacement() {
    const a = prompt("Ingrese el número A:")
    const b = prompt("Ingrese el número B:")
    
    document.write(`Los valores se han intercambiado entre si: <br> A = ${a.replace(a, b)} <br> B = ${b.replace(b, a)} <hr> Los valores originales eran: <br> A = ${a} <br> B = ${b}`)
}
