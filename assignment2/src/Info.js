import React, { useState, useEffect } from "react";
import items from "./selected_products.json";
import 'bootstrap/dist/css/bootstrap.css';


const Info = (props) => {

    const cartItems = props.cartItems;
    // rest of the component code
    let uniqueItems = [];
    let itemQuantities = [0, 0, 0, 0, 0, 0];
    for (let i = 0; i < cartItems.length; ++i) {
      itemQuantities[cartItems[i].id]++;
      if(itemQuantities[cartItems[i].id] < 2) {
        uniqueItems.push(cartItems[i]);
      }
    }

  const cartItemsList = uniqueItems.map((el) => (
    <tr key={el.id}>
      <th scope="row">{itemQuantities[el.id]}</th>
        <td><img class="img-fluid" src={el.image} width={100} alt={el.description}/></td>
        <td>{el.title}</td>
        <td>${el.price}</td>
    </tr>
  ));

  let totalPrice = 0;

  for (let i = 0; i < cartItems.length; ++i) {
    totalPrice += cartItems[i].price;
  }

  
  return (
    <div>
      <div>Thank you for your purchase of the following items!</div>
      <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Quantity</th>
          <th scope="col">Item</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody class="table-group-divider">
          {cartItemsList}
      </tbody>
      <tfoot class="table-group-divider">
        <tr>
          <th scope="col" colSpan="3">Total</th>
            <td>${totalPrice}</td>
        </tr>
      </tfoot>
    </table>
  </div>
  );
};

export default Info;