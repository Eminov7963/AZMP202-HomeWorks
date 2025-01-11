const editId = new URLSearchParams(window.location.search).get("id")

const imgInput = document.querySelector('.img-inpt')
const titleInput = document.querySelector('.title-inpt')
const desText = document.querySelector('#des')
const selCategory = document.querySelector('#category')
const priceInput = document.querySelector('.price-inpt')
const form = document.querySelector('form')


function editinfo(id){
    fetch(`http://localhost:3000/product/${id}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        imgInput.value = data.image
        titleInput.value = data.title
        desText.value = data.description
        selCategory.value = data.category
        priceInput.value = `${data.price}`
    })
    .catch((error)=>{
        console.error(error)
    })
}

form.addEventListener('submit',function(e){
    e.preventDefault()

    const updatedProduct = {
        image : imgInput.value,
        title : titleInput.value,
        description : desText.value,
        category : selCategory.value,
        price : +priceInput.value,
    }

    editedProduct(editId,updatedProduct)
    window.location.href = 'app.html'
})

function editedProduct(id,product) {
    fetch(`http://localhost:3000/product/${id}` , { method: 'PATCH' , headers : {"Content-Type" : "application/json", } , body: JSON.stringify(product)})
    .then((res)=>{
        return res.json()
    })
    .catch((err)=>{
        console.error(err);  
    })
}

if (editId) {
    window.addEventListener('DOMContentLoaded',function(){
        editinfo(editId)
    })
}