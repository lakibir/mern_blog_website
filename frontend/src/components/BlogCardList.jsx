import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const BlogCardList = ({ blog }) => {
    const navigate = useNavigate()
    const date = new Date(blog.createdAt)
    const formattedDate = date.toLocaleDateString("en-GB");
    return (
        <div className="flex flex-col p-5 mt-6 transition-all bg-white border shadow-lg dark:bg-gray-700 dark:border-gray-600 md:flex-row md:gap-10 rounded-2xl">
            <div>
            <img src={blog.thumbnail} alt="" className='rounded-lg md:w-[300px] hover:scale-105 transition-all' />
            {/* <p className="mt-2 text-xs">
                By {blog.author.firstName} | {blog.category} | {formattedDate}
            </p> */}

            </div>
            <div>
                <h2 className="mt-3 text-2xl font-semibold md:mt-1">{blog.title}</h2>
                <h3 className='mt-1 text-gray-500 '>{blog.subtitle}</h3>
                <Button onClick={() => navigate(`/blogs/${blog._id}`)} className="px-4 py-2 mt-4 text-sm rounded-lg ">
                    Read More
                </Button>
            </div>
        </div>
    )
}

export default BlogCardList
