import React, { useState, useEffect } from "react";



const Create = (props) => {

  const [addNewProduct, setAddNewProduct] = useState({
    _id: 0,
    title: "",
    price: 0.0,
    description: "",
    category: "",
    image: "http://127.0.0.1:4000/images/",
    rating: { rate: 0.0, count: 0 },
    });
    
    function handleChange(evt) {
      const value = evt.target.value;
      if (evt.target.name === "_id") {
        setAddNewProduct({ ...addNewProduct, _id: value });
      } else if (evt.target.name === "title") {
        setAddNewProduct({ ...addNewProduct, title: value });
        } else if (evt.target.name === "price") {
        setAddNewProduct({ ...addNewProduct, price: value });
        } else if (evt.target.name === "description") {
        setAddNewProduct({ ...addNewProduct, description: value });
        } else if (evt.target.name === "category") {
        setAddNewProduct({ ...addNewProduct, category: value });
        } else if (evt.target.name === "image") {
        const temp = value;
        setAddNewProduct({ ...addNewProduct, image: temp });
        } else if (evt.target.name === "rate") {
        setAddNewProduct({ ...addNewProduct, rating: { rate: value } });
        } else if (evt.target.name === "count") {
        const temp = addNewProduct.rating.rate;
        setAddNewProduct({
        ...addNewProduct,
        rating: { rate: temp, count: value },
        });
      }
    }
    
      function handleOnSubmit(e) {
        e.preventDefault();
        console.log(e.target.value);
        fetch("http://localhost:4000/insert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(addNewProduct),
        })
        .then((response) => response.json())
        .then((data) => {
        console.log("Post a new product completed");
        console.log(data);
        if (data) {
        //const keys = Object.keys(data);
        const value = Object.values(data);
        alert(value);
        }
        });
        }


return (

<div>
<h3>Add a new product :</h3>
<form action="">
    <input type="number" placeholder="id?" name="_id" value={addNewProduct._id} onChange={handleChange} />
    <input type="text" placeholder="title?" name="title" value={addNewProduct.title} onChange={handleChange} />
    <input type="number" placeholder="price?" name="price" value={addNewProduct.price} onChange={handleChange} />
    <input type="text" placeholder="description?" name="description" value={addNewProduct.description} onChange={handleChange} />
    <input type="text" placeholder="category?" name="category" value={addNewProduct.category} onChange={handleChange} />
    <input type="text" placeholder="image?" name="image" value={addNewProduct.image} onChange={handleChange} />
    <input type="number" placeholder="rate?" name="rate" value={addNewProduct.rating.rate} onChange={handleChange} />
    <input type="number" placeholder="count?" name="count" value={addNewProduct.rating.count} onChange={handleChange} />
    <button type="submit" onClick={handleOnSubmit}>
    submit
    </button>
    </form>


    <button type="button" onClick={() => props.handleViewChange('Main')}>Return to Main</button> <br/>

    </div>

)
}
export default Create;