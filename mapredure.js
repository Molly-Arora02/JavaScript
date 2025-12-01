let arr =[ 1,2,5,8,9];

let ans = arr.filter( (Elements , index , arr) =>{
    if( Elements%2 == 0 ){
           return true ;
    }
    else {
      return false ; 
    }
})
console.log(ans);