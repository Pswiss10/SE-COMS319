import React, { useState, useEffect } from "react";



const Create = (props) => {

    const [formData, setFormData] = useState({
        _id: "",
        Title: "",
        Price: "",
        Description: "",
        Category: "",
        image: "",
        Rating: {
            stars: "",
            count: ""
        },
      });
    
      const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        props.handleCreateSubmit(formData);
      };


return (

    <div>
      <form onSubmit={handleSubmit}>
        <label>
          id:
          <input
            type="text"
            name="_id"
            value={formData._id}
            onChange={handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
        <button type="button" onClick={() => props.handleViewChange('Main')}>Return to Main</button> <br/>

    </div>

)



}

export default Create;