import { numeros } from "./dato.js";
 let total=0;


export const suma = (numeros) => {
   for(let i=0;i<numeros.length;i++){
      total+=numeros[i];
   }
   return total;
}