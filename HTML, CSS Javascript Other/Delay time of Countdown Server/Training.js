console.log("%c%s%c World!","color: red;font-weight:bold;font-size:24px","Hello","")
console.log("%o Trang",{
    name:"Trang", 
    age: 10
})
console.trace("Para of trace");
console.time("Hello")
console.timeEnd("Hello")
console.group("Hello group")
console.count("count")
console.countReset();
console.groupEnd()
console.count("count")
console.error("Hello error")
console.info("Info")
console.table([1,2,4,5,[1,2,3]])
console.assert(1+1!=2,"1+1!=2")