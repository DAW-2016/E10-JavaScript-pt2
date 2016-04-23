function filter (f,v) {
  
  result = "";

  for (var i = 0; i < v.length;i++)
    result += f(v[i]);

  return result;
}
var t = function (a){
  if(a == "c" || a == "F")
    return "t";
  else
    return a;
}
console.log(filter(t,"cachorro loco Fugido"));
