const input = document.getElementById("myInput");
const btn = document.getElementById("myBtn");
const deleteBtn = document.getElementById("delete");

// --------------------- Session Storage(one session means that tab) -----------------

const btnClick = () =>{
    // alert("clicked");
    // alert(input.value);
    sessionStorage.setItem("key1",input.value);
};
btn.addEventListener("click",btnClick);
deleteBtn.addEventListener("click",()=>{
    console.log(sessionStorage.key(0));
    console.log(sessionStorage.length);
    sessionStorage.removeItem("key1");
    sessionStorage.clear();
})

// alert(sessionStorage.getItem("key1"));

if(sessionStorage.getItem("key1")){
    alert(sessionStorage.getItem("key1"));
}


// ----------------------- Local Storage (Permanently ) -------------------------

const btnClick2 = () =>{
    localStorage.setItem("key1",input.value);
};
btn.addEventListener("click",btnClick2);
deleteBtn.addEventListener("click",()=>{
    console.log(localStorage.key(0));
    console.log(localStorage.length);
    localStorage.removeItem("key1");
    localStorage.clear();
})
if(localStorage.getItem("key1")){
    alert(localStorage.getItem("key1"));
}


// ------------------ Local Storage by using JSON format ----------------------


const btnClick3 = () =>{
    localStorage.setItem("key1",JSON.stringify({name:"Krishna",surname:"Das"}));
    //parse ---> String become Object, stringify ----> Object become String
};
btn.addEventListener("click",btnClick3);
deleteBtn.addEventListener("click",()=>{
    console.log(localStorage.key(0));
    console.log(localStorage.length);
    localStorage.removeItem("key1");
    localStorage.clear();
})
if(localStorage.getItem("key1")){
    console.log(localStorage.getItem("key1"));
    console.log(JSON.parse(localStorage.getItem("key1")));
}