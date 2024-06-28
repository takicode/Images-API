import React, { useState, useRef } from 'react'
import { useGlobalContext } from './context';

 const SearchForm = () => {
  const {search, setSearch}=useGlobalContext()


  const handleSubmit = (e) =>{
     e.preventDefault()
  const searchValue =   e.target.elements.name.value
  if(!searchValue)return;
   setSearch(searchValue)
   
  }

  
  return (
    <section>
      <h1 className='title'>Unsplash Images</h1>
      <form action="" className="search-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder='cat' className='form-input search-input' />
        <button type='submit' className='btn'>search</button>
    
    </form>
    </section>
    
  )
}

export default SearchForm