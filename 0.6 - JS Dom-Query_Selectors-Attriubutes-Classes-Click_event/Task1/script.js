const plyus = document.querySelector(".plyus");
const minus = document.querySelector(".minus");
const apply = document.querySelector(".button button");
const colorInput = document.querySelector(".input input");
const p_txt = document.querySelectorAll(".p-text p");
let fontsize = 18;
plyus.addEventListener("click", function() {
    fontsize += 2;
    p_txt.forEach(element => {
        element.style.fontSize = fontsize + "px";      
    }); 
});


minus.addEventListener("click", function () {
    fontsize -= 2;
    p_txt.forEach(element => {
        element.style.fontSize = fontsize + "px";
    });
});

apply.addEventListener("click", function (){
    const color = colorInput.value;
    p_txt.forEach((element)=>{
        element.style.color = color;
    })
})