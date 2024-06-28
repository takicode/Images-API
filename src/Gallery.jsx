import React from 'react'
import { useGlobalContext } from './context'
import { useQuery } from '@tanstack/react-query'
import customFetch from './utils'
import axios from 'axios'


const Gallery = () => {
  const {search,setSearch}=useGlobalContext()

  const response = useQuery({
  queryKey:["images", search],
  queryFn: async()=> {
    const result = await customFetch.get(`/${search}`)
    return result.data
  }
 })
 
 console.log(response);

 if(response.isLoading){
  return(
    <section className='image-container'>
      <h4>Loading...</h4>
    </section>
  )
 }
 if(response.isError){
  return(
    <section className='image-container'>
      <h4>There is an error...</h4>
    </section>
  )
 }
 const results = response.data.results
console.log(results);
 if(results.length < 1){
  return(
    <section className='image-container'>
      <h4>No result found...</h4>
    </section>
  )
 }
 
  return (
    <div className='image-container'>
      {results.map((item)=>{
        console.log(item);
        const {id, urls, user }= item
        return(
            <img key={id} className='img' src={urls.regular} alt={user.name} /> 
        )
      })}
    </div>
    
  )
}

export default Gallery