import React, { useState, useEffect } from "react";
import items from "./selected_products.json";
import 'bootstrap/dist/css/bootstrap.css';


const Shop = (props) => {
   
    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);
    


    useEffect(() => {
        total();
        }, [cart]);
    
    const total = () => {
        let totalVal = 0;
        for (let i = 0; i < cart.length; i++) {
        totalVal += cart[i].price;
        }
        setCartTotal(totalVal);
        };

    const addToCart = (el) => {
        setCart([...cart, el]);
        };

    const removeFromCart = (el) => {
        let hardCopy = [...cart];
        hardCopy = hardCopy.filter((cartItem) => cartItem.id !== el.id);
        setCart(hardCopy);
        };

    const cartItems = cart.map((el) => (
        <div key={el.id}>
        <img class="img-fluid" src={el.image} width={100} alt={el.description}/>
        {el.title}
         ${el.price}
        </div>
    ));

    const listItems = items.map((el) => (
        <div key={el.id} class="my-0">
        <img class="img-fluid" src={el.image} width={150} alt={el.description}/>
        {el.title} - 
         ${el.price}
        <button type="button" classname="btn btn-primary" onClick={() => removeFromCart(el)}>-</button>{" "}
        <button type="button" classname="btn btn-primary" variant="light" onClick={() => addToCart(el)}> + </button>
        </div>
        ));


        return (
            <div>
            <div>{listItems}</div>
            <div>Items in Cart :</div>
            <div>{cartItems}</div>
            <div>Order total to pay : ${cartTotal}</div>
            </div>
            );
}
export default Shop;
