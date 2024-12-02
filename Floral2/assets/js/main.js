import { DataID } from "./constant.js";
const product_cards = document.getElementById("product-cards");

function FechData(products) {
  fetch(`${DataID}/${products}`, { method: "GET" })
    .then((promise) => promise.json())
    .then((data) => MadeCards(data))
    .catch((err) => console.log(err));
}

FechData("flowers");

function MadeCards(arr) {
  product_cards.innerHTML = ""; 
  arr.forEach((element) => {
    product_cards.innerHTML += `
          <div class="col-3">
              <img src="${element.image}" alt="">
              <h1>${element.name}</h1>
              <span>Price: ${element.price} $</span>
              <div class="buttons">
                <button class="delete" data_id=${element.id}>Delete</button>
                <button class="edit" data-bs-toggle="modal" data-bs-target="#exampleModal" data_id=${element.id}>Edit</button>
                <a class="detail" href="detail.html?id=${element.id}">Detail</a>
            </div>
          </div>
    `;
  });


  const deleteBtn = document.querySelectorAll(".delete");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      const prodId = this.getAttribute("data_id");
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
          DeleteData("flowers", prodId); 
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
      
    });
  });
}

function DeleteData(endpoint, iD) {
  fetch(`${DataID}/${endpoint}/${iD}`, {
    method: "DELETE",
  })
    .then((res) => {
      if (res.ok) {
        console.log("Delete successful");
        FechData("flowers"); 
      } else {
        console.log("Failed to delete product");
      }
    })
    .catch((err) => console.log("Error:", err));
}
