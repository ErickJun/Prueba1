export function mayor(numeros){
    return Math.max(...numeros);
}
export function menor(numeros){
    return Math.min(...numeros);
}
export function pares(numeros){
    return numeros.filter(num=> num%2 ===0);
}
