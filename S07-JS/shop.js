const products = [
  {
    id: 1,
    name: "صندلی مینیمال",
    category: "مبلمان",
    price: 1299000,
    inStock: false,
    tags: ["مدرن", "چوبی", "اتاق نشیمن"],
    rating: 4.5,
    imageUrl: "https://picsum.photos/400/300?random=1",
  },
  {
    id: 2,
    name: "هدفون بی‌سیم",
    category: "الکترونیکی",
    price: 895000,
    inStock: false,
    tags: ["صوتی", "بلوتوث", "قابل حمل"],
    rating: 4.7,
    imageUrl: "https://picsum.photos/400/300?random=2",
  },
  {
    id: 3,
    name: "بطری آب سازگار با محیط زیست",
    category: "لوازم سفر",
    price: 240000,
    inStock: true,
    tags: ["پایداری", "بطری", "سفر"],
    rating: 4.2,
    imageUrl: "https://picsum.photos/400/300?random=3",
  },
  {
    id: 4,
    name: "میز ایستاده",
    category: "مبلمان",
    price: 3990000,
    inStock: true,
    tags: ["ارگونومیک", "اداری", "قابل تنظیم"],
    rating: 4.8,
    imageUrl: "https://picsum.photos/400/300?random=4",
  },
  {
    id: 5,
    name: "لامپ هوشمند LED",
    category: "الکترونیکی",
    price: 199000,
    inStock: true,
    tags: ["روشنایی", "هوشمند", "وای‌فای"],
    rating: 4.0,
    imageUrl: "https://picsum.photos/400/300?random=5",
  },
  {
    id: 6,
    name: "کوله پشتی لپ‌تاپ",
    category: "لوازم سفر",
    price: 650000,
    inStock: true,
    tags: ["ضد آب", "لپ‌تاپ", "کاری"],
    rating: 4.6,
    imageUrl: "https://picsum.photos/400/300?random=6",
  },
  {
    id: 7,
    name: "گلدان سرامیکی",
    category: "دکوراسیون",
    price: 85000,
    inStock: true,
    tags: ["سرامیک", "گیاه", "دکور"],
    rating: 4.3,
    imageUrl: "https://picsum.photos/400/300?random=7",
  },
  {
    id: 8,
    name: "ساعت هوشمند",
    category: "الکترونیکی",
    price: 1450000,
    inStock: false,
    tags: ["فیتنس", "هوشمند", "سلامت"],
    rating: 4.4,
    imageUrl: "https://picsum.photos/400/300?random=8",
  },
  {
    id: 9,
    name: "آینه دیواری مدرن",
    category: "دکوراسیون",
    price: 320000,
    inStock: true,
    tags: ["آینه", "دیواری", "مدرن"],
    rating: 4.1,
    imageUrl: "https://picsum.photos/400/300?random=9",
  },
  {
    id: 10,
    name: "چای ساز برقی",
    category: "آشپزخانه",
    price: 775000,
    inStock: true,
    tags: ["چای", "برقی", "خانگی"],
    rating: 4.5,
    imageUrl: "https://picsum.photos/400/300?random=10",
  },
  {
    id: 11,
    name: "کیبورد مکانیکی",
    category: "الکترونیکی",
    price: 980000,
    inStock: false,
    tags: ["گیمینگ", "مکانیکی", "RGB"],
    rating: 4.7,
    imageUrl: "https://picsum.photos/400/300?random=11",
  },
  {
    id: 12,
    name: "قالیچه یوگا",
    category: "ورزشی",
    price: 180000,
    inStock: true,
    tags: ["یوگا", "ورزش", "پیلاتس"],
    rating: 4.2,
    imageUrl: "https://picsum.photos/400/300?random=12",
  },
  {
    id: 13,
    name: "عینک آفتابی پولاریزه",
    category: "اکسسوری",
    price: 425000,
    inStock: true,
    tags: ["آفتابی", "پولاریزه", "UV"],
    rating: 4.6,
    imageUrl: "https://picsum.photos/400/300?random=13",
  },
  {
    id: 14,
    name: "پاوربانک سریع",
    category: "الکترونیکی",
    price: 290000,
    inStock: true,
    tags: ["شارژ", "سریع", "قابل حمل"],
    rating: 4.3,
    imageUrl: "https://picsum.photos/400/300?random=14",
  },
  {
    id: 15,
    name: "فنجان قهوه دست‌ساز",
    category: "آشپزخانه",
    price: 125000,
    inStock: false,
    tags: ["سرامیک", "قهوه", "دست‌ساز"],
    rating: 4.8,
    imageUrl: "https://picsum.photos/400/300?random=15",
  },
  {
    id: 16,
    name: "ماوس گیمینگ",
    category: "الکترونیکی",
    price: 350000,
    inStock: true,
    tags: ["گیمینگ", "DPI", "ارگونومیک"],
    rating: 4.4,
    imageUrl: "https://picsum.photos/400/300?random=16",
  },
  {
    id: 17,
    name: "تشک تمرین",
    category: "ورزشی",
    price: 220000,
    inStock: true,
    tags: ["تناسب اندام", "تمرین", "خانگی"],
    rating: 4.1,
    imageUrl: "https://picsum.photos/400/300?random=17",
  },
  {
    id: 18,
    name: "چراغ مطالعه LED",
    category: "الکترونیکی",
    price: 165000,
    inStock: true,
    tags: ["مطالعه", "قابل تنظیم", "چشم"],
    rating: 4.3,
    imageUrl: "https://picsum.photos/400/300?random=18",
  },
  {
    id: 19,
    name: "کیف دستی چرمی",
    category: "اکسسوری",
    price: 890000,
    inStock: false,
    tags: ["چرم", "زنانه", "مجلسی"],
    rating: 4.7,
    imageUrl: "https://picsum.photos/400/300?random=19",
  },
  {
    id: 20,
    name: "پلنت باکس چوبی",
    category: "دکوراسیون",
    price: 135000,
    inStock: true,
    tags: ["چوب", "گیاه", "طبیعی"],
    rating: 4.0,
    imageUrl: "https://picsum.photos/400/300?random=20",
  },
  {
    id: 21,
    name: "اسپیکر بلوتوث",
    category: "الکترونیکی",
    price: 550000,
    inStock: true,
    tags: ["صوتی", "بلوتوث", "قابل حمل"],
    rating: 4.5,
    imageUrl: "https://picsum.photos/400/300?random=21",
  },
  {
    id: 22,
    name: "شمع معطر",
    category: "دکوراسیون",
    price: 75000,
    inStock: true,
    tags: ["معطر", "رومانتیک", "شمع"],
    rating: 4.2,
    imageUrl: "https://picsum.photos/400/300?random=22",
  },
  {
    id: 23,
    name: "کمربند چرمی",
    category: "اکسسوری",
    price: 280000,
    inStock: false,
    tags: ["چرم", "مردانه", "کلاسیک"],
    rating: 4.6,
    imageUrl: "https://picsum.photos/400/300?random=23",
  },
  {
    id: 24,
    name: "تابه سرامیکی",
    category: "آشپزخانه",
    price: 320000,
    inStock: true,
    tags: ["سرامیک", "پخت", "آشپزی"],
    rating: 4.4,
    imageUrl: "https://picsum.photos/400/300?random=24",
  },
  {
    id: 25,
    name: "دمبل قابل تنظیم",
    category: "ورزشی",
    price: 1200000,
    inStock: true,
    tags: ["بدنسازی", "تناسب اندام", "خانگی"],
    rating: 4.7,
    imageUrl: "https://picsum.photos/400/300?random=25",
  },
];

const product_list = document.querySelector(".products-grid");

products.forEach(function (product) {
  // tag handler
  let tags = "";
  product.tags.forEach(function (tag) {
    tags = tags + `<span class="tag">${tag}</span>`;
  });

  // stock handler
  let stock = "";
  if (!product.inStock) {
    stock = `<span class="out-stock">(ناموجود)</span>`;
  }

  const product_card = `
    <div class="card">
        <div class="img-wrap">
          <img
            src="${product.imageUrl}"
            alt="${product.name}"
          />
        </div>
        <div class="info">
          <div class="name">
            ${product.name}
          </div>
          <div class="category">
            ${product.category}
          </div>
          <div class="price">
            ${product.price} <span style="font-size: 0.87em; color: #888">تومان</span>
            ${stock}
          </div>
          <div class="tags">
            ${tags}
          </div>
          <span class="rating">
            ${product.rating}
            ⭐
          </span>
        </div>
      </div>
    `;
  product_list.insertAdjacentHTML("beforeend", product_card);
});
