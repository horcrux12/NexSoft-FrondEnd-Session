const h1 = document.querySelector("h1[apa='apaantuh']"); //ambil attribute
const h1all = document.querySelectorAll("h1");
const custom = document.getAtt
console.log(h1);
console.log(h1all);

console.log(h1.classList);
h1.classList.add("text-bold");
console.log(h1.classList);

h1.innerHTML = "";
h1.innerHTML =`<a href="/Hari_1/index.html">CV Saya</a>`;

let names = ["admin", 2, true, 3.0];
console.log(names);
names.push("tambah");
console.log(names);
names.pop();
console.log(names);
names.shift();
console.log(names);
names.unshift("tambah depan");
console.log(names);

let user = {
    name : "admin",
    age : 21,
    "Add-ress" : "jakarta"
};

let user2 = {
    name : "user",
    age : 23
};

let user3 = {
    name : "admin",
    age : 22
};

console.log(user["Add-ress"]);
console.log(user.age);

// arrow function
const fn1 = () =>{console.log("fn1");}
const fn2 = _ =>{console.log("fn2");}
const fn3 = params =>{
    console.log(params);
}
const fn4 = (param1, param2, cb) =>{
    console.log("fn4");
    const total = param1 + param2;
    cb(total);
}

fn4(3, 4, fn3); //callBack Function
// h1.addEventListener('click', () =>{
//     document.href = 
// });