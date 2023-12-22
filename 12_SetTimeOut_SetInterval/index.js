// const btn = document.querySelector("button");

// const printname = (name,income,gender)=>{
//     console.log(`Wellcome, ${name}. Your income is $${income}. Gender is ${gender}`);
// };

// setTimeout(printname,5000,"Krishna",2000,"Male");


// const printname2 = ((name,income,gender)=>{
//     console.log(`Wellcome, ${name}. Your income is $${income}. Gender is ${gender}`);
// },printname,5000,"Krishna",2000,"Male");


// btn.addEventListener("click",()=>{
//     clearTimeout();
// })




// const btn = document.querySelector("button");

// const printname = (name,income,gender)=>{
//     console.log(`Wellcome, ${name}. Your income is $${income}. Gender is ${gender}`);
// };

// const customTimeOut = setTimeout(printname,5000,"Krishna",2000,"Male");

// btn.addEventListener("click",()=>{
//     clearTimeout(customTimeOut);
// })


const btn = document.querySelector("button");

const printname = (name,income,gender)=>{
    console.log(`Wellcome, ${name}. Your income is $${income}. Gender is ${gender}`);
};

const customTimeOut = setInterval(printname,5000,"Krishna",2000,"Male");

btn.addEventListener("click",()=>{
    clearInterval(customTimeOut);
})