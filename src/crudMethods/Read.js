import React, { useState, useEffect } from "react";



const Read = (props) => {
    const [items, setItems] = useState([]);

    // useEffect(() => {
    //   fetch('http://localhost:4000/')
    //     .then((response) => response.json())
    //     .then(data => setItems(data))
    //     .catch(error => console.error(error));
    // }, []);

    function getAllProducts() {
        fetch("http://localhost:4000/")
        .then((response) => response.json())
        .then((data) => {
        console.log("Show Catalog of Products :");
        console.log(data);
        setItems(data);
        });
    }

    const showAllItems = items.map((el) => (
        <div key={el._id}>
        <img src={el.image} width={60} alt="yes"/> <br />
        Title: {el.title} <br />
        Category: {el.category} <br />
        Price: {el.price} <br />
        Rate : {el.rating.rate} Stars and Count : {el.rating.count} <br />
        </div>
        ));

return (
    <div>
        <div class="p-3">
        <button type="button" class="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Main')}>Return to Main</button> <br/>
        <h1>Catalog of Products</h1>
        <button class="btn btn-primary btn-lg" onClick={() => getAllProducts()}>Show All products</button>
        <h1>Show all available Products.</h1>
        <hr></hr>
        {<div>Products <br/>{showAllItems}</div>}
        <hr></hr>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Main')}>Return to Main</button> <br/>
        </div>
    </div>
    );


}


export default Read;