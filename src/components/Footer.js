// src/Project.js

import React from 'react'
import './Footer.css';

const date = new Date().getFullYear()

function Footer() {
    return (
      <div className="Footer">
        <h2>Mitchell Hudson copyright {date}</h2>
      </div>
    );
  }

export default Footer