
console.log(Math.round(4.8));
console.log(Math.round(4.4));
console.log(Math.floor(4.8));
console.log(Math.floor(4.4));
console.log(Math.ceil(4.8));
console.log(Math.ceil(4.4));
console.log(Math.trunc(4.123));
console.log(Math.trunc(8.87123)); // it cut the all decimal point
console.log(Math.sign(123));
console.log(Math.sign(-123));
console.log(Math.pow(2,10));
console.log(Math.sqrt(25));
console.log(Math.sqrt(625));
console.log(Math.abs(5));
console.log(Math.abs(-5)); // absolute value
console.log(Math.sin(90));  // ---> 90 is radian format
console.log(Math.sin(90*Math.PI)/180); // ---> you will get 1 answer
console.log(Math.tan(90*Math.PI)/180);
console.log(Math.max(1,2,3,4,5,6,7,8,9));
console.log(Math.min(1,2,3,4,5,6,7,8,9));
console.log(Math.random() * 10);
console.log(Math.random() * 10 + 5);
console.log(Math.random() * 5 + 5);
console.log(Math.random() * (max-min+1) + min);
console.log(Math.random() * 6 + 1);
console.log(Math.floor(Math.random() * 6 + 1));
console.log(Math.log2(8));
console.log(Math.log2(512));


const a = new Date();
console.log(a);
console.log(new Date(2012,11,12));
console.log(new Date(2012,11,12,5,3,2,1));
console.log(new Date(2012)); // ---> this parameter not for year it is for milisecond when you pass one paramenter in date it will always considered as milisecond.
console.log(new Date("Thu Jan 01 1970 05:30:02"));
console.log(new Date("Mar    01 1970 05:30:02"));

console.log(a.getHours());
console.log(a.getMilliseconds());
console.log(a.getMinutes());
console.log(a.getSeconds());
console.log(a.getTime());
console.log(a.getMonth());
console.log(a.toUTCString());
console.log(a.setDate(344));
console.log(a.setHours(44));



