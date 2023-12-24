const url = "https://catfact.ninja/fact";

console.log("a");
const fetchData = () => {
    fetch(url)
    .then((Response) => {
        console.log("then1");
        return Response.json();
    })
    .then((data) => {
        console.log("then2");
        console.log(data);
    });
};

fetchData();
console.log("z");



const url1 = "https://catfact.ninja/fact";
const h1 = document.querySelector("h1");

const fetchData1 = () => {
    fetch(url1)
    .then((Response) =>  Response.json())
    .then((data) => h1.innerText = data.fact)
    .catch((e) => console.log(e))
    .finally(() => console.log("all done"));
};

fetchData1();