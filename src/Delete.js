import React, { useState, useEffect } from "react";



const Delete = (props) => {
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

  function deleteOneProduct(deleteid) {
    console.log("Product to delete :", deleteid);
    fetch("http://localhost:4000/delete/", {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ _id: deleteid }),
    })
    .then((response) => response.json())
    .then((data) => {
    console.log("Delete a product completed : ", deleteid);
    console.log(data);
    if (data) {
    //const keys = Object.keys(data);
    const value = Object.values(data);
    alert(value);
    }
    });
    setChecked4(!checked4);
    setIndex(0);
    }

  return (
    <div>
      <div class="p-3">
        <h3>Delete one product:</h3>
        <div>
          <input type="checkbox" class="form-check-input" id="acceptdelete" name="acceptdelete" checked={checked4}onChange={(e) => setChecked4(!checked4)} />
        </div>
        <div>
          <button class="btn btn-primary" onClick={() => getOneByOneProductPrev()}>Prev</button>
          <button class="btn btn-primary" onClick={() => getOneByOneProductNext()}>Next</button>
          <button class="btn btn-primary"onClick={() => deleteOneProduct(product[index]._id)}>Delete</button>
        </div>

        {checked4 && (
        <div key={product[index]._id}>
        <img src={product[index].shoeImage} width={30} alt="yes"/> <br />
        Id:{product[index].id} <br />
        Title: {product[index].shoeTitle} <br />
        Stock: {product[index].count} <br />
        Price: {product[index].price} <br />
        Rate :{product[index].rating.rate} and Count: {product[index].rating.count} <br />
        </div>
        )}
      </div>
      <div class="p-3">
      <button type="button" class="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Student')}>Return to Student Info</button> <br/>
      </div>
      

  </div>

)



}

export default Delete;