import React from "react";

export const GifGridItem = ( {id,title, url} )=>{

  return(
    <div className='col-md-3 col-sm-6 col-12 animate__animated animate__fadeInLeft'>
      <div className="card cardDetails text-center">
        <img src={url} alt={title} className='card-img-top'/>
        <div className="card-body">
          <h5 className='card-title'>{title}</h5>
        </div>
      </div>
    </div>
  );
}
