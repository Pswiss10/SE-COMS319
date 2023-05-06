import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

//contains all the methods and html to display the cart screen
const Cart = (props) => {

  //the following code finds all the quatinites and unique items from the users cart
    const cartItems = props.cartItems;
    let uniqueItems = [];
    let itemQuantities = new Array(50);
    for (let i = 0; i < itemQuantities.length; i++){
      itemQuantities[i] = 0;
    }
    for (let i = 0; i < cartItems.length; ++i) {
      itemQuantities[cartItems[i]._id]++;
      if(itemQuantities[cartItems[i]._id] < 2) {
        uniqueItems.push(cartItems[i]);
      }
    }

   // maps all the items in the cart in a table to be displayed later
  const cartItemsList = uniqueItems.map((el) => (
    <tr key={el._id}>
      <th scope="row">{itemQuantities[el._id]}</th>
        <td><img class="img-fluid" src={el.shoeImage} width={100} alt={el.count}/></td>
        <td>{el.shoeTitle}</td>
        <td>${el.price}</td>
    </tr>
  ));

  let totalPrice = 0;
 //find the total price for the table
  for (let i = 0; i < cartItems.length; ++i) {
    totalPrice += cartItems[i].price;
  }
  

  //returns the html that displays the cart of the user
  return (
    
    <div>
      <div class="h4 bg-primary text-light p-3">Items in Cart</div>
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
      
      <div class="border p-3 bg-light">
      <form onSubmit={props.onSubmit}>
        <div class="row g-3 p-3 justify-content-start">
            <label>
              Full Name: <br/>
              <div class="col-3">
                <input type="text" name="name" class="form-control" required />
              </div>
            </label>
            <label>
              Email: <br/>
              <div class="col-3">
                <input type="email" name="email" class="form-control" required/>
              </div>
            </label>
        </div>
        <div class="row g-3 p-3 justify-content-start">
            <label>
              Card Number: <br/>
              <div class="col-6">
                <input type="number" name="ccn" class="form-control" required />
              </div>
            </label>
        </div>
        <div class="row g-3 p-3 justify-content-start">
            <label>
              Address: <br/>
              <div class="col-6">
                <input type="text" name="address" class="form-control" required/>
              </div>
            </label>

        </div>
        <div class="row g-3 p-3 justify-content-start">
          <div class="col-2">
            <label>
              City: <br/>
              <div class="col">
              <input type="text" name="city" class="form-control" required/>
              </div>
            </label>
          </div>
          <div class="col-2">
            <label>
              State: <br/>
              <div class="col">
                <input type="text" name="state" class="form-control" required /> 
              </div>
            </label>
          </div>
          <div class="col-2">
            <label>
              Zip Code: <br/>
              <div class="col">
              <input type="number" name="zip" class="form-control" required />
              </div>
            </label>
          </div>
        </div>
        <button type="submit" class="btn btn-outline-primary">Confirm Purchase</button>
      </form>
      </div>
    </div>
  );
};

export default Cart;
