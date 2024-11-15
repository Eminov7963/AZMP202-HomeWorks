import { products } from "./data.js";
const submit = document.querySelector("#sub_btn");
const error_exit = document.querySelector("#error_btn");
const correct_exit = document.querySelector("#correct_btn");
const input_search = document.querySelector("#input_search");
const asc_btn = document.querySelector("#asc");
const desc_btn = document.querySelector("#desc");
const def = document.querySelector("#def");

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const description = document.getElementById("description").value;
  const img = document.getElementById("img").value;

  if (title == "" || price == "" || description == "" || img == "") {
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementById("correct").style.display = "block";
  }
});
error_exit.addEventListener("click", function () {
  document.getElementById("error").style.display = "none";
});
correct_exit.addEventListener("click", function () {
  document.getElementById("correct").style.display = "none";
});

const tbody = document.querySelector("tbody");
function drawTable(array) {
  tbody.innerHTML = "";
  array.forEach((product) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
            <td><img src="${product.image}" width="100"/></td>
            <td>${product.id}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.description}</td>
            <td><i class="fa-solid fa-trash-can text-danger delete-btn" data-id=${product.id}></i></td>
        `;

    tbody.appendChild(trElem);
  });
}
drawTable(products);

input_search.addEventListener("input", function (event) {
  const filtered = products.filter((element) => {
    return element.title
      .toLocaleLowerCase()
      .includes(event.target.value.trim());
  });
  drawTable(filtered);
});


asc_btn.addEventListener("click", function () {
  const sorted = products.toSorted((a, b) => a.price - b.price);
  drawTable(sorted);
});
desc_btn.addEventListener("click", function (){
  const filtered_desc = products.toSorted((a, b) => b.price - a.price);
  drawTable(filtered_desc);
})
def.addEventListener("click", function () {
  drawTable(products)
});
