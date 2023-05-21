let numero = parseInt(prompt('Ingresa un numero'));
if (numero%2==0) {
    document.write('el numero es divisible en 2');
}else{
    if (numero%3==0) {
        document.write('el numero es divisible por 3');
    } else {
        if (numero%5==0) {
            document.write('el numero es divisible por 5');
        } else {
            if (numero%7==0) {
                document.write('el numero es divisible por 7');
            } else {
                document.write('no es divisible por ninguno de estos numeros (2,3,5,7)');
            }
        }
        
    }
}