

//Operadores de Bitwise

//Decimal: 0,1,2,3,4,5,6,7,8,9
//Binario: 0,1

//bit: es un digito en binario puede ser 0 o 1
//byte: combinacion de 8 bits, puede ser caracteres, simbolos o numeros
//byte: 00000000 -> 0
//byte: 00000001 -> 1
//byte: 00000010 -> 2
//byte: 00000011 -> 3
//byte: 00000100 -> 4
//byte: 00000101 -> 5
//byte: 00000110 -> 6

//Existe el Operador OR = | y el AND = &
//OR 
console.log(1 | 3);  // 00000011 -> 3
console.log(1 | 4);  // 00000101 -> 5
console.log(2 | 3);  // 00000011 -> 3
console.log(4 | 6);  // 00000110 -> 6
console.log(3 | 6);  // 00000111 -> 7


//AND
console.log(1 & 3);  // 00000001 -> 1
console.log(1 & 4);  // 00000000 -> 0
console.log(2 & 3);  // 00000010 -> 2
console.log(4 & 6);  // 00000100 -> 4
console.log(3 & 6);  // 00000010 -> 2

