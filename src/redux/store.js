import { configureStore } from '@reduxjs/toolkit'
import blogsReducer from './features/blogs/blogsSlice'
import blogReducer from './features/SingleBlog/blogSlice'
import FilterReducer from './features/filter/FilterSlice'

export const store = configureStore({
  reducer: {
    blogs:blogsReducer,
    blog:blogReducer,
    filter:FilterReducer
  },
})