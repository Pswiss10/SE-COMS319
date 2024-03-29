import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

//This is display the 'all shoes' screen
const Shop = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [items, setItems] = useState([]);

    const cartItems = props.cartItems;

    //this Will grab all the database's shoes and set them into the items state
    useEffect(() => {
        fetch("http://localhost:4000/")
        .then((response) => response.json())
        .then((data) => {
        setItems(data);
        });
    }, []);

    //maps all the items in the user's cart to html, This it never really used but can be used to display the user's
    //cart from outside of the checkout screen
    const cartItemList = cartItems.map((el) => (
        <div key={el._id}>
           <img className="img-fluid" width={200} src={el.shoeImage} alt={el.count}/>
          {el.shoeTitle} - ${el.price}
        </div>
      ));

      //search bar implementation
      const filteredItems = items.filter((item) => item.shoeTitle.toLowerCase().includes(searchTerm.toLowerCase()));

      //maps all items from the database get into columns and cards to be displayed for the user
      const listItems = filteredItems.map((el) => (
        <div key={el.id} className="col-4 g-3">
            <div className="card mb-3 h-100">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img className="img-fluid" src={el.shoeImage} width={200} alt={el.count}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{el.shoeTitle}</h5>
                            <p className="card-text">Shoe Rating: {el.rating.rate} with {el.rating.count} reviews</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Price: ${el.price}</li>
                            <li className="list-group-item">Amount in stock: {el.count} items</li>
                        </ul>
                        <div className="card-body">
                            <button type="button" className="btn btn-outline-primary" onClick={() => props.removeFromCart(el)}>-</button>{" "}
                            <button type="button" className="btn btn-outline-primary" variant="light" onClick={() => props.addToCart(el)}> + </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      ));

        //returns the html to be used for the All shoes page
        return (
            <div>
                <nav className="navbar sticky-top bg-primary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <p>Number of items in Cart : {cartItemList.length} Items <button onClick={() => props.handleViewChange('Cart')} className="btn btn-secondary">Checkout</button> <button onClick={() => props.handleViewChange('Featured')} className="btn btn-secondary">Featured Shoes</button> <button onClick={() => props.handleViewChange('Student')} className="btn btn-secondary">Student Info</button> </p> 
                        <span className="navbar-brand h1">All shoes in the Store</span>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                        </form>
                    </div>
                </nav>
            
                <div className="row p-3 bg-light">{listItems}</div>
            </div>
            );
}
export default Shop;
