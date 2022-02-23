function test(){
    var frame = document.getElementsByTagName("iframe")[0];
    var x = frame.contentWindow.document.getElementsByTagName("div")[0];
    var y = document.importNode(x,true);//nếu k muốn lấy cả node thì k cần import nv, VD chỉ cần textContent
    document.body.appendChild(y);
    console.log(frame.nodeType);//nodeType trả ra loại node theo số
    //1 là element node, 2 là attribute node, 3 là text node, 4 là comment node
}

function mouseMove(event) {
    var x = event.clientX;
    var y = event.clientY;
    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = y;
}

var windowPersonal = null;
function newWindow(){
    windowPersonal = window.open("https://www.facebook.com", "facebook window", "width = 100px; height = 100px");
    windowPersonal.document.write("hello");
    //window mở ra sẽ chỉ là 1 personal window mà thôi
}

function resizeWindow(){
    windowPersonal.resizeTo(1000, 1000);
    windowPersonal.moveTo(500,100)
	windowPersonal.focus();
}

function replaceWindow(){
    console.log(window.history);
    window.location.replace("https://www.facebook.com");
    window.focus();
}

function forwardWindow(){
    window.history.forward();
    window.focus();
}

function changeWindow(){
    // window.location.href = "https://www.facebook.com";
    // window.location = "https://www.facebook.com";
    window.location.assign = "https://www.facebook.com";
}

new Rx.Observable((o) => {//khai báo Observable phải có new
    window.addEventListener("resize", () => {
        var height = window.innerHeight;
        var width = window.innerWidth;
        o.next({
            width,
            height
        });
    });
}).subscribe(value => console.log(value.width, value.height));
//Rx.Observable giúp thực hiện 1 chuỗi hành động bất đồng bộ
//bất cứ khi nào hàm next được gọi sẽ thực hiện subscribe, ta nên đưa hàm next vào 1 sự kiện nào đó để có sự kiện sẽ thưc
//hiện subscribe 1 chuỗi hành động bất đồng bộ
//Đầu tiên tạo biến observer là 1 hàm số, nó sẽ thực hiện luôn bên trong, thêm event vào window...

var objec = {
    name: "hieu",
    age: 19,
    male: true
}
console.log(objec.name.padEnd(15,"x"));//k thay đổi biến mà trả ra giá trị
for(var [key,value] of Object.entries(objec))
    console.log("Key: ", key, " - ", value);
for(var value of Object.values(objec))
    console.log("value: ", value);

var object1 = {
    property1: "Hieu",
    property2: "Trang",
    get listAll(){
        return "Tui là " + this.property1 + " - " + this.property2;
    },
    set _property1(value){
        this.property1 = value;//chú ý gán buộc có this
    },
    doSth(){
        console.log("do nothing");
    }
    //hàm getter có thể đặt trùng tên nhưng setter thì k, hàm setter chỉ thông báo là có biến bị đổi bên trong và ta
    //tự gán, đặt trùng tên sẽ k hđ. Nch là tự khóa get và set chỉ có vai trò thông báo
}
object1._property1 = "hieucuopbien";
console.log(object1.listAll);

var descriptor = Object.getOwnPropertyDescriptors(object1);
console.log(descriptor.property1);
console.log(descriptor.doSth);

var user5 = {
    name: "Hieu",
    toString(){
        return this.name;
    }
}
var descriptor = Object.getOwnPropertyDescriptors(user5);
console.log(descriptor.name.writable);
Object.defineProperty(user5,"name",{
    writable: false
})
descriptor = Object.getOwnPropertyDescriptors(user5);
console.log(descriptor.name.writable);
//ta chỉ có thể đổi các thứ mà chắc chắn sẽ đổi đc, VD toString là 1 hàm sẽ k đổi đc các thuộc tính

var user4 = Object.defineProperties({},Object.getOwnPropertyDescriptors(user5));
console.log(user4);

console.log("'copy'within: ", [1,2,3,4,5,6].copyWithin(3,1,3));

function testvoid(){
    javascript:void alert("Warning");
}

document.open();
document.writeln(document.URL);
document.close();
console.log(document.defaultView);
console.log(document.documentElement.clientHeight);//thẻ html
//muốn lấy chiều dài, rộng của bất cứ thẻ nào thì dùng clientHeight, clientWidth. Còn window ta lấy TT innerWidth
console.log(document.implementation);
console.log(document.readyState);
//document.lưu các thứ liên quan đến cái tài liệu như các thẻ, lần chỉnh sửa cuối, trạng thái load của tài liệu
//navigator lưu các thứ liên quan đến web và cả cái browser này như tên app, engine, nền tảng,mimetype browser, plugin
//location lưu các thứ về tên vị trí như hostname
//window quản lý các thứ ảnh hưởng đến cửa số như innerWidth, alert

if (window.cookieEnabled){
    document.write("Có bật Cookie" + "<br>");
}
// document.cookie = "name=hieu; expires=Thu, 0 Dec 2019 12:00:00 UTC";
// document.cookie="cookie nè";
//cookie nó k cần thiết phải đúng là có dấu = này nọ vẫn lưu được dưới dạng string. Đặt dấu = để khi viết hàm lấy nó
//dễ thôi
console.log(document.cookie);

function MustUseNew(){//khi có this
    this.nameTest = "Hi";
}
var testNew = MustUseNew();
console.log(window.nameTest);//k dùng new nó gán cho window nè

function* yieldChild(){
    yield 3;
    yield 4;
    return 1;//yield lần sau chạy tiếp, return thì hết mnl nhưng chú ý function* k lấy return nhé nên kết thúc hàm ư
    //k trả ra gì hết. Có thể dùng return để dừng hàm function vĩnh viễn khi thỏa mãn đk gì
    yield 5;
}
function* testYield(a){
    yield [1,2];
    yield* [1,2];//khác biệt vì yield từng phần tử còn trên là yield cả arr
    yield* "ab";

    yield yieldChild();//éo lấy đc
    yield* yieldChild();//lấy đc vì cân mọi ite.

    const testInside = yield 6;
    console.log(testInside);//undefined vì yield lấy TT, phải qua function* mới ra đc giá trị

    while(a < 3){
        a++;
        yield 10;
    }
    if(a < 10){//đk khác vòng lặp nhé
        a++;
        yield 9;
    }
}
const yieldVar = testYield(1);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);
console.log(yieldVar.next().value);

console.log("START ITERATOR");
for(var k of testYield(1)){
    console.log(k);
}

var form = new FormData();
form.append("firstName", "Hieu");

var inputTag = document.querySelector("div.test1");//cho thấy querySelector là mạnh nhất r
var thTag = document.querySelector("table[border='1'] tr th[align='right']");
console.log(inputTag);
console.log(thTag);

class TestClass{
    constructor(object){
        this.object = object;
    }
    showObject(){
        console.log(TestClass);
        for(var key in this.object){
            console.log(key);
        }//for of k dùng với object trừ khi thêm entries, vì object kp iterable
        for(var [key,vale] of Object.entries(this.object)){
            console.log(key + " " + vale)
        }
    }
}
var testClassVar = new TestClass({name: "hieu", age: window.screen.availHeight})
console.log(testClassVar)
testClassVar.showObject();

var q = 10;
var w = eval("q*17") + "</br>";
console.log(w);

if(typeof sessionStorage != 'undefined'){
    sessionStorage.setItem("author","Hieu");
    console.log(sessionStorage);
    sessionStorage.clear();
}

console.log(Object.getOwnPropertyNames(TestClass));
console.log(Object.getOwnPropertyNames(TestClass.prototype));//lấy các thuộc tính của class

var class1Var = class class1{
    sayHi(){
        alert("Hi");
    }
}
var tempC1 = new class1Var();
// tempC1.sayHi();
//Đặc biệt là nếu dùng class class1 thì có thể var tempC1 = new class1(); ok luôn nhưng nếu dùng gán class đó cho 1 
//biến thì lúc đó cái kia k được coi là định nghĩa 1 class nên dùng giống như v là sai mà phải là:
//var tempC1 = new class1Var();=> tức là cái class kia kp định nghĩa global nên có thể bỏ tên class cx đc là
//var class1Var = class {}; var tempC1 = new class1Var; 

class staticClass{
    static staticVar = "181";
    static staticFunc1(){
        console.log(this);
        console.log(this.staticVar);
    }//đây là cách duy nhất tạo static chứ bth phải khai báo biến mới dùng đc
}
staticClass.staticFunc1();
staticClass.staticFunc2 = function() {
    console.log("Helllo World")
}
staticClass.staticFunc2();

var mapVar = new Map([["Name","Nguyen Thu Hieu"],["Age", 18]]).set("Job","IT");
var sym = Symbol("TestSymbol");
mapVar.set(sym,"SYM");
for(let [u,v] of mapVar){
    console.log(`${u} - ${v}`);//k in đc symbol nhé
}
