import React, { useState, useEffect } from "react";



const Create = (props) => {

  const [addNewProduct, setAddNewProduct] = useState({
        _id: '',
        playerTitle: "",
        playerDescription: "",
        position: "",
        team: "",
        playerImage: "/images/Players/",
        shoeTitle: "",
        price: '',
        shoeImage: "/images/Shoes/",
        rating: { rate: '', count: '' },
        count: '',
        featured: ''
    });
    
    function handleChange(evt) {
      const value = evt.target.value;
      if (evt.target.name === "_id") {
        setAddNewProduct({ ...addNewProduct, _id: value });
      } else if (evt.target.name === "title") {
        setAddNewProduct({ ...addNewProduct, shoeTitle: value });
        } else if (evt.target.name === "price") {
        setAddNewProduct({ ...addNewProduct, price: value });
        } else if (evt.target.name === "description") {
        setAddNewProduct({ ...addNewProduct, playerDescription: value });
        } else if (evt.target.name === "amount") {
        setAddNewProduct({ ...addNewProduct, count: value });
        } else if (evt.target.name === "image") {
        const temp = value;
        setAddNewProduct({ ...addNewProduct, shoeImage: temp });
        } else if (evt.target.name === "rate") {
          const temp = addNewProduct.rating.count;
          setAddNewProduct({ ...addNewProduct, rating: { rate: value, count: temp } });
        } else if (evt.target.name === "playerImage") {
        setAddNewProduct({ ...addNewProduct, playerImage: value });
        } else if (evt.target.name === "team") {
          setAddNewProduct({ ...addNewProduct, team: value });
        } else if (evt.target.name === "count") {
        const temp = addNewProduct.rating.rate;
        setAddNewProduct({...addNewProduct, rating: { rate: temp, count: value },
        });
        } else if (evt.target.name === "featured") {
          setAddNewProduct({ ...addNewProduct, featured: value});
        } else if (evt.target.name === "playerName") {
          setAddNewProduct({ ...addNewProduct, playerTitle: value});
        } else if (evt.target.name === "position") {
          setAddNewProduct({ ...addNewProduct, position: value});
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
        alert("Created new shoe item : " + value);
        }
        });
        }


return (

<div>
  <div class="p-3">
    <h3>Add a new product :</h3>
    <form action="">
      <input type="number" class="form-control" placeholder="id?" name="_id" value={addNewProduct._id} onChange={handleChange} /><br/>
      <input type="text" class="form-control" placeholder="Shoe name?" name="title" value={addNewProduct.shoeTitle} onChange={handleChange} /><br/>
      <input type="number" class="form-control" placeholder="Price?" name="price" value={addNewProduct.price} onChange={handleChange} /><br/>
      <input type="text" class="form-control" placeholder="Player description?" name="description" value={addNewProduct.playerDescription} onChange={handleChange} /><br/>
      <input type="number" class="form-control" placeholder="Total stock?" name="amount" value={addNewProduct.count} onChange={handleChange} /><br/>
      <input type="text" class="form-control" placeholder="Shoe image?" name="image" value={addNewProduct.shoeImage} onChange={handleChange} /><br/>
      <input type="text" class="form-control" placeholder="Player image?" name="playerImage" value={addNewProduct.playerImage} onChange={handleChange} /><br/>
      <input type="text" class="form-control" placeholder="Player team?" name="team" value={addNewProduct.team} onChange={handleChange} /><br/>
      <input type="number" class="form-control" placeholder="Rating?" name="rate" value={addNewProduct.rating.rate} onChange={handleChange} /><br/>
      <input type="number" class="form-control" placeholder="Number of reviews?" name="count" value={addNewProduct.rating.count} onChange={handleChange} /><br/>
      <input type="number" class="form-control" placeholder="Is it featured?" name="featured" value={addNewProduct.featured} onChange={handleChange} /><br/>
      <input type="text" class="form-control" placeholder="Player name?" name="playerName" value={addNewProduct.playerTitle} onChange={handleChange} /><br/>
      <input type="text" class="form-control" placeholder="Player position?" name="position" value={addNewProduct.position} onChange={handleChange} /><br/>
      <button type="submit" class="btn btn-primary btn-lg" onClick={handleOnSubmit}>submit</button>
    </form>
    <button type="button" class="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Student')}>Return to Student Info</button> <br/>
  </div>


    </div>

)
}
export default Create;