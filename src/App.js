import React from 'react';
import GetHealth from './GetHealth.js';
import GetProducts from './GetProducts.js';
import GetProduct from './GetProduct.js';
import './style.css';

export default function App() {
  return (
    <div className="App">
      <h1>The application of the API requests</h1>
      <GetHealth />
      <GetProducts />
      <GetProduct />
    </div>
  );
}
