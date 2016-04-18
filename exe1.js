var valor1 = prompt("Digite um valor");
var valor2 = prompt("Digite outro valor");



function min(valor1, valor2) {
    if (valor1 > valor2) {
        console.log("Menor: " + valor2)
    }
    else {
        console.log("Menor: " + valor1);
    }
}

function max(valor1, valor2) {
    if(valor1 > valor2) {
        console.log("Maior: " + valor1);
    }
    else {
        console.log("Maior: " + valor2);
    }
}

min(valor1, valor2);
max(valor1, valor2);
