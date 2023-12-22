
//---------------- Basic Function ----------------------------

// function printValue(){
//     let result = (23 * 10 + 23 * 10 + 23 * 10)/10;

//     result = result * 2 *10;
//     console.log(result);
//     result = result/20;
//     console.log(result);
// }

// printValue();


// function printValue(a,b,c){
//     let result = (a * 10 + b * 10 + c * 10)/10;

//     result = result * 2 *10;
//     console.log(result);
//     result = result/20;
//     console.log(result);
// }

// printValue(23,23,23);
// printValue(34,34,34);

//-------------------------------Using Default value in function-----------------

// function printValue(a,b,c=0){
//     let result = (a * 10 + b * 10 + c * 10)/10;

//     result = result * 2 *10;
//     console.log(result);
//     result = result/20;
//     console.log(result);
// }

// printValue(5,4);
// printValue(5,4,3);//----> don't affect with default value;


// let myfunc = function(a=0,b=0,c=0){
//     let result = (a * 10 + b * 10 + c * 10)/10;
//     console.log(result);
// }

// myfunc(5,4);

//------------------------Array in Function--------------------------

// function totalOfArray(arr=[]){
//     let total = 0;
//     for(let i = 0;i<arr.length;i++){
//         total+=arr[i];
//     }
//     return total;
// }
// const arr = [2,3,4,5,8];
// console.log(totalOfArray(arr));


// ------------------------- Scoping and let var difference------------------

// let a =20 ;
// {
//     let a = 30;
//     console.log(a);
// }
// console.log(a);




// let a =20 ;
// {
//     var b = 30;
//     console.log(b);
// }
// console.log(a);
// console.log(b);