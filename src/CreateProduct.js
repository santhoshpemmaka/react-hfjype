import React, { useState } from 'react';
import './CreateProduct.css';

const CreateProduct = () => {
  const [productInfo, setproductInfo] = useState({
    productid: '',
    price: '',
    color: '',
  });
  const [responseStatus, setresponseStatus] = useState();

  const btnHandler = async () => {
    try {
      const URL =
        'https://61f87oxx9f.execute-api.eu-west-2.amazonaws.com/Prod/product';

      const response = await fetch(URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Host: 'https://react-hfjype.stackblitz.io',
        },
        body: JSON.stringify(productInfo),
      });
      const dataJSON = await response.json();
      if (response.status === 200 || response.status === 201) {
        setresponseStatus('Product Is Created');
      }
      setproductInfo({
        productid: '',
        price: '',
        color: '',
      });
    } catch (err) {
      throw new Error('Create API is failed');
    }
  };
  console.log('product', productInfo);
  return (
    <div className="product-create-container">
      <h1>Create New Product </h1>
      <label className="label-input ">
        {' '}
        Product Id:
        <input
          className="input-text left-margin"
          type="text"
          value={productInfo.productid}
          onChange={(e) =>
            setproductInfo((prev) => ({ ...prev, productid: e.target.value }))
          }
          placeholder="Enter Product Id"
        />
      </label>
      <br />
      <label className="label-input">
        {' '}
        Product Price:
        <input
          className="input-text"
          type="number"
          value={productInfo.price}
          onChange={(e) =>
            setproductInfo((prev) => ({ ...prev, price: e.target.value }))
          }
          placeholder="Enter Product Price"
        />
      </label>
      <br />
      <label className="label-input">
        {' '}
        Product Color
        <input
          className="input-text"
          type="text"
          value={productInfo.color}
          onChange={(e) =>
            setproductInfo((prev) => ({ ...prev, color: e.target.value }))
          }
          placeholder="Enter Product Color"
        />
      </label>
      <br />
      <button className="create-btn" onClick={() => btnHandler()}>Create Product</button>
      {responseStatus ? <p className="response-text">{responseStatus}</p> : ''}
    </div>
  );
};

export default CreateProduct;
