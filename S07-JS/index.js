const username_input = document.querySelector("input[name=username]");
const password_input = document.querySelector("input[name=password]");
const register_btn = document.querySelector(".register-btn");
const z = 500;
// username_input.remove();
console.log(username_input);
console.log(password_input);

console.log(username_input.value);
console.log(password_input.value);
console.log(register_btn);
const y = 100;
function register_handler() {
  //   console.log("user clicked on register btn");
  console.log(username_input.value);
  console.log(password_input.value);
  const x = 200;
  console.log(y);
}
// console.log(x);

function enter_handler() {
  //   console.log("user pressed a key");
  console.log(username_input.value);
}

register_btn.addEventListener("click", register_handler);
window.addEventListener("keyup", enter_handler);

password_input.addEventListener("focus", function () {
  console.log("salam");
});

document.querySelector("p").addEventListener("drag", function () {
  console.log("copy nakon badbakht");
});

setTimeout(function () {
  document.body.style.backgroundColor = "#777";
}, 2000);

setInterval(function () {
  console.log(new Date());
}, 1000);

// method1 (classic function)
function login_handler() {}

//method2 (arrow function)
// const login_handler = () => {};
