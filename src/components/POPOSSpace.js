// src/Project.js

import React from 'react'
import logo from './logo.svg'
import './POPOSSpace.css';
import { Link } from 'react-router-dom'


function POPOSSpace(props) {
    const { name, image, address, hours, id } = props

    return (
      <div className="POPOSSpace">
        <Link to={`/details/${id}`}>    
            <img 
            src={`${process.env.PUBLIC_URL}images/${image}`} 
            width="100%" 
            height="auto"
            alt="Hello" 
            />
        </Link> 
        
        <Link 
          className="POPOSSpace-title"
          to={`/details/${id}`}>
            <h1>{name}</h1>
        </Link>   

        
        <div className="POPOSSpace-info">
                <div >{address}</div>
                <div>{hours}</div>
        </div>
      </div>
    )
}

export default POPOSSpace