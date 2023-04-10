import React, { useState, useEffect } from "react";
import items from "./selected_products.json";
import 'bootstrap/dist/css/bootstrap.css';


const Info = (props) => {

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
      <div>Thank you for your purchase</div>
      <div></div>
    </div>
  );
};

export default Info;