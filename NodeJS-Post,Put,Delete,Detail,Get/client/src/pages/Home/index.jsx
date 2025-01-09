import { useEffect, useState } from "react";
import axios from "axios";
import "./index.css"
function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const BaseUrl = "http://localhost:8080";
  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axios(`${BaseUrl}/products`);
      console.log(res.data.data);
      setProducts(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (pId) => {
    try {
      const res = await axios.delete(`${BaseUrl}/products/${pId}`);

      console.log(res);

      if (res.status === 200) {
        setProducts([...products.filter((p) => p.id !== pId)]);
      } else {
        throw new Error("failed to delete");
      }
    } catch (error) {
      console.log(error);
    }
  };

  let timeout = null;
  const handleSearch = (e) => {
    clearTimeout(timeout);
    try {
      timeout = setTimeout(async () => {
        const res = await axios(
          `${BaseUrl}/products/search?title=${e.target.value.trim()}`
        );
        setProducts([...res.data.data]);
      }, 500);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetail = async (pId) => {
    try {
      const res = await axios(`${BaseUrl}/products/${pId}`);
      setSelectedProduct(res.data.data);
    } catch (error) {
      console.log("Detayları getirme hatası:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <p>LOADING...</p>;
  }

  return (
    <>
      <div>
        <input type="search" placeholder="axtar" onChange={handleSearch} />
      </div>
      <ul>
        {products.length > 0 &&
          products.map((p) => (
            <li key={p.id}>
              <span>{p.title}</span>
              <span>{p.price}</span>
              <button onClick={() => handleDetail(p.id)}>Detail</button>
              <button
                onClick={() => {
                  if (window.confirm("Silmek istediyinize Əminsiz")) {
                    handleDelete(p.id);
                  }
                }}
              >
                Sil
              </button>
            </li>
          ))}
      </ul>

      {selectedProduct && (
        <div className="product-detail">
          <h2>{selectedProduct.title}</h2>
          <p>{selectedProduct.description}</p>
          <p>price: {selectedProduct.price}man</p>
          <p>category: {selectedProduct.category}</p>
          <button onClick={() => setSelectedProduct(null)}>Close</button>
        </div>
      )}
    </>
  );
}

export default Home;
