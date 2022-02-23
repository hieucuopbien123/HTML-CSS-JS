var buttonConfirm = document.createElement("button")
buttonConfirm.innerText = "Confirm Dialog"
// document.body.appendChild(buttonConfirm);//or append
document.body.insertBefore(buttonConfirm,document.body.childNodes[0])//luôn thêm vào đầu
//Đây là cách thêm vào đầu trong js chứ trong html thì phải chỉnh position
buttonConfirm.addEventListener("click",() => {
    var boolConfirm = confirm("Are you ok?")
    if(boolConfirm)
        console.log(typeof boolConfirm)
})

window.onerror = (msg, url, line) => {
    alert("msg: " + msg);
    alert("url: " + url);
    alert("line: " + line)
}

var testArr = [[1,2],new Array(3,4),[5,6],[7,8],[9,10]];
console.log(testArr.copyWithin(1,3,5));

console.log(window.innerWidth, window.innerHeight)//tự đổi khi resize kích thước

var testString = new String("This this is the string for testing this");
console.log("Slice: " + testString.slice(2,-2));
console.log("Match: " + testString.match(/(this)+/mgi));
console.log("Replace: " + testString.replace(/(this)/mgi,"$',$1"));
console.log("Replace: " + testString.replace(/(this)+/mgi, x => x.toLocaleUpperCase()))
console.log("Substring: " + testString.substring(2,10));

var testSome = new Array(1,2,3)
console.log(testSome.some((num) => {return num < 2}))

var testReg = new RegExp(/this/gmi);
while(testReg.test(testString)){
    console.log("Pos: " + testReg.lastIndex); 
}

function* childFunc(){
    yield 1
    yield 2
}
function* testYieldFunc(text){
    yield text;
    console.log('Run next');
    yield* childFunc();
    //dùng yield* nó mới coi các iterable là yield lần lượt từng phần tử chứ k sẽ chỉ chạy 1 lần và yield cả cái iterable
    //đó chứ kp từng phần tử
    yield*["Hello","World"];
}
var varOfYieldFunc = testYieldFunc(18);
console.log(varOfYieldFunc.next().value);
console.log(varOfYieldFunc.next());
console.log(varOfYieldFunc.next());
console.log(varOfYieldFunc.next());
console.log(varOfYieldFunc.next());
console.log(varOfYieldFunc.next());

for(let mess of testYieldFunc(18)){
    console.log(mess);
}//k cần gọi next nx nhé(cơ chế saga cx như v, k cần gọi next mà đưa vào vòng loop)

//Tổng kết các cách lấy width
console.log("Avail: " + screen.availWidth);//width tổng có thể dùng, resize nó vẫn k đổi
console.log("Width: " + window.screen.width)
console.log("Inner: " + window.innerWidth);//width màn hình chuẩn hiện tại-> nên dùng cái này
console.log("Client width: " + document.body.clientWidth + " " + document.documentElement.clientWidth);//width các thẻ
//ví dụ cái đầu là thẻ body, cái sau là thẻ html. Cái sau giống innerWidth nhưng dài nên dùng inner là đc r


var testObject = { name: "Hieu", age: 18};
for(var key in testObject){
    console.log(testObject[key]);
}

if(typeof Storage !== "undefined"){
    console.log("Support: " + typeof Storage);
    sessionStorage.setItem("Password", "123456");
    if(sessionStorage.getItem("Password") == "123456")
        console.log(sessionStorage.key(0) + " " + sessionStorage.key(1))
    sessionStorage.clear();
}

var UserSing = new function(name){
    this.name = "";
    this.age = null;
    this.getInfo = function(age){
        this.age = age;
        console.log(this.age);
    }
    this.printInfo = function(){
        this.name = name;
        console.log(this.name);
    }
}
UserSing.getInfo(18);
//singleton thì chỉ đc tạo 1 class như thế này, k dùng class này làm gì đc nx

class Human {
    _name;//protected
    #age;//private

    constructor(name, age) {
        this._name = name;
        this.#age = age;
    }
    get name() {
        return this._name;
    }
    sayHi() {
        console.log(`Xin chào, tôi là ${this.name}, ${this.#age} tuổi`);
    }
}
let h = new Human("Cường", 19);
h.sayHi();
h.name = "Nguyễn"; 
h.sayHi();

//có thể tạo mảng từ mảng khác, object từ object khác
var arr1 = [1,2,3];
var testvar1 = [...arr1, 4];
var [a,,b,c="default value"] = arr1;
console.log(testvar1);
console.log(a + " " + b + " " + c);

var obj1 = {a:1,b:2,c:3};
var testvar2 = {...obj1};
var {a:x,b:y,c:z} = obj1;
console.log(testvar2);
console.log(x + " " + y + " " + z);

var {a,b,...i} = obj1;
console.log(a + " " + b + " " + i)//k bằng cách trên vì tên biến cách trên linh động hơn

function func1(a,...b){
    console.log(a);
    console.log(b)
}
func1(1,2,3,4)

for(let [u,i] of [1,2].entries()){
    console.log(u + " " + i);
}

var prop1 = "ABC";
var prop2 = 123;
var prop3 = Symbol("456");
var obj = {
    [prop1]: "abc",
    [prop2]: "123",
    [prop3]: 456
}//với cách này ta có thể biến trường key của object là bất cứ cái gì
console.log(obj.ABC + " " + obj[prop2] + " " + obj[prop3]);
//chú ý string thì chấm được chứ k đc dùng obj.123

var promise = new Promise(function (resolve, reject) {
    reject('Error!');
    resolve('Success!');
});
promise.then(
    function (success) {
        console.log("a: " + success);
    },
    function (error) {
        console.log("b: " + error);
    }
).catch(function (message) {
    console.log("c: ", message);
});
//chạy b k chạy c vì then 2 hàm thì hàm 2 vai trò như catch r

var test10 = {
    title: "Hello"
}
console.log(test10["title"])//dùng như này tương đương với test10.title, k đc dùng test10[title]
//tức là .key bằng với ["key"]

function getValue(){
    var x,y,z;
    x = void(y=5,z=7);
    console.log("x,z = " + x + " " + z)
}//chỉ là return undefined, éo có vẹo gì
getValue();

function changeColor(color){
    // var color = color || "yellow"
    //A || default => A k tồn tại(undefined là false, ngược lại là true) thì lấy default, A tồn tại thì lấy A
    //A && B => A k tồn tại thì là undefined, A tồn tại thì lấy B(lấy cái thứ 2)
    //A && B || C => A và B cùng tồn tại thì lấy B, k tồn tại(k cùng true) thì lấy C
    var color = "green" && color || "yellow"
    //color tồn tại thì lấy color, k thì lấy yellow-> green dùng ở đây thừa vì luôn tồn tại nên dùng như này vô dung
    //nếu đổi chỗ green và color thì color tồn tại sẽ lấy green, color k tồn tại lấy yellow
    console.log(color);
}
changeColor("red")
changeColor();

function openWindow(){//k đc đặt tên open
    var windowChild = window.open("https://facebook.com","test window","width=500px;height=500px;menubar=1")
    windowChild.focus();
    return false;
}

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
};
console.log(Object.values(object1));//trả ra 1 mảng, tương tự Object.entries(<>)// or object1.entries()

//test xem rxjs có bất đồng bộ k
var testRx = new Rx.Observable((observer)=>{
    observer.next({
        data: "Hello"
    })
})
testRx.subscribe(value => console.log(value.data))
//nó k thực hiện bất đồng bộ, chỉ khi bên trong Observable ta cho kiểu sự kiện thì mỗi khi sự kiện đc gọi sẽ thực hiện 
//bất dồng bộ

var [property1, property2] = [1, 2];//mảng cũng gán đc như này
console.log(property1 + " " + property2);

var testObjDes = {
    name: "Hieu"
}
var desForObj = Object.getOwnPropertyDescriptors(testObjDes);
console.log(desForObj.name);//trả ra 1 object có thêm các thuộc tính chứ kp 1 biến giống hệt testObjDes
//Nếu muốn copy bth thì như này clone sẽ y hệt testObjDes
var clone = Object.defineProperties({},Object.getOwnPropertyDescriptors(testObjDes))
console.log(clone.name)

var func = console.log;
func("Hello from short arrow");
//arrow func rút ngắn cực đại khi chỉ có 1 đối số và gọi 1 hàm truyền vào đối số đó thì chỉ cần khai báo mỗi hàm

function testDyImport(){
    import("./dynamicImport.js").then(importVar=>{
        importVar.default();//để lấy default
        importVar.hello("test dynamic import")
    })
}

console.log("Test".localeCompare("test"));
console.log([..."Hello"]);

console.log(new String("Test") instanceof String)
//"Test" thì k là 1 instanceof String mà phải cast sang ms đc, nhưng new String("Test") thì có

class Parent{
    constructor(){
        this.name = "Hieu";
    }
    getName(){
        return this.name
    }
    inP(){
        console.log("Parent")
        console.log(this.name)
    }
}
class Child extends Parent{
    inChild(){
        super.inP();//gọi hàm cha như thế này nhé(super là đại diện cho instanceof cha trong con)
        console.log(super.getName())
        //chú ý là k thể lấy đc thuộc tính trực tiếp của cha là super.name đâu mà super chỉ dùng để gọi 1 hàm của cha
        //nên ta tạo hàm getName nếu muốn lấy name. Hàm super(<biến>) là hàm truyền biến gì vào constructor của cha
        //chỉ dùng trong hàm constructor cúa class mà thôi
        //=>Tức là con gọi đến hàm cha mà thôi
    }
}
var child = new Child();
child.inChild();
