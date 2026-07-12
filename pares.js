import { numeros } from "./dato.js";
//crea un arreglo vacio
export const numerosPar = [];

export const pares = (numeros) => {
//cuenta los numeros del arreglo
    for(let i=0;i<numeros.length;i++){
    if(numeros[i]%2===0){
        numerosPar.push(numeros[i]); //Agrega elemenos al final del arreglo
    }
}return numerosPar;
}