import React, { useState, useEffect } from "react";



const Student = (props) => {


return (
    <div>
        <div className="row p-3">
            <div className="col p-3">
                <button type="button" className="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Featured')}>Return to Featured Shoes</button>
            </div>
        </div>
        <div className="row d-flex justify-contents-between border border-secondary-subtle">
            <div className="col">
                <p className="text-center">Peter Wissman - pwissman@iastate.edu, Kane Laws - lawsk20@iastate.edu</p>
                <p className="text-center">Final Project</p>
                <p className="text-center">COMS 319 - Construction of User Interfaces</p>
                <p className="text-center">Abraham Aldaco, Ph.D.</p>
                <p className="text-center">Team 27</p>
                <p className="text-center">Date: 4/30/23</p>
                <p className="text-center">We deveopled a MERN application using MongoDB, Express, Eeact, and Node.js. This app simulates a catolog of basketball shoes.</p>
            </div>
            <div className="col-4">
                <img className="img-fluid" src="images/players/students.webp" width={540}/>
            </div>
        </div>
        <div className="row g-3">
            <div className="col-6 p-3">
                <button type="button" className="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Create')}>Create new shoes</button> <br/>
            </div>
            <div className="col-6 p-3">
                <button type="button" className="btn btn-primary btn-lg" onClick={() => props.handleViewChange('Delete')}>Delete Shoes</button> <br/>
            </div>
        </div>
    </div>
    );
}


export default Student;