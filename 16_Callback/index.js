
function sum(a,b){
    const result = a+b;
    displaySum(result);
}

function displaySum(result){
    const h1 = document.querySelector("h1");
    h1.innerText = result;
}

sum(20,30);




function sum(a,b,callback){
    const result = a+b;
    callback(result);
}

function displaySum(result){
    const h1 = document.querySelector("h1");
    h1.innerText = result;
}

sum(20,30,displaySum);
sum(20,30,alert);



// const arr = [1,2,3,4,5,6];
// function calculatorMultipleTen(arr = []){
//     const ans = [];
//     for(let i = 0; i <arr.length;i++){
//         ans.push(arr[i]*10);
//     }
//     console.log(ans);
// }
// function calculatorDivideTen(arr = []){
//     const ans = [];
//     for(let i = 0; i <arr.length;i++){
//         ans.push(arr[i]/10);
//     }
//     console.log(ans);
// }

// calculatorMultipleTen(arr);
// calculatorDivideTen(arr);


const arr = [1,2,3,4,5,6];
function calculator(arr = [],callback){
    const ans = [];
    for(let i = 0; i <arr.length;i++){
        const element = callback(arr[i]);
        arr.push(element);
    }
    console.log(ans);
}
function multiply(a){
    return a*10;
}


calculator(arr,multiply);
calculator(arr,(b)=>{return b/10});
calculator(arr,(c) => c+10);
calculator(arr,(d) => d-10);






// const gamesList = [];
// const game = {};

// const fetchData = () =>{
//     setTimeout(() => {
//         gamesList.push(
//             {
//             name:"game 1",
//             id:"scsdfadsj",
//         },
//         {
//             name:"game 2",
//             id:"hklhjlkj",
//         },
//         {
//             name:"game 3",
//             id:"rweuiiupr",
//         });
//         console.log(gamesList);
//     }, 4000);
// };

// fetchData();

// const displayGame = ()=>{
//     setTimeout(() => {
//         for (let i = 0; i < gamesList.length; i++) {
//             const p = document.createElement("p");
//             p.innerText = gamesList[i].name;
//             document.body.append(p);
//         }
//         console.log(gamesList);
//     }, 1000);
// }



// ------------------------- Callback Hell ---------------------------


const gamesList = [];
const game = {};

const fetchData = (callback) =>{
    setTimeout((callback) => {
        gamesList.push(
            {
            name:"game 1",
            id:"scsdfadsj",
        },
        {
            name:"game 2",
            id:"hklhjlkj",
        },
        {
            name:"game 3",
            id:"rweuiiupr",
        });
        callback();
        console.log("after fetching");
    }, 4000,callback);
};

const displayGame = ()=>{
    setTimeout(() => {
        for (let i = 0; i < gamesList.length; i++) {
            const p = document.createElement("p");
            p.innerText = gamesList[i].name;
            document.body.append(p);
        }
        console.log("after displaying");
    }, 1000);
}

fetchData(displayGame);