
class Myclass{
    a = 20;
    b = 30;
}
const obj = new Myclass();
console.log(obj);


function Myclass2(){
    this.a = 20;
    this.b = 30;
}
const obj1 = new Myclass2();
console.log(obj1);


class Myclass3{
    a = 20;
    b = 30;
    print(){
        console.log("I am printing");
    };
}
const obj2 = new Myclass3();
obj2.print();
console.log(obj2);


function Myclass4(value1,value2){
    this.a = value1;
    this.b = value2;
}
const obj3 = new Myclass4(30,20);
console.log(obj3);



class Myclass5{
    constructor(value1,value2){
        this.a = value1;
        this.b = value2;
    }
    print(){
        console.log("I am printing");
    };
}
const obj4 = new Myclass5(23,34);
obj4.print();
console.log(obj4);

//-------------------- Private variable in class----------------------

class Myclass6{
    #a = 32;
    #b = 43;
    constructor(value1,value2){
        this.#a = value1;
        this.#b = value2;
    }
    getData(){
        return this.#b;
    }
    get getData1(){
        return this.#a;
    }
    set setData(a){
        this.#a = a;
    }
    setData(b){
        this.#b = b;
    }
    print(){
        console.log("I am printing", this.#a);
    };
}
const obj5 = new Myclass6(23,34);
obj2.print();
console.log(obj5);
console.log(obj2.getData());
console.log(obj2.getData);
obj2.setData = 87;
obj2.setData("56");



const  Myclass6 = class{
    #a = 32;
    #b = 43;
    constructor(value1,value2){
        this.#a = value1;
        this.#b = value2;
    }
    getData(){
        return this.#b;
    }
    get getData1(){
        return this.#a;
    }
    set setData(a){
        this.#a = a;
    }
    setData(b){
        this.#b = b;
    }
    print(){
        console.log("I am printing", this.#a);
    };
}
const obj6 = new Myclass6(23,34);
console.log(obj6);






const  class2 = class Myclass7{
    #a = 32;
    #b = 43;
    constructor(value1,value2){
        this.#a = value1;
        this.#b = value2;
    }
    getData(){
        return this.#b;
    }
    get getData1(){
        return this.#a;
    }
    set setData(a){
        this.#a = a;
    }
    setData(b){
        this.#b = b;
    }
    print(){
        console.log("I am printing", this.#a);
    };
}
const obj7 = new class2(23,34);
console.log(obj7);


//  --------------- Inheritance -------------

class Electronics{
    #input;
    #output;
    #name;

    constructor(input,output,name){
        this.#input = input;
        this.#output = output;
        this.#name = name;
    }
    print(){
        console.log(this.#name);
    }
}

const charger = new Electronics(18,200,"Charger");
charger.print();

class Charger extends Electronics{
    #plugType;
    constructor(input,output,name,plugType){
        super(input,output,name);
        this.#plugType = plugType;
    }
}

const hpCharger = new Charger(231,211,"Hp Charger","European");
const dellCharger = new Charger(231,211,"dell Charger","European");
const asusCharger = new Charger(231,211,"asus Charger","European");

hpCharger.print();

class Harddisk extends Electronics {
    #RPM;
    constructor(input,output,name,rpm){
        super(input,output,name);
        this.#RPM = rpm;
    }
    get harddiskSpeed(){
        console.log(this.#RPM);
    }
}

const wdHarddisk = new Harddisk(200,250,"WD Hard Disk",7200)
wdHarddisk.print();
wdHarddisk.harddiskSpeed;