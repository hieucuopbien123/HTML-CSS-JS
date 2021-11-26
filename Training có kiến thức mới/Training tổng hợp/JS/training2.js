console.log("STAGE 1")

var desAssignmentArr = [1,2,3];
var [a,,b,c,d=10] = desAssignmentArr;
console.log(a, b, c, d);
//mảng thì theo thứ tự, object thì trùng tên ms lấy, k thì bỏ qua, ba chấm thì thành object số còn lại
//para thì thoải mái đê
var desAssignmentObj = {
    name: 'hieu',
    age: 1,
    job: 'IT'
}
var {name, y, z = 10, ...x} = desAssignmentObj;
console.log(name, y , x, z);
var AllInOneObject = { name, y, z, x};
console.log("All in one: ", AllInOneObject);
var desAssignmentPara = function(a, b, c, ...d) {
    console.log(a, b, c);
    for(var i in d) {
        console.log(d[i]);
    }
    for(var i of d.entries()) {
        console.log("for of entries: ", i);
    }//bắt buộc dùng vong for of, dùng for in là sai
    for(var [a,b] of d.entries()) {
        console.log("for of entries[a, b]: ", a, " ", b);
    }
    for(var i of d.values()) {
        console.log("for of values: ", i);
    }
}
desAssignmentPara(1,2,3,4,5,6);

var testSet = new Set([1,2,3,4,4]);
testSet.add(5);
if(testSet.has(2))
    testSet.delete(2);
for(let number of testSet)
    console.log(number)

var arrFromSet = [...testSet];
console.log(arrFromSet);
testSet.clear();
console.log("Size: ", testSet.size);

var varMap = new Map([
    [ "Name", "Hieu" ],
    [ "Age", 18 ]
]);
varMap.set(NaN, "hieucuopbien123@gmail.com").set("job","IT");
if(varMap.has("Name"))
    varMap.delete("Name");
console.log("Size of map: ", varMap.size);

//!
console.log("STAGE 2");

for(var i of varMap.keys()){
    console.log(i);
}
for(var i of varMap.values()){
    console.log(i);
}
for(var i of varMap.entries()){
    console.log(i[0], " - ", i[1]);
}
console.log("Get value age: ", varMap.get("Age"));
// varMap.clear();

var changeMapToMap = new Map([...varMap].map(
    ([key, val]) => {
        return [key, key + " - " + val];
    }
))
console.log(changeMapToMap)

var key1 = Object.create({});
var varWeakMap = new WeakMap([
    [ key1, "key number 1"],
    [ {}, "key number 2"],
]).set({ name: "hieu" },18);
console.log(varWeakMap);

var varWeakSet = new WeakSet([{ name: "hieu" }, { age: 18 }])
console.log(varWeakSet);

var varSymbol = Symbol();//chú ý khai báo symbol k có new
console.log("String: ", String(varSymbol));
console.log("Boolean: ", Boolean(varSymbol));
varWeakMap.set({
    [varSymbol]: "Test"
}, "Test value")
console.log("Symbol is key of weak map: ", varWeakMap);

var promise = new Promise((resolve, reject) => {
    reject("message");
})
promise.then(() => {
    console.log("Function1");
    return false;
})
.then(() => {
    console.log("Function2");
    return true;
})

.catch((err) => {
    console.log("Catch1: ", err);
    return false;
})
.then((content) => {
    console.log("Function3: ", content);
    return false;
})
.then(() => {
    console.log("Function4");
    return "test para";
})
.then((mess) => {
    console.log("Function5: ", mess);
    return true;//return true false hàm bth chả có ý nghĩa gì
})
//cơ chế đúng ra phải là nếu là hàm then bth thì thực hiện liên tiếp bỏ qua catch luôn. Nhưng nếu 1 promise mà thực 
//hiện reject thì nó sẽ bỏ qua các then cho đến khi gặp catch thì thôi->chỉ có 1 quy tắc đó
//Do đó các hàm trong then nó thg gọi đến 1 promise khác để liên tiếp kiểm tra và thực hiện. VD bên dưới là 1 ứng dụng

var promiseUD = new Promise((resolve, reject) => {
    resolve("Hieu");
})//đúng thì thực hiện hàm truyền vào then
promiseUD.then((mess) => {
    return new Promise((resolve, reject) => {
        if(mess === "Hieu")
            resolve();
        else
            reject();
    })
})
.then(() => {
    console.log("Function2 ver 2");
    return new Promise((resolve, reject) => {
        reject();
    })
})
.catch((err) => {
    return new Promise((resolve, reject) => {
        reject();
    }) 
})
.then((content) => {
    console.log("Function3 ver 2: ", content);
    return false;
})
.then(() => {
    console.log("Function4 ver 2");
    return "test para";
})
.then((mess) => {
    console.log("Function5 ver 2: ", mess);
    return true;//return true false hàm bth chả có ý nghĩa gì
})
.catch(err => {})//chú ý luôn có 1 cái catch ở cuối tránh báo error uncaught
//như ở trên thì Function2 ver 2 r catch lại reject tiếp thì kết thúc luôn=> master promise

function checkArgument() {//éo có vẫn truyền, vẫn truy cập đc luôn
    for(var x of arguments)
        console.log(x);

    var iterable = arguments[Symbol.iterator]();
    var temp = iterable.next();
    while(temp.done == false){
        console.log("Iterator: ", temp.value);
        temp = iterable.next();
    }
}
checkArgument(1, 2, 3, 9, 5);

console.log("STAGE 3");

var newArray = new Array(4,3,2,1);
console.log(newArray);//in ra biến array
console.log(...newArray);//chỉ in ra các giá trị

console.log("include in ES7: ", newArray.includes(2,1))

console.log("2 mũ 5", 2**5);

async function testAsynchronous() {
    var check = 0;
    var first = await new Promise((resolve,reject) => {
        resolve(check);
    }).then(check => {
        check++;
        console.log("After plus one: ", check);
        return check;
    })

    var second = await Promise.resolve(first).then(check => {
        check*=2;
        console.log("After multiple by 2: ", check);
        return check;
    })

    var thirdOperation = (check)=>{
        return new Promise((resolve, reject) => {
            resolve(check);
        }).then(check => {
            if(check > 4)
                console.log("Check > 4");
            else 
                console.log("Check <= 4");
            return check;
        })
    }
    try{
        var finalRes = await thirdOperation(second);
        document.getElementById("check").innerHTML = `<h1>${finalRes}</h1>`;
    }catch(e){
        console.log(e);
    }
}
try{
    testAsynchronous()
}catch(e) {console.log(e)}

function testTimeOut(){
    console.log("Timeout each 2s");
}
var intervalID = setInterval(testTimeOut, 2000);
function clearIntervalClock() {
    clearInterval(intervalID);
    console.log("Cleared")
}
setTimeout(clearIntervalClock, 8000);

console.log("Image tag: ", document.images.length);

var att = document.createAttribute("href");//1 biến attribute chỉ lưu đc 1 attribute
att.value = "#";
var ele = document.createElement('a');
ele.setAttributeNode(att);
ele.textContent = "Click Link";
document.body.appendChild(ele);

var fragment = document.createDocumentFragment();
var animals = ['cat', 'dog','lizard'];
animals.forEach((animal) => {
    var liTag = document.createElement('li');
    var textNode = document.createTextNode(animal);
    liTag.appendChild(textNode);
    fragment.appendChild(liTag);
})
document.body.appendChild(fragment);

console.log("Tìm theo tên: ", document.getElementsByName('hieu').length);

console.log("STAGE 4");

function test() {
    var frame = document.getElementsByTagName("IFRAME")[0];
    var h = frame.contentWindow.document.getElementsByTagName("img")[0];
    var x = document.importNode(h, true);//khi dùng node có sẵn nhưng từ 1 thẻ lấy từ resource khác
    document.body.appendChild(x);
    window.print();
}
//cái importNode mà của page này thì phải đặt trong hàm như này thực hiện sau vì ta lấy từ 1 cái link khác mà chính
//nó còn chưa load xong thì lấy thẻ img ra sẽ undefine k import đc. Đặt vào hàm chờ load xong web mới dùng đc 

console.log("Image first: ", document.querySelector('img'));
console.log("Find by class: ", document.getElementsByClassName('test')[0].className);

console.log("Value of input: ", document.forms[0].Name.value);
document.forms[0].Name.focus();
//chú ý 1 trang web chỉ focus đc vào 1 thứ-> Ở th này nó focus vào input trong iframe nhé vì nó load sau nên lấy sau

document.getElementsByTagName('a')[0].onclick = () => {//gọi và thực hiện sự kiện trong js
    console.log("Link is clicked");
    return false;
};
function submitFunc() {
    document.getElementsByTagName('form')[0].submit();//submit trong javascript của form
    console.log("Button is clicked");
    return false;
}

function eventFunc() {
    alert(this);
    return false;
};
document.getElementById("inputButton").addEventListener('click',eventFunc);
document.getElementById("inputButton").removeEventListener('click',eventFunc);

function eventMouseOver(e){
    console.log(e.clientX);
    console.log(e.clientY);
}

document.getElementById("check").replaceChild(document.createTextNode("Content"),
                                            document.getElementById("check").childNodes[0]);

// console.log("Query all: ", document.querySelectorAll("body div"));
console.log("nodeValue: ", document.getElementById("check").childNodes[0].nodeValue);
//nodeValue trả ra giá trị của Node nào đó. Chú ý giá trị text của 1 node phải là 1 textNode ms dc. Nếu là 1 element
//node bth thì nodeValue sẽ return null-> phải lấy textNode qua childNodes[0] r mới lấy giá trị text của nó 

