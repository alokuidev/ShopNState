import React from "react";

import { useEffect, useState } from "react";
const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const api = "https://fakestoreapi.com/products";

  const fetchData = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error("Failed to fetch products", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="product-list">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          productList.map((elem) => {
            return (
              <div className="product-card" key={elem.id}>
                <img src={elem.image} alt="Product" className="product-image" />
                <h2 className="product-title">
                  {elem.title.length > 15
                    ? elem.title.slice(0, 10) + "..."
                    : elem.title}
                </h2>
                <p className="product-price">${elem.price}</p>
                <button className="add-btn">Add to Cart</button>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default ProductList;
