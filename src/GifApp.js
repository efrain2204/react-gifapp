import React, {useState} from 'react';
import {AddCategory} from "./components/AddCategory";
import {GifGrid} from "./components/GifGrid";

export const GifApp = () =>{
  const [categories, setCategories] = useState(['house']);

  return (
    <div className='container p-4'>
     <div className="row text-center">
       <h2 className=''>Buscador de Gif con Giphy</h2>
       <div className="col-12">
        <AddCategory setCategories={ setCategories }/>
       </div>
       <div className="col-12">
         <ol>
           {
             categories.map( category =>
               (<GifGrid
                 key={category}
                 category={category}
               />)
             )
           }
         </ol>
       </div>
     </div>
    </div>
  );
}
