// import "./styles.css";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const products = [
  {
    id: "1",
    name: "Product 1"
  },
  {
    id: "2",
    name: "Product 2"
  },
  {
    id: "3",
    name: "Product 3"
  }
];

export default function New() {
  const [id, setId] = useState();
  const history = useHistory();

  const handleProceed = (e) => {
    // console.log(id, "home");
    history.push("/products", { id });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div>
        {products.map((product) => {
          return (
            <button
              onClick={(e) => {
                setId(product.id);
              }}
            >
              {product.name}{" "}
            </button>
          );
        })}
      </div>
      <button onClick={handleProceed} style={{ width: "250px" }}>
        {" "}
        Proceed
      </button>
    </div>
  );
}