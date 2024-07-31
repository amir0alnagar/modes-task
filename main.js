const body = document.getElementsByTagName("body");

let btn1 = document.createElement("button");
btn1.innerHTML = "light mode";
document.body.appendChild(btn1);

let btn2 = document.createElement("button");
btn2.innerHTML = "dark mode";
document.body.appendChild(btn2);

let txt = document.createElement("h1");
txt.innerHTML = "Hello World";
document.body.appendChild(txt);
txt.style.color = "red";

btn1.onclick = function () {
  lightMode();
};
function lightMode() {
  body[0].style.backgroundColor = "white";
  txt.style.color = "red";
}

btn2.onclick = function () {
  darkMode();
};
function darkMode() {
  body[0].style.backgroundColor = "black";
  txt.style.color = "white";
}
console.log(body)