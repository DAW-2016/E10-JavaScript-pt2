function filter(f, v){
    for(i = 0; i < v.length; i++)
      v = v.replace(v.charAt(i),f(v.charAt(i)));

    return v;
}

var troca = function(s){
    if(s == 'a' || s == 'o'){
        return 'x';
    }

    return s;
}

var string = prompt("Digite uma frase:");
string = filter(troca, string);
console.log("Result: " + string);
