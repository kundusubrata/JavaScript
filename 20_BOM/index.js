 /* DOM -- Document Object Model
    BOM -- Browser Object Model 

                  
                 |---- Navigator
                |---- Document
    Window ---- |---- History
                \---- Screen
                 \---- Location
                  

 */

navigator.geolocation.getCurrentPosition((d) => {
    console.log(d);
    console.log(d.coords.latitude);
    console.log(d.coords.longitude);
},(e) => console.log(e)
);


console.log(history);

const back = () =>{
    // history.back(); // this is back option for browser.
    history.forward();  // In this option you can go with forward similar work as our browser lefside left arrow key and right arrow key.
}
back = onclick();


// Location

console.log(location.protocol);
console.log(location.hostname);
console.log(location.port);
console.log(location.pathname);
console.log(location.host);
console.log(location.href);
console.log(location.search);

const func1 = () => location.reload();

func1 = onclick();

const func2 = () => location.assign("https://www.youtube.com/@6PackProgrammer")
const func3 = () => location.replace("https://www.youtube.com/@6PackProgrammer")
// assign has back button but replace has don't back button when page will open another things these func has to be add eventlistener.
