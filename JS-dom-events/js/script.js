const submit = document.querySelector("#sub_btn");
const error_exit = document.querySelector("#error_btn");
const correct_exit = document.querySelector("#correct_btn");

submit.addEventListener("click", function(event){
    event.preventDefault();
    const title = document.getElementById("title").value
    const price = document.getElementById("price").value
    const description = document.getElementById("description").value
    const img = document.getElementById("img").value

    if (title == "" || price == "" || description == "" || img == ""){
        document.getElementById("error").style.display = "block"
    }
    else{
        document.getElementById("correct").style.display = "block"
    }
});
error_exit.addEventListener("click", function(){
    document.getElementById("error").style.display = "none"
})
correct_exit.addEventListener("click", function () {
  document.getElementById("correct").style.display = "none";
});