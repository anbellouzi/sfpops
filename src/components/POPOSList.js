// src/POPOSList.js

import React, { useState } from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from './sfpopos-data.js'


function POPOSList() {
  const [ query, setQuery ] = useState('')

  const spaces = data.filter(obj => obj.title.includes(query) || obj.address.includes(query)).map((obj) => {
        return (
          <POPOSSpace
            id={obj.id}
            key={`${obj.title}-${obj.id}`}
            name={obj.title}
            address={obj.address}
            image={obj.images[0]}
            hours={obj.hours}
          />
        )
    })

  return (
    <div className="POPOSList">
      <form>
          <input 
              value={query}
              placeholder="search"
              onChange={(e) => setQuery(e.target.value)}
          />
          <button type="submit">Submit</button>
      </form>
      {spaces}
    </div>
  )
  
}

export default POPOSList