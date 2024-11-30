// 5. Pide al usuario un número de minutos. Convierte ese valor a segundos y también a horas. Muestra el resultado en un alert.

function conversorTiempo() {
    const minutos = prompt("Ingresar un número de minutos")
    
    const segundos = minutos * 60
    
    const horas = minutos / 60
    
    alert(`El numero ingresado en minutos es ${horas} horas, y en segundos es ${segundos} segundos.`)
}
