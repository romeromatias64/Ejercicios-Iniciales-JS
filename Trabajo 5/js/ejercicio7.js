// 7. Define un objeto auto donde se especifiquen al menos 6 propiedades que lo conformen, si se les ocurren más propiedades del número solicitado colocarlas. Mostrar el resultado en un console log. Hacer un document.write para mostrar un mensaje dinámico en base a 2 propiedades que hayan elegido, ejemplo:

// document.write(`El auto objeto.propiedad1 es uno de los autos más potentes en el mercado alcanzando una velocidad de object.propiedad2 por hora!`)

function infoAuto() {
    const auto = {
        nombre: "Subaru Impreza 22B STi",
        chasis: "Type R",
        cilindrada: "2212 cm³ (2,2 L; 135 plg³)",
        diametroXcarrera: "96,9 x 75 mm (3,81 x 2,95 plg)",
        aspiracion: "Turbo",
        potenciaMaxima: "280 CV (276 HP; 206 kW) @ 6000 rpm",
        parMaximo: "363 N·m (268 lb·pie) @ 3200 rpm"
    }
    
    document.write(`El ${auto.nombre} era una version especial del Impreza STI, alcanzando este la potencia máxima de ${auto.potenciaMaxima}.`)
}
