function max (a,b){return a > b ? a : b;}
function min (a,b){return a < b ? a : b;}

function mod2 (a){return a%2 === 0 ? true : false;}
function mod (a,b){return max(a,b) % min(a,b) === 0 ? true : false ;}
