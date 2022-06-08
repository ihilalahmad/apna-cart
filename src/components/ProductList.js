import React from "react";
import Product from "./Product.js";

export default function ProductList(props) {
  return props.products.length > 0 ? (
    props.products.map((productList, i) => {
      return (
        <Product
          product={productList}
          key={i}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
          index={i}
        />
      );
    })
  ) : (
    <h1>Your Cart is Empty, Please Add Some Products in the</h1>
  );
}
