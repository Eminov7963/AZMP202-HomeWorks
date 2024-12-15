import React from 'react'
import { products } from '../../data/data';
import "./index.css"
function Cards() {
  return (
    <div className='cards'>
        {products.map((q)=>{
            return (
              <div className="box">
                <div className="text">
                  <img src={q.image} alt="" />
                  <h1>{q.title}</h1>
                  <p>{q.description}</p>
                  <span>{q.price}</span>
                </div>
              </div>
            );
        })}
    </div>
  )
}

export default Cards;
