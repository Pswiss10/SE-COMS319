import React, { useState, useEffect } from "react";
import items from "./selected_products.json";
import 'bootstrap/dist/css/bootstrap.css';


const Cart = (props) => {

    const cartItems = props.cartItems;
    // rest of the component code

const cartItemsList = cartItems.map((el) => (
    <div key={el.id}>
      <img class="img-fluid" src={el.image} width={100} alt={el.description}/>
      {el.title}
      ${el.price}
    </div>
  ));
  
  return (
    <div>
      <div>Items in Cart :</div>
      <div>{cartItemsList}</div>

      <form onSubmit={props.onSubmit}>
        <label>
          Full Name:
          <input type="text" name="name" required />
        </label>
        <br />
        <label>
          Email:
          <input type="email" name="email" required/>
        </label>
        <br />
        <label>
          Card Number:
          <input type="number" name="ccn" required />
        </label>
        <br />
        <label>
          Address:
          <input type="text" name="address" required/>
        </label>
        <br />
        <label>
        City:
          <input type="text" name="city" required/>
        </label>
        <br />
        <label>
        State:
          <input type="text" name="state" required />
        </label>
        <br />
        <label>
        Zip Code:
          <input type="number" name="zip" required />
        </label>
        <br />
        <button type="submit">Confirm Purchase</button>
      </form>
    </div>
  );
};

export default Cart;
