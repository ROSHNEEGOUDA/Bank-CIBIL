import React from "react";
import "./MoneyLoader.css"; 

const MoneyLoader = () => {
  return (
    <div className="money-loader-container">
      <div className="pulse-dolla">💰</div>
      {[...Array(10)].map((_, i) => (
        <div key={i} className={`coin coin-${i + 1}`}>🪙</div>
      ))}
    </div>
  );
};

export default MoneyLoader;
