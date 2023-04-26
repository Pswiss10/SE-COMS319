import React, { useState, useEffect } from "react";



const Main = (props) => {


    return (

        <div>
            
            <button type="button" onClick={() => props.handleViewChange('Create')}>Create New</button> <br/>
            <button type="button" onClick={() => props.handleViewChange('Read')}>Read All</button> <br/>
            <button id="Update" type="button" onClick={() => props.handleViewChange('Update')}>Update ID</button>
            <input for="Update" type="number"></input> <br/>
            <button id="Delete" type="button" onClick={() => props.handleViewChange('Delete')}>Delete ID</button>
            <input for="Delete" type="number"></input> <br/>
        </div>

    )
}
// 
export default Main;