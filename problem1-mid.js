/* Problema 1 - Intermedio.

Realizar una función que verifique si un número es múltiplo de 3. No se puede usar el operador
de módulo (%) para comprobar la multiplicidad. */


/* CONVIERTO AL ARRAY QUE RECIBO EN UN ARRAY DE NUMEROS DE SUS COMPONENTES(Ej: 45 = [4, 5]). */
const convertNumsToArray = (number) => {
    let arrayOfNum = number
        .toString() // Primero lo vuelvo un String
        .split("") // luego lo separo
        .map((n) => parseInt(n)); // por ultimo convierto a cada elemento en un entero para realizar las operaciones.
    return arrayOfNum;
};

/* RECIBO AL NUMERO QUE QUIERO VERIFICAR SI CUMPLE LA CONDICION. */
const multipleOfThree = (number) => {
    let arrayNumber = convertNumsToArray(number); // Llamo a la funcion para convertir al numero en un Array.
    let sumOfNumbers = arrayNumber.reduce((a, b) => a + b); // Sumo sus elementos.

    while (sumOfNumbers >= 10) { // Si el numero es mayor o igual a 10, sumo repetidamente sus elementos hasta tener un solo digito.        
        arrayNumber = convertNumsToArray(sumOfNumbers);
        sumOfNumbers = arrayNumber.reduce((a, b) => a + b);
    }

    return sumOfNumbers === 3 || sumOfNumbers === 6 || sumOfNumbers === 9; // Devuelvo el valor booleano.
};
