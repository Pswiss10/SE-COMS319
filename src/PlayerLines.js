import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';


const PlayerLines = (props) => {

  
  return (
    <div>
        <button onClick={() => props.handleViewChange('Cart')} class="btn btn-secondary">Checkout</button> <button onClick={() => props.handleViewChange('Featured')} class="btn btn-secondary">Featured Shoes</button> <button onClick={() => props.handleViewChange('Shop')} class="btn btn-secondary">All Shoes</button> <button onClick={() => props.handleViewChange('Student')} class="btn btn-secondary">Student Info</button>
    </div>
  );
};

export default PlayerLines;