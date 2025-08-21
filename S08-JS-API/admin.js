const input_title = document.querySelector("input[name=title]");
const input_price = document.querySelector("input[name=price]");
const input_description = document.querySelector("textarea");
const input_category = document.querySelector("select[name=category]");
const input_image = document.querySelector("input[name=image]");
const input_delete_id = document.querySelector("input[name=delete_id]");
const addBtn = document.getElementById("addProductBtn");
const deleteBtn = document.getElementById("deleteProductBtn");

//! CREATE
async function addProduct(product) {
  const response = await fetch("https://fakestoreapi.com/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  const result = await response.json();
  console.log(result);
}

function buildProductObject() {
  return {
    title: input_title.value,
    price: input_price.value,
    description: input_description.value,
    category: input_category.value,
    image: input_image.value,
  };
}

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const product = buildProductObject();
  addProduct(product);
});

//! DELETE
async function deleteProduct(id) {
  if (!id) {
    console.log("لطفا id محصول مورد نظر را انتخاب کنید.");
    return;
  }
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
    });
    let result = await response.json();
    if (!result) result = "محصول مورد نظر یافت نشد";
    console.log(result);
  } catch (error) {
    console.log("حدف ناموفق", error);
  }
}
deleteBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const product_id = input_delete_id.value;
  deleteProduct(product_id);
});
