/**Para esto se necesita crear una función que:
 * Reciba como parámetro el carácter que formará la figura.
 * Realice la lógica para crear esta figura.
 * Retorne la matriz que contendrá la figura y poder visualizarla en un ciclo.
 * Por favor pegar el código del algoritmo en la sección correspondiente.
 * Crear  una  matriz de  10*10  con las  siguiente  figura
 */



function FiguraEnCruz() {
    let matrizfigura = [];

    for(let filas = 0; filas < 10; filas++){
        matrizfigura[filas] = [];
    }

    for( let columnas = 0; columnas < 10; columnas++){
        matrizfigura (filas[4] == columnas[4] || filas[5] == columnas[5])
            matriz[fila][columnas] == "@"
        } else {
        matrizfigura (columnas[4] == filas[4] || filas[5] == columnas[5]){
            matriz[fila][columnas] == "-";
        }
    }

for( let i = 0; i < matrizfigura.length; i++){
    console.log(matrizfigura[i]);
}
}


/** AQUÍ LLAMAMOS LA FUNCIÓN */

FiguraEnCruz();