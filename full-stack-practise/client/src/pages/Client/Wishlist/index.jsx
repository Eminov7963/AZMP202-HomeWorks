import { useDispatch, useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { toggleFavorites } from "../../../redux/features/wishlistSlice";
import styles from './Wishlist.module.scss';

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  console.log(wishlist);
  
  const dispatch = useDispatch();

  return (
    <div className={styles.wishlistContainer}>
      {wishlist.items.length === 0 ? (
        <h2 className={styles.emptyMessage}>Wishlist is empty!</h2>
      ) : (
        wishlist.items.map((q) => {
          return (
            <div key={q._id} className={styles.wishlistItem}>
              <span className={styles.itemTitle}>{q.title}</span>
              <h6 className={styles.itemDescription}>{q.description}</h6>
              <span className={styles.itemPrice}>{q.price}</span>
              <button
                className={styles.heartButton}
                onClick={() => {
                  dispatch(toggleFavorites(q));
                }}
              >
                <FaHeart />
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Wishlist;
