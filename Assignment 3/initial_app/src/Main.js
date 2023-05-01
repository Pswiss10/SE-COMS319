import React, { useState, useEffect } from "react";



const Main = (props) => {


    return (

        <div>
            <div class="p-3 text-bg-primary">The Best Fits</div>
            <div>
                <p>Catalog</p>
            </div>
            <div class="p-3">
                <button type="button" class="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Create')}>Create New</button> <br/>
                <button type="button" class="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Read')}>Read All</button> <br/>
                <button id="Update" class="btn btn-primary btn-lg" type="button" onClick={() => props.handleViewChange('Update')}>Update ID</button> <br/>
                <button id="Delete" class="btn btn-primary btn-lg" type="button" onClick={() => props.handleViewChange('Delete')}>Delete ID</button> <br/>
                <button id="Student" class="btn btn-primary btn-lg" type="button" onClick={() => props.handleViewChange('Student')}>Student Info</button> <br/>
            </div>

            
        </div>

    )
}
// 
export default Main;