console.log(typeof null);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(isNaN("Hello")); //check có phải số k
console.log(Number(10).valueOf());

console.log(Number(101.23955).toFixed(2)); //dùng khi muốn lấy bnh phần thập phân
console.log(Number(101.23955).toPrecision(3)); //dùng khi muốn lấy độ dài chỉ đến bnh chữ số cả nguyên và thập phân
console.log(Number(101.23955).toString(2)); //đổi cơ số

console.log("Ie ie ie ie".indexOf("ie", 4)); //tìm 1 cái từ vị trí nào
console.log("Ie ie ie ie".lastIndexOf("ie")); //chỉ tìm 1 cái từ cuối
console.log("Ie ie ie ie".match(/ie/gim)); //tìm tất cả
console.log([..."Ie ie ie ie".matchAll(/ie/gim)]); //tìm tất cả chi tiết hơn
console.log("Ie ie ie ie".search(/ie/gim) != -1); //có hay k
console.log("Ie ie ie ie".includes("ie", 4)); //có hay k từ index nào=> thế hoàn toàn search, dùng với mọi iterable
const re = new RegExp("ie", "gmi");
const string = "Ie ie ie ie";
console.log(re.test(string)); //tìm lần lượt có hay k
console.log(re.lastIndex); //tìm lần lượt in ra index bắt đầu
console.log(re.test(string));
console.log(re.lastIndex);
const re2 = new RegExp("(ie)", "gmi");
console.log(re2.exec("Ie ie ie ie")); //tìm lần lượt lấy ra string thỏa mãn regexp trong từng cụm ()
console.log(re2.exec("Ie ie ie ie"));

console.log(Math.round(Math.random())); //làm tròn xấp xỉ
console.log(Math.floor(Math.random())); //luôn xuống
console.log(Math.ceil(Math.random())); //luôn lên

console.log(window.innerWidth);
console.log(window.screen.width);
console.log(window.screen.availWidth);
console.log(document.documentElement.clientWidth);
console.log(document.body.clientWidth); //thẻ body lúc nào cũng nhỏ hơn thẻ html. width chuẩn là thẻ html cx là innerWidth

function* test12() {
    yield 1;
    yield 2;
}

function* test1() {
    yield 'he'; //yield bình thường
    yield*'he'; //yield 1 iterator

    yield test12().next(); //yield bình thường
    yield* test12(); //yield 1 iterator
    //yield bình thường phải dùng next khi gọi function* vì nó là 1 iterator mà yield bình thường k chơi với iterator
}
const varTest = test1();
console.log(varTest.next());
console.log(varTest.next());
console.log(varTest.next());
console.log(varTest.next());
console.log(varTest.next());
console.log(varTest.next());
console.log(varTest.next());

var map1 = [1, 2, 3].map(x => x + x);
var map2 = Array.from([1, 2, 3], x => x + x); //thg thì người ta dùng map nhiều hơn do lấy được cả index, arr nếu muốn
console.log(map1);
console.log(map2);

let user = {
    name: "John",
    age: 30,
    isAdmin: true
};
for (let key in user) {//mặc định dùng Object.keys(user)
    console.log(`${key} - ${user[key]}`);
}
let users = [1, 2, 3, 4];
for (let key of users.entries()) {//mấy cái entries, keys, values phải dùng for of
    console.log(`${key}`);
} //dù sao thì forEach vẫn là hot nhất
for (let [key, value] of Object.entries(user)) {
    console.log(`${key} - ${value}`);
} //dù sao thì forEach vẫn là hot nhất, sau đó đến for of vì forEach éo dùng được cho object nhưng for of đa dạng
var iterable = users[Symbol.iterator]();
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());
console.log(iterable.next());


var var1 = 1;
var var2 = [1,2,3];
var var3 = { name: "hieu", age: 18};

var var1Test1 = var1;//gán giá trị
var var2Test1 = var2;//gán địa chỉ
var var3Test1 = var3;//gán địa chỉ

var var3Test3 = {...var3, id: 1};//copy => nên dùng nhất
var var3Test9 = new Object(var3);//copy
var var3Test4 = JSON.parse(JSON.stringify(var3));//copy, có thể k ra đúng object bđ
var var3Test5 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(var3));//copy, k cần thiết
var var3Test2 = Object.assign({}, var3);//copy

var var3Test7 = Object.assign(var3, {name: "Hello"});//gán địa chỉ, đổi trực tiếp

var var3Test6 = Object.create(var3);//var3 trở thành thuộc tính prototype của var3Test6
var var3Test8 = Object.getOwnPropertyNames(var3);//copy nhưng chỉ lấy mỗi key
var var3Test9 = Object.getOwnPropertyDescriptors(var3);//copy nhưng k cần thiết

var var2Test2 = [...var2, 4];//copy, nên dùng nhất

var [a,, c] = var2;//copy
var {name: tName, age: tAge} = var3;//copy có thể đổi sang tên khác => nên dùng
var {name, ...other} = var3;//copy nhưng dùng cùng tên, nếu có biến tên đó sẵn r thì k đc

function function1(a, ...b) {
    console.log(a, b);
    for (let x of arguments) {
        console.log(x);
    }
}
function1(1,2,3, {name: "hieu"});
// => Đó là tất cả, các cách gán không liệt kê ở đây thg sẽ k được dùng trong thực tê

var var4 = 10;
var var5 = var4 && 11 || 12;
//A && B thì A tồn tại lấy B, A k tồn tại thì undefined
//A || B thì A tồn tại lấy A, A k tồn tại thì B

var str = "Hello World";
var arr = [1,2,3,4,5];
console.log(str.slice(2,4));//cả string, array
console.log(arr.slice(2,4));

console.log(str.substring(2,4));

var arrTest = arr.splice(2,2);
console.log(arr);
console.log(arrTest);

