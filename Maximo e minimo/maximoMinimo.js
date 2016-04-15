/**
 * Created by Lucas on 15/04/2016.
 */

var maximo = function(number1,number2){

    if(number1 > number2)
        return number1;
}

var minimo = function(number1,number2){

    if(number1 > number2)
        return number2;
}

var a = prompt("Digite um numero:");
var b = prompt("Digite um numero:");

confirm("O maior valor digitado foi: " + maximo(a,b));
confirm("O menor valor digitado foi: " + minimo(a,b));
