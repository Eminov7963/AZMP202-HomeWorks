import { carsData } from "./data.js";
import { getDatalocalstorage, setDatalocalstorage } from "./helper.js";
const row = document.querySelector(".row");
const basket_count = document.querySelector("#count");



const users = getDatalocalstorage("users") || []
const user = users.find((u) => u.isLogged);
function Boxs(arr) {
    row.innerHTML = "";
    arr.forEach((element) => {
        row.innerHTML += `
            <div class="box col-3">
              <div class="head">
                <div class="text1">
                  <h1>${element.name}</h1>
                  <p>${element.type}</p>
                </div>
                <i class="fa-solid fa-heart"></i>
              </div>
              <img src="${element.image}" alt="">
              <div class="info">
                <div class="info1">
                  <i class="fa-solid fa-gas-pump"></i>
                  <p>${element.fuel}</p>
                </div>
                <div class="info2">
                  <i class="fa-solid fa-car"></i>
                  <p>${element.transmission}</p>
                </div>
                <div class="info3">
                  <i class="fa-solid fa-users"></i>
                  <p>${element.passengers}</p>
                </div>
              </div>
              <div class="info_row2">
                <p>${element.price}/day</p>
                <button class="add_basket" id="${element.id}"><i class="fa-solid fa-basket-shopping"></i></button>
              </div>
            </div>
    
    `;
      });
    }

const add_basket = document.querySelectorAll(".add_basket");
add_basket.forEach((btn)=>{
  btn.addEventListener("click", function () {
    const pId = this.getAttribute("id");
    addtobasket(pId)
    
  })
});

function addtobasket(id){
  const found = user.basket.find((q)=>{q.productId == id})
  console.log(found);
  if(!found){
    user.basket.push({ productId: id, count: 1});
  }
  else{
    found.count++;
  }
  setDatalocalstorage("users")
  
}

Boxs(carsData);