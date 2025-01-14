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
    <>
      <section className={styles.mainsection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h6>s Visa without within hoursIm</h6>
            <h1>Immigrations & Visa Consultation</h1>
            <button className={styles.consultancy}>Book Consultancy</button>
          </div>
          <div className={styles.right}>
            <img src="https://preview.colorlib.com/theme/immigration/img/header-img.png" alt="" />
          </div>
        </div>
      </section>

      <section className={styles.products}>
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
      </section>
      <section className={styles.cards}>
        <div className={styles.top}>
          <h1>Requirements to be Immigrants</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={styles.bottom}>
          <div className={styles.boxs}>
            <img src="https://preview.colorlib.com/theme/immigration/img/s1.jpg" alt="" />
            <div>
            <div className={styles.country}>United States</div>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <div className={styles.boxs}>
            <img src="https://preview.colorlib.com/theme/immigration/img/s2.jpg" alt="" />
            <div className={styles.country}>United States</div>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className={styles.boxs}>
            <img src="https://preview.colorlib.com/theme/immigration/img/s3.jpg" alt="" />
            <div className={styles.country}>United States</div>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
          </div>
          <div className={styles.boxs}>
            <img src="https://preview.colorlib.com/theme/immigration/img/s4.jpg" alt="" />
            <div className={styles.country}>United States</div>
            <h3>Addiction When Gambling Becomes A Problem</h3>
            <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
