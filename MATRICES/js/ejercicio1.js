
function FiguraEnCruz(parametro1, parametro2) {
  let matrizFigura = [];

  for (let filas = 0; filas < 10; filas++) {
    matrizFigura[filas] = [];
    for (let columnas = 0; columnas < 10; columnas++) {
      if (filas === 4 || columnas === 4 || filas ===5 || columnas === 5) {
        matrizFigura[filas][columnas] = "@";
      } else {
        matrizFigura[filas][columnas] = "-";
      }
    
    }

  }
    return matrizFigura
  }
  


const figura = FiguraEnCruz("@", "-");

    console.log(figura);