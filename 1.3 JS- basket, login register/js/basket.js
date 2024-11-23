import { carsData } from "./data.js";
import {
  calcBasketCount,
  getDatalocalstorage,
  setDatalocalstorage,
  showUserInfo,
} from "./helper.js";


const tBody = document.querySelector("tbody");
const clearAllBtn = document.querySelector(".clear-all");
const totalPrice = document.querySelector(".total-price");
const users = getDatalocalstorage("users") || [];
const user = users.find((u) => u.Islogged);


function drawTable(basketArr, productsArr) {
  tBody.innerHTML = "";
  basketArr.forEach((item) => {
    console.log(item);

    const product = productsArr.find((p) => p.id == item.productId);

    const trElem = document.createElement("tr");
    trElem.innerHTML = `
                      <td><img src="${product.image}" id="basket_img" width="100"/></td>
                      <td>${product.name}</td>
                      <td>$ ${product.price}</td>

                       <td><button class="btn btn-outline-success decrement" data-id="${
                         product.id
                       }"><i class="fa-solid fa-minus"></i></button></td>
                  
                      <td>${item.count}</td>
                     
                          <td><button class="btn btn-outline-success increment" data-id="${
                            product.id
                          }"><i class="fa-solid fa-plus"></i></button></td>
                          <td>$ ${(product.price * item.count).toFixed(2)}</td>
                      <td><button class="btn btn-outline-danger delete" data-id="${
                        product.id
                      }"><i class="fa-solid fa-xmark"></i></button></td>
        `;

    tBody.append(trElem);
  });
  const allDeleteBtns = document.querySelectorAll(".delete");
  const allIncrementBtns = document.querySelectorAll(".increment");
  const allDecrementBtns = document.querySelectorAll(".decrement");
  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const pId = this.getAttribute("data-id");

      Swal.fire({
        title: "Are you sure to delete?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          deleteBasketItem(pId, this);
          calcBasketCount(user);

          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
    });
  });

  allIncrementBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const pId = this.getAttribute("data-id");
      const found = user.basket.find((q) => q.productId == pId);
      if (found) {
        console.log(this.parentElement);

        found.count++;
        updateBasket();
      }
    });
  });


  allDecrementBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const pId = this.getAttribute("data-id");
      const found = user.basket.find((q) => q.productId == pId);
      if (found) {
        found.count--;

        if (found.count == 0) {


          const idx = user.basket.findIndex((q) => q.productId == pId);
          user.basket.splice(idx, 1);
          showTable();

          
        }
        

        updateBasket();
      }
    });
  });
}

function updateBasket() {
  setDatalocalstorage("users", users);
  calculateTotalPrice(carsData);
  calcBasketCount(user);
  drawTable(user.basket, carsData);
}

function deleteBasketItem(productId, btn) {
  const idx = user.basket.findIndex((q) => q.productId == productId);

  user.basket.splice(idx, 1);

  btn.closest("tr").remove();
  setDatalocalstorage("users", users);
  calculateTotalPrice(carsData);
  showTable();
}

function calculateTotalPrice(productsArr) {
  const total = user.basket.reduce((sum, item) => {
    const product = productsArr.find((p) => p.id == item.productId);
    return sum + item.count * product.price;
  }, 0);

  totalPrice.textContent = total.toFixed(2);
}
function showTable() {
  const basketInfo = document.querySelector(".basket-info");
  const basketTable = document.querySelector(".basket-table");
  if (user && user.basket.length > 0) {
    basketInfo.classList.add("d-none");
    basketInfo.classList.remove("d-block");
    basketTable.classList.add("d-block");
    basketTable.classList.remove("d-none");
  } else {
    basketInfo.classList.remove("d-none");
    basketInfo.classList.add("d-block");
    basketTable.classList.add("d-none");
    basketTable.classList.remove("d-block");
  }
}

clearAllBtn.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure to delete all?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      user.basket.length = 0;
      setDatalocalstorage("users", users);
      showTable();
      calcBasketCount(user);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
        timer: 1500,
      });
    }
  });
});

window.addEventListener("DOMContentLoaded", function () {
  if (user) {
    showUserInfo(user, users);
    calculateTotalPrice(carsData);
    calcBasketCount(user);
    drawTable(user.basket, carsData);
    showTable();
  } else {
    Swal.fire({
      position: "top-end",
      icon: "error",
      title: "Login olun!",
      showConfirmButton: false,
      timer: 1500,
    }).then(() => {
      window.location.replace("login.html");
    });
  }
});































