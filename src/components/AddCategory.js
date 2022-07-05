import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';


export const AddCategory = ( {setCategories} ) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit= (e)=>{
    e.preventDefault();
    if(inputValue.trim().length>2){
      setCategories(value => {
        console.log(value.includes(inputValue.trim()));
        if(value.includes(inputValue.trim())){
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Valor repetido, intente una nueva palabra!',
          });
          return [...value];
        }
        return [inputValue, ...value];
      });
      setInputValue('');
    }
  };
  return (
    <form onSubmit={ handleSubmit }>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onSubmit={handleSubmit}
        className='form-control'
      />
    </form>
  );
}

AddCategory.propTypes = {
  setCategories : PropTypes.func.isRequired,
}
