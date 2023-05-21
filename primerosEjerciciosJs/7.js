let numero1 = parseInt(prompt('Ingresa el primer numero'));
let numero2 = parseInt(prompt('Ingresa el segundo numero'));
let numero3 = parseInt(prompt('Ingresa el tercery ultimo numero'));
if (numero1>numero2 && numero1>numero3){
    document.write(numero1 +' es el mayor de los tres numeros');
}else{
    if (numero2 >numero1 && numero2>numero3) {
        document.write(numero2+' es el mayor de los tres numeros');
    }else{
        if (numero3>numero1 && numero3 > numero2) {
            document.write(numero3+' es el mayor de los tres numeros');
        }else{
            document.write('los tres numeros son iguales');
        }
    }
}