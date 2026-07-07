import { numeros } from "./dato.js"

export const suma = (numeros) => {
let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    
    return suma;
}
