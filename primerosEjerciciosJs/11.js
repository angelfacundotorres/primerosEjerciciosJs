let numero = parseInt(prompt('Ingresa un numero'));
if (numero%2===0 || numero%3===0 || numero%5===0 || numero%7===0) {
    if (numero%2===0) {
        document.write('el numero ingresado es divisible por 2');
    }
    if (numero%3===0) {
        document.write('<br>el numero ingresado es divisible por 3');
    }
    if (numero%5===0) {
        document.write('<br>el numero ingresado es divisible por 5');
    }
    if (numero%7===0) {
        document.write('<br>el numero ingresado es divisible por 7');
    }
}else{
    document.write('el numero que ingresaste no es divisible por ninguno de los posibles divisores')
}