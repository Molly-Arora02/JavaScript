let x = 90 ;    
//console.log (y); // not define in output y function ke andar define hai ye global scope hai local scope nhi hai 
function sum() {
  console.log(y) // undefined 
  if(true) {
    var y =9
     ; // var functional socope hai , function ke andar if block 9 yani function ka local scope 
  }
  x++;
  console.log(y); // 9 y to function me hi rhe gyaa 
} //let or const local scope hai sab GEC ke andar bnta hai , child parent access krega 
sum ();
console.log(x); // 91 
console.log(y); // Not define 