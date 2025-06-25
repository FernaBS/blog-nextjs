import { sortedBlogs } from '@/utils/blogs/sortedBlogs.utils'
import { Blog } from '@/models/blogs/blog.model'
import React from 'react'
import BlogLayoutOne from './BlogLayoutOne'
import BlogLayoutTwo from './BlogLayoutTwo'

type Props = {
    allBlogs: Blog[]
}

const FeaturedPosts = ({ allBlogs }: Props) => {
    const sortedAllBlogs = sortedBlogs(allBlogs); 

    return (
        <section className="flex flex-col justify-center items-center w-[95%] mt-32 px-24">
            <h2 className='w-full inline-block text-4xl font-bold'>Featured Posts</h2>
            <div className='grid grid-cols-2 grid-rows-2 w-full h-[70vh] mt-10 mb-10 gap-5'>
                <article className='relative col-span-1 row-span-2 rounded-3xl bg-gradient-to-t from-black from-0% to-transparent cursor-pointer'>
                    <BlogLayoutOne blog={sortedAllBlogs[1]} />
                </article>
                <article className='relative col-span-1 row-span-1'>
                    <BlogLayoutTwo blog={sortedAllBlogs[2]} />
                </article>
                <article className='relative col-span-1 row-span-1'>
                    <BlogLayoutTwo blog={sortedAllBlogs[3]} />
                </article>
            </div>
        </section>
    )
}

export default FeaturedPosts