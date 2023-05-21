let numero1 = parseInt(prompt('ingresa un numero'));
let numero2 = parseInt(prompt('ingresa otro numero'));
if(numero1>numero2){
    document.write(numero1+ ' es mayor');
}else{
        if (numero1==numero2) {
            document.write('los numeros son iguales');
        }
        else{
            document.write(numero2+' es mayor');
    }
}
