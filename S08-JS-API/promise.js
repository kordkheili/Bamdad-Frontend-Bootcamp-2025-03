// fetch("https://fakestoreapi.com/products")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//! sync
// console.log("salam");
// alert("test...");
// console.log("khodafez");

//! async
// console.log("salam");
// setTimeout(function () {
//   console.log("test...");
// }, 3000);
// console.log("khodafez");

//! Promise
// let myPromise = new Promise(function (resolve, reject) {
//   let result = true;
//   if (result) {
//     resolve("دمت گرم کار به خوبی انجام شد");
//   } else {
//     reject("متاسفم😟");
//   }
// });

// myPromise
//   .then(function (result) {
//     //? resolve
//     console.log(result);
//   })
//   .catch(function (result) {
//     //? reject
//     console.log(result);
//   })
//   .finally(function () {
//     //? resolve || reject (both)
//     console.log("اجرای این پرامیس به اتمام رسید");
//   });

//! Promise Example 1 (Pizza Delivery)
// let orderPizza = new Promise(function (resolve, reject) {
//   console.log("promise started...");
//   setTimeout(function () {
//     const num1 = Math.random(); // 0 → 1
//     if (num1 > 0.5) {
//       resolve("😁");
//     } else {
//       reject("😟");
//     }
//   }, 1000);
// });
// orderPizza
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (result) {
//     console.log(result);
//   });

// console.log("wait for pizza...");

//! Promise Example 2
// شبیه‌سازی درخواست به سرور
function getUserFromServer(userId) {
  return new Promise((resolve, reject) => {
    console.log("در حال گرفتن اطلاعات کاربر از سرور...");

    setTimeout(() => {
      if (userId === 1) {
        resolve({
          id: 1,
          name: "علی",
          age: 25,
        });
      } else {
        reject("کاربر پیدا نشد ❌");
      }
    }, 2000); // شبیه‌سازی تاخیر سرور
  });
}

// // استفاده از Promise
getUserFromServer(2)
  .then((user) => {
    console.log("اطلاعات کاربر:", user);
  })
  .catch((error) => {
    console.error("خطا:", error);
  })
  .finally(() => {
    console.log("درخواست به سرور پایان یافت ✅");
  });

// ! Promise Example 3 (using await)
function getUserFromServer(userId) {
  return new Promise((resolve, reject) => {
    console.log("در حال گرفتن اطلاعات کاربر از سرور...");

    setTimeout(() => {
      if (userId === 1) {
        resolve({
          id: 1,
          name: "علی",
          age: 25,
        });
      } else {
        reject("کاربر پیدا نشد ❌");
      }
    }, 2000);
  });
}

// استفاده از async/await
async function showUserInfo() {
  try {
    const user = await getUserFromServer(2); // اینجا کد می‌ایسته تا جواب بیاد
    console.log("اطلاعات کاربر:", user);
  } catch (error) {
    console.error("خطا:", error);
  }
}

showUserInfo();
