const url = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

const fetchData = async () => {
    const reponse = await fetch(url);
    const data = await response.json();
    h1.innerText = data.fact;
};

fetchData();


// console.log("a");
// setTimeout(() => {
//     console.log("timeout");
// }, 0);
// Promise.resolve().then(() => console.log("Promise"));
// console.log("z");


console.log("a");
const fetchData1 = async () =>{
    console.log("f1");
    const response = await fetch(url);       // You will see after await z1 will be print then remaning func will work.
    console.log("f2");
    const data = await response.json();
    console.log("f3");
    h1.innerText = data.fact;
    console.log("f4");
};
fetchData1();
console.log("z1");




const fetchData2 = async () =>{
    const response = await fetch(url);  
    const data = await response.json();
    h1.innerText = data.fact;
};
fetchData2().catch((e) => {
    console.log(e);
});



const fetchData3 = async () =>{
    try {
        // throw "meri marzi walla error"; 
        // throw Error ("meri marzi walla error");
        throw new Error ("meri marzi walla error");
        const response = await fetch(url);  
        const data = await response.json();
        h1.innerText = data.fact;  
    } catch (error) {
        console.log(error.message);
        console.log(error.name);
    } finally {
        console.log("Finally done");
    }
};
fetchData3();