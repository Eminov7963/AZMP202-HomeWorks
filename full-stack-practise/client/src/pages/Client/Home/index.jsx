import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toggleFavorites } from "../../../redux/features/wishlistSlice";
import {
  useGetAllproductsQuery,
  useDeleteProdutcsByIdMutation,
} from "../../../redux/services/products";
import styles from "./index.module.scss";

const Home = () => {
  const {
    data: productsData,
    isLoading,
    isError,
    refetch,
  } = useGetAllproductsQuery();

  const wishlist = useSelector((state) => state.wishlist);
  const [deleteCategoryById, deleteResponse] = useDeleteProdutcsByIdMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong...</div>;
  }

  const products = productsData?.data || [];

  const handleDelete = async (categoryId) => {
    try {
      await deleteCategoryById(categoryId);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetails = (id) => {
    navigate(`/${id}`);
  };

  return (
    <div className={styles.productsContainer}>
      {products.map((product) => (
        <div key={product._id} className={styles.productCard}>
          
         
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p className={styles.price}>Price: ${product.price}</p>
          <div className={styles.buttonContainer}>
            <button
              className={styles.deleteButton}
              onClick={() => handleDelete(product._id)}
            >
              Delete
            </button>

            <button
              className={styles.detailsButton}
              onClick={() => handleDetails(product._id)}
            >
              Details
            </button>

            <button
              onClick={() => {
                dispatch(toggleFavorites(product));
              }}
            >
              {!wishlist?.items.find((q) => q.id === product._id) ? (
                <FaRegHeart />
              ) : (
                <FaHeart />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
