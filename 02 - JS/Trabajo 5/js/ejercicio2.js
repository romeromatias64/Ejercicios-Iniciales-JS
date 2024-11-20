// 2. Crea variables para tu color favorito, comida favorita y lugar favorito (todas string). Usa template literals para formar una frase como: `Mi color favorito es [color], me encanta comer [comida] y quiero visitar [lugar].`

const info = {
    color: "azul",
    comida: "fideos",
    lugar: "italia"
}

document.write(`Mi color favorito es el ${info.color}, me encanta comer ${info.comida} y quiero visitar ${info.lugar}.`)