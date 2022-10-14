import React, { useState } from 'react';


const Tour = ({id, name, info, image, price, removeIt}) => {
    const [readMore, setReadMore] = useState(true)
 
    return <>
    <article className='single-tour'>
<img src={image} alt={name} />
<footer>
    <div className="tour-info">
        <h4>{name}</h4>
        <div className="tour-price">${price}</div>
    </div>
         <p>
          {readMore ? info :`${info.substring(0,150)}...`}
          <button onClick={()=>setReadMore(!readMore)}>
             {readMore? " show less" : " read more"}
          </button>
        </p>
     <button
          className="delete-btn"
          onClick={() => {
            removeIt(id)
          }}
        >
          Not interested
        </button>
</footer>
    </article>
    </>
  
};

export default Tour;
