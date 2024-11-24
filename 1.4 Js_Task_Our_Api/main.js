import { BASE_URL } from "./data.js";

function getAllData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`)
    .then((response) => response.json())
    .then((data) => {
      const productContainer = document.getElementById("product-container");
      productContainer.innerHTML = "";
      data.forEach((product) => {
        productContainer.innerHTML += createCard(product);
      });
      attachEventListeners();
    })
    .catch((err) => {
      console.error("Error fetching data:", err);
    });
}

function createCard(product) {
  return `
    <div class="product-card" style="width: 18rem; margin-bottom: 20px;">
      <img src="${product.image}" class="product-img-top" alt="${product.title}">
      <div class="product-body">
        <h5 class="product-title">${product.title}</h5>
        <p class="product-description">${product.description}</p>
        <p class="product-category"><strong>Category:</strong> ${product.category}</p>
        <p class="product-price"><strong>Price:</strong> $${product.price}</p>
        <p class="product-rating"><strong>Rating:</strong> ${product.rating.rate} (${product.rating.count} reviews)</p>
        <button class="delete btn btn-outline-danger mt-3" data-id="${product.id}">Delete</button>
        <button class="edit btn btn-outline-success mt-3" data-bs-toggle="modal" data-bs-target="#edit-modal" data-id="${product.id}">Edit</button>
        <a class="btn btn-outline-primary d-flex align-items-center mt-3" href="details.html?id=${product.id}">Details</a>
      </div>
    </div>
  `;
}

function attachEventListeners() {
  const allDelete = document.querySelectorAll(".delete");

  allDelete.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteData("products", id, this);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
            timer: 1000,
          });
        }
      });
    });
  });
}

function deleteData(endpoint, id, button) {
  fetch(`${BASE_URL}/${endpoint}/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.ok) {
        button.closest(".product-card").remove();
      } else {
        console.log("Error deleting item");
      }
    })
    .catch((err) => {
      console.error("Error deleting data:", err);
    });
}

getAllData("products");
