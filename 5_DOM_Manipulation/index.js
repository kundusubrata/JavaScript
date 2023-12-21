
console.log(document.body); // i wil get whole body
console.log(document.head); // i will get only head tag
console.log(document.documentElement) // i will get whole html tag
console.log(document.firstChild);
console.log(document.firstElementChild);
console.log(document.body.children);

const arr = document.body.children;
const newArr = Array.from(arr);

for(let i = 0 ;i<newArr.length;++i){
    console.log(newArr[i]);
}


console.log(thisOne);

let thisOne = "Krishna";
console.log(document.getElementById("thisOne"));

console.log(document.getElementsByClassName("okay"));

let thisOne2 = document.getElementsByClassName("okay");
console.log(thisOne2[0]);
console.log(thisOne2[1]);

let thisone3 = document.getElementsByName("email");
console.log(thisone3);

let thisone4 = document.getElementsByTagName("span");
console.log(thisone4);
thisone4[0].textContent = "newOne";
console.log(thisone4);
thisone4[0].innerText = "again";
console.log(thisone4);
thisone4[0].innerHTML = `<span class = "myClass>Noice</span>`;
console.log(thisone4);
thisone[0].style.backgroundColor = "green";
thisone[0].style.color = "#fff";
thisone[0].style.font = "100 1.4rem 'roboto'";

const myBtn = document.getElementById("myBtn");
myBtn.style.backgroundColor = "blue";
myBtn.style.color = "#fff";
myBtn.style.border = "none";
myBtn.style.padding = "20px 20px";
myBtn.style.cursor = "pointer";

const test = document.querySelector(".okay");
myBtn.innerText = "none";

const btn = document.getElementById("myBtn2");
btn.getAttribute("id");
btn.setAttribute("class","newOne");


// const h2 = document.createElement("h2");
// h2.innerText = "Hi";
// h2.textContent = "hello";
// const myText = document.createTextNode("Sample Text");
// h2.append(myText);
// document.body.append(h2);
// document.body.prepend(h2);



const myBtns = document.querySelectorAll("button");

function bringMeHeading(){
    const h2 = document.createElement("h2");
    h2.innerText = "Hi";
    document.body.prepend(h2);
}
btn.onclick = bringMeHeading;

function deleteHeading(){
    const h2 = document.querySelector("h2");
    h2.remove();
}

myBtns[2].onclick = deleteHeading;