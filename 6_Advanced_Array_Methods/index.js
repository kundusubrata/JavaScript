// ---------------- Basic Function --------------
const myFunc = function (a, b) {
    console.log(a + b);
}
myFunc(3, 4);

// ---------------- Arrow Function and it's example --------------

const myFunc2 = (a, b) => {
    console.log(a * b);
}
myFunc2(2, 5);


//  ------------------ Find Method (Only return one value) --------------

const arr = [2, 3, 4, 5, 6, 7, 8, 9];
const myFunc3 = (value, index) => {
    if (value === 6) {
        console.log("6 Exist");
    }
};
arr.find(myFunc3);


const arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
arr2.find((value, index) => {
    if (value === 6) {
        console.log("6 Exist");
    }
});


const arr3 = [2, 3, 4, 5, 6, 7, 8, 9];
const result = arr3.find((value, index) => {
    if (value > 6) {
        return value;
    }
});
console.log(result);

//--------------------------- filter method (return as an array) ----------------------

const arr4 = [2, 3, 4, 5, 6, 7, 8, 9];
const result1 = arr4.filter((value, index) => {
    if (value > 6) {
        return value;
    }
});
console.log(result1);

// -------------------------- every and some method of array -----------------

const result2 = arr4.every((value,index)=>{
    if(value>1){    // it will return true if it is greter than 3 or 2 then it will false.
        return value;
    }
})

const result3 = arr4.some((value,index)=>{
    if(value>6){    // it will return true if it is less than 2 then it will false.
        return value;
    }
})

// ------------------------ For-of loop -----------------------

for(let value of arr4){
    value += 3;
    console.log(value);
}

// ------------------------- For-each looop---------------------

let totalSum = 0;
arr4.forEach((value,index)=>{
    totalSum += value;
})
console.log(value);

// ------------------------- Map method ---------------------------

let totalSum2 = 0;
const result4 = arr4.map((value,index)=>{
    return value+20;
}); 

// ------------------------ Reduce method -----------------------------

const result5 = arr4.reduce((previousValue,value,index)=>{
    return previousValue+value;
}); 
console.log(result5);