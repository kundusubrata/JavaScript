
function exmaple(name='Krishna'){
    console.log(`${name}:${Math.random()}`)
}

exmaple();
console.log("lastline");



function exmaple2(name='Krishna'){
    for(let i = 0;i<100;i++){
        console.log(`${name}: ${i}`);
    }
}

exmaple();
console.log("lastline");



function exmaple3(name='Krishna'){
    setTimeout(()=>{
        for(let i = 0;i<100;i++){
            console.log(`${name}: ${i}`);
        }
    },4000);
}

exmaple();
console.log("lastline");