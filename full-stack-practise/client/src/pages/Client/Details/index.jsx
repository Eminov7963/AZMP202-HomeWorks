import React from "react";
import { useParams } from "react-router-dom"; 
import { useGetProductsByIdQuery } from "../../../redux/services/products";
import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {
  const { id } = useParams(); 
  const { data, isLoading, isError } = useGetProductsByIdQuery(id); 

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  const product = data?.data; 

  return (
    <div className={styles.productDetailsContainer}>
      {product ? (
        <>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          
        </>
      ) : (
        <div>Product not found</div>
      )}
    </div>
  );
};

export default ProductDetails;
