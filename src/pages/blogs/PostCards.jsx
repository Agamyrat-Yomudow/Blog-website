import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchBlogs} from '../../redux/features/blogs/blogsSlice'
import Card from './Card'

const PostCards = () => {
  const {isLoading,isError,blogs,error} = useSelector((state) => state.blogs)
  const dispatch = useDispatch()
  useEffect(() => {
    
    dispatch(fetchBlogs())
  
  
  }, [dispatch]);
  


/*pagination*/
const [currentPage,setCurrentPage]=useState(1)
const blogsPerPage=5;
const startIndex=((currentPage-1)*blogsPerPage)
const endIndex=currentPage*blogsPerPage;
const PaginatedBlogs=blogs.slice(startIndex,endIndex)
const handlePageChange =(nextPage)=>{
  setCurrentPage(nextPage)
}



 
  return (
    <div className="w-full lg:w-2/3">
         

          
         {
          !isError && !isLoading && PaginatedBlogs?.length>0 ?(<div>
            {
              PaginatedBlogs.map((blog,index)=>(
                <Card blog={blog} key={index}/>
              ))
            }
          </div>):
          <div>no blog found</div>
         }
         <div className='gap-2 flex '>
          <button disabled={currentPage===1} onClick={()=>handlePageChange(currentPage-1)} className='bg-red-500 rounded px-2'>Previous</button>
          <span className='font-semibold text-lg'>{currentPage}</span>
          <button onClick={()=>handlePageChange(currentPage+1)} className='bg-indigo-700 rounded px-2'>Next</button>
         </div>
         

        </div>
  )
}

export default PostCards
