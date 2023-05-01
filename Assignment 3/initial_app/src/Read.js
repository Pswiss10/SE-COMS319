import React, { useState, useEffect } from "react";



const Read = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      fetch('http://localhost:4000/')
        .then(response => response.json())
        .then(data => setItems(data))
        .catch(error => console.error(error));
    }, []);

return (

    <div>
        <div>
        <h1>Items in the Database</h1>
        {items.map(item => (
            <div key={item._id}>
            <h3>{item.title}</h3>
            <p>Price: {item.price}</p>
            <p>Description: {item.description}</p>
            <p>Category: {item.category}</p>
            <img src={item.image} alt={item.Title} />
            <p>Rating: {item.rating.rate} Stars ({item.rating.count} reviews)</p>
            </div>
        ))}
        </div>
        <button type="button" onClick={() => props.handleViewChange('Main')}>Return to Main</button> <br/>

    </div>

)



}

export default Read;