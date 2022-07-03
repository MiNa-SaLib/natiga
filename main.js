// document.write("<h1>mina</h1>");
// window.onload=function(){
//     document.querySelector("h1").style.color="blue"
//     docoment.querySelector("h1").style.fontsize='60px'
// }

// window.alert("hello from eng/MINa");

/*var user="Mina", age=20;
console.log(user);
console.log(age);
console.log(typeof user);
console.log(typeof age);
console.log(typeof {user,age});*/

// let a=2;
// console.log(a);
//document.write('elzero web"shcool"\n');
// document.write("elzero web\'shcool\'\n");
// document.write("elzero\n web\nshcool\n");
// document.write("elzero\
//  web\
//  shcool\n");
/*let cardTitle = "Elzero",
  cardDes = "Elzero web school",
  caedDate = "25/10";
let card = `
<div>
    <h3>${cardTitle}</h3>
    <P>${cardDes}</p>
    <span>${caedDate}</span>
</div>
<div>
    <h3>${cardTitle}</h3>
    <P>${cardDes}</p>
    <span>${caedDate}</span>
</div>
<div>
    <h3>${cardTitle}</h3>
    <P>${cardDes}</p>
    <span>${caedDate}</span>
</div>
<div>
    <h3>${cardTitle}</h3>
    <P>${cardDes}</p>
    <span>${caedDate}</span>
</div>
`;

document.write(card);
// document.write(card);
// document.write(card);
// document.write(card);

let a = false;
console.log(-a);*/

/*let a = 10;
let b = "20";
let c = 80;
console.log(++a + +b++ + +c++ - +a++);
console.log(++a);
console.log(-a++);
console.log(a);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);*/

/*
console.log((100.6545).toFixed(2));
console.log(parseInt("100.9"));
console.log(parseFloat("100.8"));
console.log(parseFloat("100.8"));
console.log(Math.pow(2, 2));

let a = 100.56789;
a = a.toFixed(3);
document.write(a);
*/

/*console.log(Math.ceil(2.2)); //3
console.log(Math.ceil(-2.2)); //-2
console.log(Math.floor(2.9)); //2
console.log(Math.floor(-2.2)); //-3
console.log(Math.round(2.2)); //2
console.log(Math.round(2.6)); //2
console.log(Math.pow(2, 2)); //4
console.log(Math.trunc(2.9)); //2


let a = 5,
  b = 9;
console.log(a > b);


console.log((Math.random() * 10).toFixed(3)); //?
console.log(Math.max(2, 3, 4)); //4
console.log(Math.min(2, 3, 4)); //2
*/
/*let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;
console.log(parseInt(Math.min(a, b, c, d)));
console.log(Math.pow(a, parseInt(d)));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(parseInt(d));
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2).toString());
console.log(Math.ceil(Math.trunc(b) / Math.ceil(d)));*/

/*let c = "التانية";
if (c === "التانية") {
  console.log("الثالثة");
}*/

const tex1 = document.getElementById("text1");
const btn = document.getElementById("sub");
const res = document.getElementById("result");
let level = document.getElementById("text3");

function writename() {
  res.innerHTML = `برافوو عليك<br><br>الطالب ${tex1.value} ناجح <br><br>
  الف مبروك يسطا
  عااااش `;
}
btn.addEventListener("click", writename);
