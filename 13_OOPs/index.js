// const a = {
//     name: "Krishna",
//     age: 30,
// };

// console.log(a);


// const a = "Hellow World";
// const b = {
//     name: "Krishna",
//     printSurname:()=>{
//         console.log("Das");
//     },
// };

// console.log(a);

// console.log(b);
// b.added = "Value is added";
// console.log(b);

// --------------- Pass by Value -------------

let a = 21;
let b = a;

console.log(a);
console.log(b);

a = 20;

console.log(a);
console.log(b);


// ---------------- Pass by reference in case of obj----------

const c = {
    name:"krishna",
    surname:"Das",
}
const d = c;

console.log(c);
console.log(d);

c.name = "Gopal";
console.log(c);
console.log(d);

d.surname = "Murlidhor"
console.log(c);
console.log(d);



const RomanReign = {
    weight: 265,
    height: 185,
    quote: ()=>{
        console.log("Head of the table");
    },
};

// const SethRollins = {
//     weight: 265,
//     height: 185,
//     quote: ()=>{
//         console.log("Burn it Down");
//     },
// };


// function average(a,b) {
//     console.log(a+b);
// }

//---------Factory Function------------

function wweSuperStar(a,b,quote){
    // const temp = {
    //     weight: a,
    //     height: b,
    //     quote: ()=>{
    //         console.log(quote);
    //     },
    // }
    // return temp;


    return {
        weight: a,
        height: b,
        quote: ()=>{
            console.log(quote);
        },
    };
};
const roman = wweSuperStar(234,123);
console.log(roman.constructor);

const RomanReign2 = wweSuperStar(265,185,"Head of the table");
const SethRollins2 = wweSuperStar(265,185,"Burn It down");

console.log(RomanReign2);
console.log(SethRollins2);

// -------------------Constructor Function-------------------

function Star(weight,height){
    this.weight = weight;
    this.height = height;
}

const RomanReign3 = new Star(245,234);

console.log(RomanReign3);
RomanReign3.quote = "Head of the Table";
console.log(RomanReign3);
console.log(RomanReign3.constructor);


const f = new Object({a:23,b:23,c:34});

console.log(f);



const RomanReign4 = new Object({
    weight: 265,
    height: 185,
    quote: ()=>{
        console.log("Head of the table");
    },
});


const arr = new Array(12,32);

console.log(arr);   
console.log(arr.constructor);
arr.sample = "Sample Boi";

const g = function(){
    console.log("sdfdffsd");
};

console.log(g);
console.log(g.constructor);

const h = new Function();
console.log(h);

// --------------- pass by reference and spread opertor -----------------

function Hero(size,speed){
    this.size = size;
    this.speed = speed;
};

const ironMan = new Hero(10,20);
const ironMan2 = ironMan;

console.log(ironMan);
console.log(ironMan2);

ironman2.size = 23;
console.log(ironMan);
console.log(ironMan2);

const arr3 = [1,2,3,4,5,6];
// const arr4 = arr3;
// const arr4 = [...arr3]
const arr4 = [...arr3,7,8,9]

console.log(arr3);
console.log(arr4);

function Hero2(size,speed){
    this.size = size;
    this.speed = speed;
};

const ironMan3 = new Hero(10,20);
const ironMan4 = {...ironMan3,added:true}

console.log(ironMan3);
console.log(ironMan4);

ironman2.size = 23;
console.log(ironMan3);
console.log(ironMan4);