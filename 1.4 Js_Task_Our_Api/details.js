import { BASE_URL } from "./data.js";

window.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get("id");

  if (id) {
    getProductDetails(id);
  } else {
    console.error("No product ID found in URL");
  }
});

function getProductDetails(id) {
  fetch(`${BASE_URL}/products/${id}`)
    .then((response) => response.json())
    .then((data) => {
      displayProductDetails(data);
    })
    .catch((err) => {
      console.error("Error fetching product details:", err);
    });
}

function displayProductDetails(product) {
  const productCard = document.querySelector(".product-card");
  const img = productCard.querySelector(".product-img-top");
  const title = productCard.querySelector(".product-title");
  const description = productCard.querySelector(".product-description");
  const category = productCard.querySelector(".product-category");
  const price = productCard.querySelector(".product-price");
  const rating = productCard.querySelector(".product-rating");

  img.src = product.image;
  img.alt = product.title;
  title.textContent = product.title;
  description.textContent = product.description;
  category.innerHTML = `<strong>Category:</strong> ${product.category}`;
  price.innerHTML = `<strong>Price:</strong> $${product.price}`;
  rating.innerHTML = `<strong>Rating:</strong> ${product.rating.rate} (${product.rating.count} reviews)`;

  document.querySelector(".spinner").style.display = "none";
}
