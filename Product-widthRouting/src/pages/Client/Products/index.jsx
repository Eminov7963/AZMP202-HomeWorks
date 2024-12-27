import React, { useEffect, useState } from 'react'
import controller from '../../../services/helper'
import { endpoints } from '../../../services/costants'

const Products = () => {
  const [products, setData] = useState([])
  const Getproducts = async () => {
    try {
      const data = await controller.getAllData(endpoints.products);
      setData(data);
    } catch (error) {
      console.log(error);
      
    }  
  };
  useEffect(()=>{
    Getproducts;
  },[])
  return (
    <div>
      {products.length > 0 &&
        products.map((q) => <h1 key={q.id}>{q.title}</h1>)}
    </div>
  );
}

export default Products
