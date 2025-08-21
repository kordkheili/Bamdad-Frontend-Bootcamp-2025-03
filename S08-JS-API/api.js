//! get data method 1
// fetch("https://fakestoreapi.com/products")
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//   });

//! get data method 2
async function getProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
}
const products = getProducts().then(function (products) {
  products.forEach(function (product) {
    const productCardTemplate = `
      <div class="w-full sm:w-1/2 lg:w-1/4 px-3 mb-6">
          <div
            class="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
          >
            <!-- Image -->
            <img
              class="w-full h-56 object-contain p-4"
              src="${product.image}"
              alt="${product.title}"
              loading="lazy"
            />

            <!-- Details -->
            <div class="p-5 flex flex-col gap-3 flex-1">
              <h2 class="text-base font-semibold text-gray-800">
                ${product.title}
              </h2>

              <p class="text-sm text-gray-600 line-clamp-3">
                ${product.description}
              </p>

              <span
                class="self-start inline-flex items-center bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-full"
              >
                ${product.category}
              </span>

              <div class="mt-auto flex items-center justify-between">
                <span class="text-xl font-bold text-blue-600">
                  $${product.price}
                </span>
                <div class="flex items-center">
                  <!-- Star -->
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.967 0 1.371 1.24.588 1.81l-2.803 2.036a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.803-2.036a1 1 0 00-1.175 0l-2.803 2.036c-.785.57-1.84-.197-1.54-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.88 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                  <span class="ml-1 text-sm text-gray-700">
                    ${product.rating.rate} (${product.rating.count})
                  </span>
                </div>
              </div>

              <button
                type="button"
                data-id="${product.id}"
                class="addToCart mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
    `;
    productList.insertAdjacentHTML("beforeend", productCardTemplate);
  });
  const addToCartButtons = document.querySelectorAll(".addToCart");
  addToCartButtons.forEach(function (addToCartButton) {
    addToCartButton.addEventListener("click", function (event) {
      // console.log(event.target.dataset.id);
      addToCart(event.target.dataset.id);
    });
  });
});

const productList = document.getElementById("product-list");
const cartItems = document.getElementById("cart-items");

async function getProductById(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return product;
}

async function addToCart(id) {
  const product = await getProductById(id);
  const cartItemTemplate = `
    <div class="flex items-center justify-between bg-gray-50 rounded-xl border p-3">
      <div class="flex items-center gap-3">
        <img
          src="${product.image}"
          alt="${product.title}"
          class="w-12 h-12 object-contain"
        />
        <div>
          <p class="text-sm font-medium text-gray-800 line-clamp-1">
            ${product.title}
          </p>
          <p class="text-xs text-gray-500">
            ${product.price} · Qty: <span class="qty">1</span>
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button class="px-2 py-1 rounded-md border text-sm hover:bg-gray-100 qty-dec" data-id="ID">-</button>
        <button class="px-2 py-1 rounded-md border text-sm hover:bg-gray-100 qty-inc" data-id="ID">+</button>
        <button class="px-2 py-1 rounded-md border text-sm text-red-600 hover:bg-red-50 remove" data-id="ID">
          Remove
        </button>
      </div>
    </div>
  `;
  cartItems.insertAdjacentHTML("beforeend", cartItemTemplate);
}
