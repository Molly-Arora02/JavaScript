let arr = [ 23 , 45 , 3 , 2, 1 , "arora " , true ];

// for each higher order function ; 
arr.forEach ((element , index , arr)=>{
  console.log(element,index,arr);
}

)
// 23 0 [ 23, 45, 3, 2, 1, 'arora ', true ]
// 45 1 [ 23, 45, 3, 2, 1, 'arora ', true ]
// 3 2 [ 23, 45, 3, 2, 1, 'arora ', true ]
// 2 3 [ 23, 45, 3, 2, 1, 'arora ', true ]
// 1 4 [ 23, 45, 3, 2, 1, 'arora ', true ]
// arora  5 [ 23, 45, 3, 2, 1, 'arora ', true ]
// true 6 [ 23, 45, 3, 2, 1, 'arora ', true ]
// Mollys-MacBook-Air:JavaScript mollyarora$ 