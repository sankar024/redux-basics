let arr =  [1,2,3]
arr.push(arr[2]++)
// console.log(a)

let variables; 
// console.log(variables)



let x = {
    y : "z",
    print:()=>{
        return this.y === 'z'
    }
}
// console.log(x.print());

let findType =  [1,2,3]
let findY = findType.join("")
// console.log(typeof findType)


function xq(){
    var i = 1

    setTimeout(() => {
        console.log(i)
    }, 1000);


}
console.log(xq())



let checkNull = [null, 0, "0", false, 'a']
let checkValue = checkNull.filter((value) => value)
// console.log(checkValue)

var a;
typeof a;				// "undefined"

a = "hello world";
typeof a;				// "string"

a = 42;
typeof a;				// "number"

a = true;
typeof a;				// "boolean"

a = null;
typeof a;				// "object" -- weird, bug

a = undefined;
typeof a;				// "undefined"

a = { b: "c" };
typeof a;	


