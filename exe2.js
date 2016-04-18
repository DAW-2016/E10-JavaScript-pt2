//exe1
var a;

function mod2(a) {
    return a % 2 == 0;
}

a = prompt("Digite um valor");
console.log(mod2(a));

//exe2
var num = prompt("Digite o valor do numerador");
var den = prompt("Digite o valor do denominador");

function mod(num, den) {
    return num % den == 0;
}

console.log(mod(num, den));
