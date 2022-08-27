import React, { useState } from 'react';
import DisplayProduct from './DisplayProduct.js';
import './GetProducts.css';

const GetProducts = () => {
  const [getProducts, setgetProducts] = useState([]);
  const URL =
    'https://61f87oxx9f.execute-api.eu-west-2.amazonaws.com/Prod/products';

  const btnHandler = async () => {
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      if (response.status === 200 || response.status === 201) {
        setgetProducts(jsonData);
      }
    } catch (err) {
      throw new Error('request is falied');
    }
  };
  return (
    <div className="products-container">
      <button className="btn-product" onClick={() => btnHandler()}>
        Get Products
      </button>

      {getProducts?.products && (
        <>
          <br />
          <span className="product-id">Product Id</span>
          <span className="product-price">Product Price</span>
          <span className="product-color">Product Color</span>
          <hr />
          {getProducts?.products?.map((product) => (
            <>
              <DisplayProduct product={product} key={product.productid} />
            </>
          ))}
        </>
      )}
    </div>
  );
};

export default GetProducts;
