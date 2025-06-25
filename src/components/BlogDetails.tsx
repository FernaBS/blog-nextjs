import { Blog } from 'contentlayer/generated'
import React from 'react'
import { formattedDateToMMMMDDYYYY } from "@/utils/dates/formattedDateToMMMMDDYYYY";


const BlogDetails = ({ blog }: { blog: Blog }) => {
  
    return (
    <div className='relative flex justify-around items-center w-[90] h-auto p-5 m-10 bg-violet-500 rounded-lg'>
        <time className='text-lg font-semibold text-white'>
            {formattedDateToMMMMDDYYYY(blog.publishedAt)}
        </time>
        <span className='text-lg font-semibold text-white'>
            10 views
        </span>
        <span className='text-lg font-semibold text-white'>
            {blog.readingTime.text}
        </span>
        <span className='text-lg font-semibold text-white'>
            {`#${blog.tags[0]}`}
        </span>
    </div>
  )
}

export default BlogDetails