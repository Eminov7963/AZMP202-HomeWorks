const detailId = new URLSearchParams(window.location.search).get("id")


function productDetails(id) {
    fetch(`http://localhost:3000/product/${id}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        drawCards(data)
    })
    .catch((err)=>{
        console.log(err);
        
    })
}

function  drawCards(product) {
    const rowCards = document.querySelector('.row')
    rowCards.innerHTML = `
    <div class="col-6 col-m-6">
                    <img src="${product.image}" alt="">
                </div>
                <div class="col-6 col-m-6">
                <h2>Title : ${product.title}</h2> 
                   <h5>Category : ${product.category}</h5> 
                   <p>Descprion : ${product.description}</p>
                   <p>Price : ${product.price}</p> 
                   <button class="back"> Go Back</button>
                </div>
    `

    const goBackBtn = document.querySelector('.back')
    goBackBtn.addEventListener('click',function(){
        window.history.back()
    })
}

if (detailId) {
    productDetails(detailId)
}



















