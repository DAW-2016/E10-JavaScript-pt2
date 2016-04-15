/**
 * Created by Lucas on 15/04/2016.
 */

var mod = function(num,mod){

    return num%mod == 0 ? true : false;
}

var dividendo = prompt("Digite um valor inteiro: ");
var divisor = prompt("Digite outro valor inteiro: ");


confirm("O valor " + dividendo + " é divisivel por " + divisor + " ? " + mod(dividendo,divisor));
