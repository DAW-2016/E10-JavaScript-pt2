/**
 * Created by Lucas on 15/04/2016.
 */
function filter(f,v){

    for(i = 0; i < v.length; i++)
      v = v.replace(v.charAt(i),f(v.charAt(i)));

    return v;
}

var vogal = function(s){

    if(s == 'u' || s == 'o' || s == 'i' || s == 'e' || s == 'a' ){
        return '@';
    }

    return s;
}


var string = prompt("Digite uma frase:");
confirm("Frase digitada: " + string);

 string = filter(kek,string);

confirm("Frase modigicada: " + string);
