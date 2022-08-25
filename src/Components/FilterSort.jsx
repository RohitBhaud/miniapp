import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

const FilterSort = () => {

   const dispatch = useDispatch()


    const[searchParams, setSearchParams]= useSearchParams();
  const urlSort= searchParams.get("sortBy")
  const urlcategory = searchParams.getAll("category")

    const[sortBy, setSortBy]= useState( urlSort||"")
    const [category , setCategory]= useState(urlcategory||[])


    const HandleCheckbox = (e)=>{
       const option = e.target.value;
       let newCategory=[...category];
       if(category.includes(option)){
          newCategory.splice(newCategory.indexOf(option),1)
       }
       else{
        newCategory.push(option)
       }
       setCategory(newCategory)
    }

    const handleSort = (e)=>{
           setSortBy(e.target.value)
    }

    useEffect(()=>{
      if(category){
        setSearchParams({category:category})
      }
    },[category,dispatch,setSearchParams])

    useEffect(()=>{
      if(sortBy || category){
        //  const params={
        //   category:searchParams.getAll("category"),
        //   sortBy
        // };
      let params={};
      category&&(params.category=category);
      sortBy&&(params.sortBy=sortBy)
        setSearchParams(params)
      }
    },[sortBy,setSearchParams,searchParams,dispatch])

    console.log(sortBy)
  return (
    <div>
       <h3>FilterSort</h3>

       <div>
         <input type="checkbox"
          onChange={HandleCheckbox}
           value="Novel"
           defaultChecked={category.includes("Novel")}/>
         <label>Novel</label>
       </div>
       <div>
         <input type="checkbox"
           onChange={HandleCheckbox} 
           value="Science_Fiction"
            defaultChecked={category.includes("Science_Fiction")}/>
         <label>Science_Fiction</label>
       </div> 
        <div>
         <input type="checkbox" 
          onChange={HandleCheckbox} 
          value="Motivational" 
          defaultChecked={category.includes('Motivational')}/>
        <label>Motivational</label>
       </div> 
        <div>
         <input type="checkbox" onChange={HandleCheckbox} value="Thriller" defaultChecked={category.includes('Thriller')} />
         <label>Thriller</label>
       </div>

       <h3>Sort</h3>
       <div onChange={handleSort}>
        <input type="radio" 
         value="asc"
          name="sortBy"
          defaultChecked={sortBy=== "asc"}
           />{" "}
           Ascending
        <input type="radio"
         value="desc" 
         name="sortBy"
         defaultChecked={sortBy=== "desc"}
         />{" "}
         descending
       </div>
    </div>
  )
}

export default FilterSort
