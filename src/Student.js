import React, { useState, useEffect } from "react";


//Simple class that has the html to display the student information
//it also has buttons to change screens
const Student = (props) => {

return (
    <div>
        <p>Names: Peter Wissman - pwissman@iastate.edu, Kane Laws - lawsk20@iastate.edu</p>
        <p>Final Project</p>
        <p>COMS 319 - Construction of User Interfaces</p>
        <p>Abraham Aldaco, Ph.D.</p>
        <p>Team 27</p>
        <p>Date: 4/30/23</p>
        <p>We deveopled a MERN application using react, node.js, and mondodb, and express. This app simulates a catolog of clothing</p>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Featured')}>Return to Featured Shoes</button> <br/>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Create')}>Create new shoes</button> <br/>
        <button type="button" class="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Delete')}>Delete Shoes</button> <br/>
        
    </div>
    );
}


export default Student;