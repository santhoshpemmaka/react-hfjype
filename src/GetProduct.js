import React, { useState } from 'react';
import './GetProducts.css';

const GetProduct = () => {
  const [inputId, setinputId] = useState();
  const [productInfo, setproductInfo] = useState();

  const productHandler = async () => {
    try {
      const URL = `https://61f87oxx9f.execute-api.eu-west-2.amazonaws.com/Prod/product?productid=${inputId}`;
      const response = await fetch(URL);
      const jsonData = await response.json();
      setproductInfo(jsonData);
    } catch (err) {
      throw new Error('API Failed');
    }
  };
  console.log(productInfo);
  return (
    <div className="products-container">
      <h3 className="product-info">Get Product Info</h3>
      <input
      className="product-input"
        type="text"
        value={inputId}
        onChange={(e) => setinputId(e.target.value)}
        placeholder="Product search ID"
      />
      <button className="submit-btn" onClick={() => productHandler()}>Get Product Info</button>
      <div>
        {productInfo && (
          <>
            <span className="product-id">Product Id</span>
            <span className="product-price">Product price</span>
            <span className="product-color">Product Color</span>
            <hr />
            <span className="product-id">{productInfo.productid}</span>
            <span className="product-price">{productInfo.price}</span>
            <span className="product-color">{productInfo.color}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default GetProduct;
