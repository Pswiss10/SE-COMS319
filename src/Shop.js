import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';


const Shop = (props) => {
   
   // const [cart, setCart] = useState([]);
   // const [cartTotal, setCartTotal] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [items, setItems] = useState([]);

    const cartItems = props.cartItems;

    useEffect(() => {
        fetch("http://localhost:4000/")
        .then((response) => response.json())
        .then((data) => {
      //  console.log("Show Catalog of Products :");
       // console.log(data);
        setItems(data);
        });
    }, []);

    const cartItemList = cartItems.map((el) => (
        <div key={el._id}>
           <img class="img-fluid" width={200} src={el.shoeImage} alt={el.count}/>
          {el.shoeTitle} - ${el.price}
        </div>
      ));

      const filteredItems = items.filter((item) => item.shoeTitle.toLowerCase().includes(searchTerm.toLowerCase()));

      const listItems = filteredItems.map((el) => (
        <div key={el.id} >

            <div class="card mb-3" style={{width: '540px'}}>
                <div class="row g-0">
                    <div class="col-md-4">
                        <img class="img-fluid" src={el.shoeImage} width={200} alt={el.count}/>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">{el.shoeTitle}</h5>
                            <p class="card-text">Shoe Rating: {el.rating.rate} with {el.rating.count} reviews</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Price: ${el.price}</li>
                            <li class="list-group-item">Amount in stock: {el.count} items</li>
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
                        <p>Number of items in Cart : {cartItemList.length} Items <button onClick={() => props.handleViewChange('Cart')} class="btn btn-secondary">Checkout</button> <button onClick={() => props.handleViewChange('Featured')} class="btn btn-secondary">Featured Shoes</button> <button onClick={() => props.handleViewChange('Student')} class="btn btn-secondary">Student Info</button> </p> 
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
