/** HACER MATRIZ 5X8 PARA EL JUEVES, INGRESANDO CANTIDAD DE FILAS Y COLUMNAS PARA INGRESAR NUMEROS ALEATORIOS
 *  (DEFINIR VARIABLES DE COLUMNAS Y FILAS)  */

/** Aqui declare las varibles que tengo */

let filas = JSON.parse(prompt("Ingrese el número de filas"));
let columnas = JSON.parse(prompt("Ingrese el número de columnas"));
let max = 200;
let min = 0;

 /** Cree una array vacía para matriz2 y tambien números aleatorios */

let matriz2 = [];

for (let i = 0; i < filas; i++){
    matriz2[i] = [];
    for (let j = 0; j < columnas; j++){
        let numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    matriz2[i][j] = numeroAleatorio;
    
    }
}

/** Imprimimos las arrays en una matriz */

for (let i = 0; i < filas; i++){
    console.log (matriz2[i].join(" "));
    
}
