import React, { useState, useEffect } from "react";
import items from "./selected_products.json";
import 'bootstrap/dist/css/bootstrap.css';


const Cart = (props) => {

    const cartItems = props.cartItems;
    // rest of the component code

// const cartItemsList = cartItems.map((el) => (
//     <div key={el.id}>
//       <img class="img-fluid" src={el.image} width={100} alt={el.description}/>
//       {el.title}
//       ${el.price}
//     </div>
//   ));
  
  return (
    
    <div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Name</th>
            <th scope="col">Quantity</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <th>1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
          <th>2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
          <th>3</th>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
        <tfoot class="table-group-divider">
          <tr>
            <th scope="col" colspan="3">Total</th>
              <td>$1,000,000</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Cart;
