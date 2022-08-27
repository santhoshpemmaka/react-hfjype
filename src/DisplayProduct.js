import React from 'react';
import './GetProducts.css';

const DisplayProduct = ({ product }) => {
  console.log(product);
  return (
    <div>
      {product && (
        <>
          <span className="product-id">{product.productid}</span>
          <span className="product-price">{product.price}</span>
          <span className="product-color">{product.color}</span>
        </>
      )}
    </div>
  );
};

export default DisplayProduct;
