// 6. Calcular el IVA de un producto. Solicitar al usuario el precio de un producto en dolares y su precio final a pesos (1dolar = $1130), además tenemos que sumarle el IVA (21%). Mostrar el precio total en un alert.

function calcularPrecioTotal() {
    const precio = prompt("Ingresar el precio del producto en dolares.")

    const pesos = precio * 1130
    const iva = (pesos*21) / 100
    const precioTotal = pesos + iva

    alert(`El precio total del producto es AR$${precioTotal}.`)
}