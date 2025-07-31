function sayHello(firstname) {
  console.log(`hello ${firstname}`);
  //   console.log(firstname);
}
sayHello("alireza");

// function sum(a, b) {
//   const result = a + b;
//   return result;
// }
// const num1 = sum(1, 2);
// console.log(" مجموع اعداد می شود", num1);

// sum("ali", "reza");

const array1 = ["alireza"];
array1.push("armin");
console.log(array1);
array1.push([2, 4, 6, 8]);

console.log(array1[2][3]);

const car = {
  brand: "benz",
  model: "c200",
  color: "white",
  year: 2012,
  start: function (test) {
    console.log(`${this.brand} ${this.model} started...🏎️`);
    console.log(test);
  },
};
console.log(car);
console.log(car.brand);
console.log(car.model);
console.log(car["brand"]);
console.log(car["model"]);
car.start("helloooow!");

car.options = "full option";
car.stop = function () {
  console.log("stop!");
};
car.stop();

/*! DOCUMENT OBJECT MODEL */
// window.alert("test");
window.console.log("test");
console.log(window);
console.log(window.document);
console.log(window.document.head);
console.log(window.document.body);

//getElementById
const firstbox = document.getElementById("first-box");
console.log(firstbox);

//querySelector
const firstbox_with_class = document.querySelector(".box");
console.log(firstbox_with_class);

const firstbox_with_id = document.querySelector("#first-box");
console.log(firstbox_with_id);

//querySelectorAll → return array
const allboxes = document.querySelectorAll(".box");
console.log(allboxes);

const bob = document.querySelector("#students-table .student-row:nth-child(2) td:first-child");
console.log(bob);
console.log(bob.innerText);
bob.innerText = "alireza";
// bob.remove();
bob.style.color = "red";
bob.style.backgroundColor = "#000";

const box = document.querySelector(".child-box.box.green");
console.log(box);
console.log(box.innerText);
console.log(box.innerHTML);
box.innerHTML = "<h1>salam</h1>";
// box.innerText = "<h1>salam</h1>";

const contact = document.querySelector(".nav-item[data-page=contact]");
console.log(contact);
const shop = `<a href="#" class="nav-item" data-page="shop">Shop</a>`;
contact.insertAdjacentHTML("afterend", shop);
contact.insertAdjacentHTML("beforebegin", shop);
