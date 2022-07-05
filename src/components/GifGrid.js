import React from 'react';
import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifGridItem} from "./GifGridItem";

export const GifGrid = ( {category}) => {

  const { data:images, loading } = useFetchGifs(category);

  return(
    <div>
      <h3 className='animate__animated animate__fadeInLeft badge text-bg-primary mt-4'>{category}</h3>
      <hr className="border-primary border-3 opacity-75"/>
      {loading && <p className='animate__animated animate__flash'>Loading</p>}
      <div className='row gx-3'>
        {
          images.map( img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </div>
  );
}
