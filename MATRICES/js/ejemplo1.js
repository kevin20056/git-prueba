/** Vamos a iterar nuestra primera matriz  3x3 */ 

let matriz1 = [3][3];

//matriz1[0][0] = 101;
//matriz1[0][1] = 83;
//matriz1[0][2] = 56;
//matriz1[1][0] = 27;
//matriz1[1][1] = 39;
//matriz1[1][2] = 56;
//matriz1[2][0] = 202;
//matriz1[2][1] = true;

matriz1= [
    [ 101, 87,  56],
    [ 27,  39,  56],
    [ 202,true, 99]
]

console.log(matriz1);

/** Vamos a recorrer la matriz */

for(let fila = 0; fila < matriz1.length; fila++){
    

    for(let columna = 0; columna < matriz1[fila].length; columna++){
        console.log(matriz1[fila][columna]);
        
    }
}
