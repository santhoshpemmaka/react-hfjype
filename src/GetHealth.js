import React, { useState } from 'react';
import './GetHealth.css';
const GetHealth = () => {
  const [getResponse, setgetResponse] = useState();
  const URL =
    'https://61f87oxx9f.execute-api.eu-west-2.amazonaws.com/Prod/health';

  const btnHandler = async () => {
    try {
      const response = await fetch(URL);
      const jsonData = await response.json();
      if (response.status === 200 || response.status === 201) {
        setgetResponse(jsonData);
      }
    } catch (err) {
      throw new Error('request is falied');
    }
  };
  return (
    <div className="health-container">
      <button className="btn-health" onClick={() => btnHandler()}>
        Check Health
      </button>
      {getResponse?.Message && (
        <p className="health-text">Health status is OK</p>
      )}
    </div>
  );
};

export default GetHealth;
