console.log("This is an %cobject %o%c, %cok?",
    "color: yellow; font-size: 25px",
    {
        Name: "Hieu",
        Age: 18
    },
    "",
    "color: black"
)
console.trace("This is line 10")
console.info("This is console.info")
console.warn("cẩn thận")
console.error("lỗi")
console.table([[1,2],[1,2,3]])
console.debug("Hello")
console.clear();
console.group();
console.assert(false, "assert false");
console.group();
console.time();
console.timeLog();
console.groupEnd();
console.groupEnd();
console.timeEnd();
console.count();
console.count();
console.count("Another count");
console.countReset();
console.count();