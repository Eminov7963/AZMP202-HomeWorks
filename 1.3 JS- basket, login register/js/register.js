import { getDatalocalstorage, setDatalocalstorage } from "./helper.js";

const sub_form = document.querySelector("form");
const email_input = document.querySelector("#email");
const password = document.querySelector("#password");

let users = getDatalocalstorage("users") || [];
sub_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const emailValue = email_input.value.trim();
  const passwordValue = password.value.trim();
  const find_account = users.find((element)=>element.email === emailValue || element.password === passwordValue);
  if (!find_account) {
      const user = {
        id: Date.now(),
        email: emailValue,
        password: passwordValue,
        logged: false,
        basket: []
      };
      users.push(user);
      setDatalocalstorage("users", users);
      resetform();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Hsabınız yaradıldı, Təbriklər!!",
        showConfirmButton: false,
        timer: 1500,
      }).then(()=>{
        window.location.replace("login.html");
      });
      
      
      
  }
  else{
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Daxil etdiyiniz email ve yaxud parol artiq istifade olunub!!",
      showConfirmButton: false,
      timer: 1500,
    });
  }
});

function resetform() {
  sub_form.reset();
}
