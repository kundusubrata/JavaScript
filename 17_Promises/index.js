
const a = new Promise((resolve,reject) => {
    // resolve("Promise Fulfilled");
    reject("Some Technical Error");
})

a.then(
(parameter) =>{
    console.log(parameter);
},
(error) =>{
    console.log(error);
}
);



const b = new Promise((resolve,reject) => {
    let success = true;
    if(success) resolve("Promise fulfilled");
    else reject("Some technical error");
})

b.then(
(parameter) =>{
    console.log(parameter);
}).catch((error) => {
    console.log(error);
});



const arr = [];

const fetchData = (arr = []) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            arr.push({name:"Krishna"});
            if(arr.length>0) resolve ("Data fetched");
            else reject ("Some technical error");
        }, 2000);
    })
}

// fetchData(arr)
// .then((message) => {
//     console.log(message);
// })
// .catch((message) => {
//     console.log(message);
// })

fetchData(arr)
.then((message) => console.log(message))
.catch((message) => console.log(message))
.finally(() => console.log(("Will work either way")));