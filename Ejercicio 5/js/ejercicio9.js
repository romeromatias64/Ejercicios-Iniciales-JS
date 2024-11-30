// 9. Películas o series para ver. Define un array miListaDePendientes con títulos de cuatro películas o series que quieres ver.
//  • Usa el método push para agregar una quinta película.
//  • Modifica el nombre de la 2da película del array por una nueva.
//  • Muestra el array actualizado por consola.

function pendientes() {
    const miListaDePendientes = ["Fight Club","Breaking Bad","Hunter x Hunter", "Good Fellas"]
    
    console.log(miListaDePendientes)
    
    miListaDePendientes.push("Unglorious Bastards")
    
    miListaDePendientes[1] = "Kill Bill"
    
    console.log(miListaDePendientes)
}