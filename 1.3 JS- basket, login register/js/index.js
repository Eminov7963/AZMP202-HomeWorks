import { carsData } from "./data.js";
import { getDatalocalstorage, setDatalocalstorage } from "./helper.js";
const row = document.querySelector(".row");
// const basket_count = document.querySelector("#count");
const logout = document.querySelector(".logout");
const register = document.querySelector(".register");
const login = document.querySelector(".login");
const userName = document.querySelector(".user-name");




const users = getDatalocalstorage("users") || []
const user = users.find((u) => u.Islogged);

if(user){
  userName.textContent = user.email;
}
else{
  userName.textContent = "User";
}

window.addEventListener("load",function(){
  if (user) {
    logout.classList.replace("d-none","d-block")
    register.classList.replace("d-inline","d-none")
    login.classList.replace("d-inline","d-none")
  }
  else{
        logout.classList.replace("d-block", "d-none");
        register.classList.replace("d-none", "d-inline");
        login.classList.replace("d-none", "d-inline");
  }
})

logout.addEventListener("click",function(){
  user.Islogged = false;
  setDatalocalstorage("users", users);

  Swal.fire({
    position: "center",
    icon: "success",
    title: "Loged Out",
    showConfirmButton: false,
    timer: 1500,
  }).then(() => {
    window.location.replace("login.html");
  });
})

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
      const allBasketbtns = document.querySelectorAll(".add_basket");
      allBasketbtns.forEach((btn) => {
        btn.addEventListener("click", function () {
          const pid = this.getAttribute("id");
          if (user) {
            addToBasket(pid);
          } else {
            Swal.fire({
              position: "center",
              icon: "error",
              title: "Hesabınız yoxdur",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => {
              window.location.replace("login.html");
            });
          }
        });
      });
    }
  
    function addToBasket(id){
      const find = user.basket.find((q)=> q.productId == id)
      console.log(find);
      if (!find) {
       user.basket.push({ productId: id, count: 1 }); 
      }else{
        find.count++;
      }
      BasketCount();
      setDatalocalstorage("users", users);
      
      // console.log(user);
      
    }

    function BasketCount (){
      const basketcount = document.querySelector("#count")
      let count = user.basket.reduce((sum, item)=> sum + item.count,0);
      basketcount.textContent = count;
    }



Boxs(carsData);