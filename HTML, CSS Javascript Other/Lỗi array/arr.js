//copy nó ảnh hưởng lẫn nhau
var arr1 = [1, 2, 3];
var arr2 = arr1;
arr1.push(4);
console.log(arr2);

//nhưng khi gán arr=[] thì éo
arr1 = [];
console.log(arr1, arr2);
//NN là vì nó gán = [] nó là tạo 1 instance mới cho arr đó. Như kiểu gán địa chỉ trong C++ thì đây, arr1 gán 
//địa chỉ sang NULL chứ arr2 vẫn trỏ vào địa chỉ cũ

//Tương tự object cũng v
var obj1 = { number: 1, text: "Hello" };
var obj2 = obj1;
obj1["additionalProps"] = "more";
console.log(obj2);

obj1 = {};
console.log(obj1, obj2);

//Cách gán rỗng cho arr chuẩn
var arr3 = [1, 2, 3];
var arr4 = arr3;
arr4.length = 0;
console.log(arr3, arr4);
//or
var arr5 = [1, 2, 3];
var arr6 = arr3;
// arr5.splice(0, arr5.length);
arr6.splice(0, arr5.length);
console.log(arr5, arr6);
// => cách 1 chuẩn hơn vì arr3.length=0 or arr4.length=0 đều được nhưng cách 2 thì 6 gán theo 5 thì phải đổi 5
//chứ đổi arr6 thì arr5 vẫn thế

//clear object
var obj3 = { number: 1, text: "Hello" };
var obj4 = obj1;
for (const prop of Object.getOwnPropertyNames(obj3)) {//lấy key đó
    delete obj3[prop];
}
console.log(obj3, obj4);

// => nch là gán array empty thì dùng length = 0 là chuẩn nhất. Còn object thì dùng vòng for các key nhé