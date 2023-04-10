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
           <img class="img-fluid" width={200} src={el.image} alt={el.description}/>
          {el.title} - ${el.price}
        </div>
      ));

      const filteredItems = items.filter((item) => item.title.toLowerCase().includes(searchTerm.toLowerCase()));

      const listItems = filteredItems.map((el) => (
        <div key={el.id} >

            <div class="card mb-3" style={{width: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img class="img-fluid" src={el.image} width={200} alt={el.description}/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{el.title}</h5>
                            <p class="card-text">{el.description}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Price: ${el.price}</li>
                            <li class="list-group-item">Category: {el.category}</li>
                        </ul>
                        <div class="card-body">
                            <button type="button" class="btn btn-outline-primary" onClick={() => props.removeFromCart(el)}>-</button>{" "}
                            <button type="button" class="btn btn-outline-primary" variant="light" onClick={() => props.addToCart(el)}> + </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>

      ));


        return (
            <div>
                    <nav class="navbar sticky-top bg-primary" data-bs-theme="dark">
                        <div class="container-fluid">
                            <p>Number of items in Cart : {cartItemList.length} Items <button onClick={() => props.handleViewChange('Cart')} class="btn btn-secondary">Checkout</button></p> 
                            <span class="navbar-brand h1">Welcome to the Underground Shoe Store</span>
                            <form class="d-flex" role="search">
                                <input class="form-control me-2" type="search" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                            </form>
                        </div>
                    </nav>
                
                    <div>{listItems}</div>
            </div>
            );
}
export default Shop;
