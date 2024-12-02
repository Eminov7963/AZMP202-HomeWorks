import { DataID } from "./constant.js";
const addForm = document.querySelector("#add-form");
const name = document.getElementById("name")
const price = document.getElementById("price")


addForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const customer = {
    name: name.value.trim(),
    image: "./img/b2.jpg",
    price: price.value.trim(),
  };


  fetch(`${DataID}/flowers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((res) => {
      //   console.log(res);
      this.reset();
      window.location.replace("index.html");
    })
    .catch((err) => {
      console.log(err);
    });
});