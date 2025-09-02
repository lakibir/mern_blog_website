import React from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'

const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    const date = new Date(blog.createdAt)
    const formattedDate = date.toLocaleDateString("en-GB");

    return (
        <div className="p-5 transition-all bg-white border shadow-lg dark:bg-gray-800 dark:border-gray-600 rounded-2xl hover:scale-105">
            {/* Blog thumbnail */}
            {blog.thumbnail && (
                <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="object-cover w-full h-48 rounded-lg"
                />
            )}

            {/* Author + category + date */}
            <p className="mt-2 text-sm text-gray-500">
                By {blog.author?.firstName || "Unknown"} | {blog.category} | {formattedDate}
            </p>

            {/* Title */}
            <h2 className="mt-1 text-xl font-semibold">{blog.title}</h2>

            {/* Subtitle */}
            {blog.subtitle && (
                <h3 className="mt-1 text-gray-500">{blog.subtitle}</h3>
            )}

            {/* Description preview (safe HTML, truncated) */}
            {blog.description && (
                <div
                    className="mt-3 text-gray-700 line-clamp-3"
                    dangerouslySetInnerHTML={{
                        __html:
                            blog.description.length > 200
                                ? blog.description.substring(0, 200) + "..."
                                : blog.description,
                    }}
                />
            )}

            {/* Read More button */}
            <Button
                onClick={() => navigate(`/blogs/${blog._id}`)}
                className="px-4 py-2 mt-4 text-sm rounded-lg"
            >
                Read More
            </Button>
        </div>
    )
}

export default BlogCard
