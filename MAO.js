
let arr=[5,12,5,8,9];
        // reduce(Callback,accumulator-initial-value)
// let ans=arr.reduce(callback,0)
let ans=arr.reduce((acc,Element,index,arr)=>{
    console.log(acc,Element,index,arr);
    // acc=acc+Element;
    if(acc<Element)
        acc=Element;
    return acc;
    
},arr[0]);

console.log(ans);