// nn bb ss u  (Primitive Data Types)

let a = null;
let b = 345;
let c = true; //can also be false
let d = BigInt("567") + BigInt("3")
let e = "sakshi"
let f = Symbol("I am a nice Symbol")
let g = undefined
console.log(a, b, c, d, e, f, g)
console.log(typeof d)

//Objects in js  (Non Primitive )

const item = {
    "sakshi": true,
    "subh": false,
    "tej": 57,
    "jay": undefined
}
console.log(item["sakshi"])