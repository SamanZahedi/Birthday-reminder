import React , { useState } from 'react';
import Tour from './Tour';
const Tours = ({tours, removeIt}) => {
  return (
<section>
  <div className="title">
    <h2>our tours</h2>
    <div className="underline"></div>
  </div>
  <div>
{tours.map( tour => <Tour key={tour.id} {...tour} removeIt={removeIt}/>)}
  </div>
</section>
    );
  
};

export default Tours;
