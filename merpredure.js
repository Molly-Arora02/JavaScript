let arr = [ 5 ,12 , 15 , 8 , 9  ];
let ans = arr.reduce((acc,Element , index , arr))=>{
  console.log(acc , Element , index , arr);
  acc = acc+ Element;
  return acc;

}
// 