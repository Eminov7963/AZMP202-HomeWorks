import  { useState } from 'react'
import {usePostProductsMutation} from "../../../redux/services/products"
import { useNavigate } from "react-router-dom"; 
const Add = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    oldPrice: "",
    stars: ""
  });
  const [postProduct, responce] = usePostProductsMutation() ;
const navigate = useNavigate()
const handleAddCategory = async (e)=>{
  e.preventDefault()
  try {
    await postProduct(product)
    navigate("/");
  } catch (error) {
    console.log(error)
  }
}
  return (
    <form onSubmit={handleAddCategory}>
      <label htmlFor="name">title: </label>
      <input
        type="text"
        id="title"
        value={product.title}
        onChange={(e) => {
          setProduct({ ...product, title: e.target.value.trim() });
        }}
      />
      <br />
      <br />
      <label htmlFor="desc">Description: </label>
      <input
        type="text"
        id="desc"
        value={product.description}
        onChange={(e) => {
          setProduct({ ...product, description: e.target.value.trim() });
        }}
      />
      <br />
      <br />
      <label htmlFor="price">Price: </label>
      <input
        type="number"
        id="price"
        value={product.price}
        onChange={(e) => {
          setProduct({ ...product, price: e.target.value.trim() });
        }}
      />
      <br />
      <br />
      <label htmlFor="oldPrice">oldPrice: </label>
      <input
        type="number"
        id="oldPrice"
        value={product.oldPrice}
        onChange={(e) => {
          setProduct({ ...product, oldPrice: e.target.value.trim() });
        }}
      />
      <br />
      <br />
      <label htmlFor="stars">stars: </label>
      <input
        type="number"
        id="stars"
        value={product.stars}
        onChange={(e) => {
          setProduct({ ...product, stars: e.target.value.trim() });
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Add
