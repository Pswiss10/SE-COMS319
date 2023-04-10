import React, { useState, useEffect } from "react";
import items from "./selected_products.json";
import 'bootstrap/dist/css/bootstrap.css';


const Shop = (props) => {
   
   // const [cart, setCart] = useState([]);
   // const [cartTotal, setCartTotal] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");


    // useEffect(() => {
    //     total();
    //     }, [cart]);
    
    // const total = () => {
    //     let totalVal = 0;
    //     for (let i = 0; i < cart.length; i++) {
    //     totalVal += cart[i].price;
    //     }
    //     setCartTotal(totalVal);
    //     };

    // const addToCart = (el) => {
    //     setCart([...cart, el]);
    //     };

    // const removeFromCart = (el) => {
    //     let hardCopy = [...cart];
    //     hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
    //     setCart(hardCopy);
    //     };

    const cartItems = props.cartItems;

    const cartItemList = cartItems.map((el) => (
        <div key={el.id}>
           <img class="img-fluid" src={el.image} width={100} alt={el.description}/>
          {el.title} - ${el.price}
        </div>
      ));

      const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

      const listItems = filteredItems.map((el) => (
          <div key={el.id}>
          <img class="img-fluid" src={el.image} width={150} alt={el.description}/>
          {el.title} - 
           ${el.price}
          <button type="button" classname="btn btn-primary" onClick={() => props.removeFromCart(el)}>-</button>{" "}
          <button type="button" classname="btn btn-primary" variant="light" onClick={() => props.addToCart(el)}> + </button>
          </div>
      ));


        return (
            <div>
                <input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <div>{listItems}</div>
                <div>Number of items in Cart : {cartItemList.length} Items</div>
                
            </div>
            );
}
export default Shop;
