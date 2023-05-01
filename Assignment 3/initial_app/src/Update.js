import React, { useState, useEffect } from "react";



const Update = (props) => {

    const [thisPrice, setPrice] = useState(0);
    const [checked4, setChecked4] = useState(false);
    const [index, setIndex] = useState(0);
    const [product, setProduct] = useState([]);
  
 
    useEffect(() => {
      getAllProducts();
      }, [checked4]);
  
    function getAllProducts() {
      fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((data) => {
      console.log("Show Catalog of Products :");
      console.log(data);
      setProduct(data);
      });
    }
    
    function handleChange(evt){
      setPrice(evt.target.value);
      console.log(evt);
      console.log(evt.target.value);
    }

    function getOneByOneProductNext() {
      if (product.length > 0) {
      if (index === product.length - 1) setIndex(0);
      else setIndex(index + 1);
      }
      }
  
    function getOneByOneProductPrev() {
      if (product.length > 0) {
      if (index === 0) setIndex(product.length - 1);
      else setIndex(index - 1);
  
      }
      }
  
    function updateOneProduct(updateid) {
      console.log("Current id : ", product[index].id, "and index", index, "and price: ", thisPrice)
      console.log("Product to update :", updateid);
      fetch("http://localhost:4000/update/", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: Number(updateid), 
        price: Number(thisPrice)
       }),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log("Update completed : ", updateid);
      console.log(data);
      if (data) {
      //const keys = Object.keys(data);
      const value = Object.values(data);
      alert(value);
      }
      });
      setChecked4(!checked4);
      }
  
    return (
      <div>
        <div>
          <h3>Delete one product:</h3>
          <input type="checkbox" id="acceptdelete" name="acceptdelete" checked={checked4}
          onChange={(e) => setChecked4(!checked4)} />
          <button onClick={() => getOneByOneProductPrev()}>Prev</button>
          <button onClick={() => getOneByOneProductNext()}>Next</button>
          New Price: <input type="number" placeholder="$xx.xx" name="price" onChange={handleChange}></input>
          <button onClick={() => updateOneProduct(product[index].id)}>Update</button>
          {checked4 && (
          <div key={product[index]._id}>
          <img src={product[index].image} width={30} alt="yes"/> <br />
          Id:{product[index].id} <br />
          Title: {product[index].title} <br />
          Category: {product[index].category} <br />
          Price: {product[index].price} <br />
          Rate :{product[index].rating.rate} and Count:
          {product[index].rating.count} <br />
          </div>
          )}
        </div>
        <button type="button" onClick={() => props.handleViewChange('Main')}>Return to Main</button> <br/>
  
    </div>
  
  )
  
  
  
  }
export default Update;
