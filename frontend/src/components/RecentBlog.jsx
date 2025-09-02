import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogCard from './BlogCard';
import BlogCardList from './BlogCardList';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useNavigate } from 'react-router-dom';
import { setBlog } from '@/redux/blogSlice';
import axios from 'axios';

const tags = [
    {
        category: "Blogging"
    },
    {
        category: "Web Development"
    },
    {
        category: "Digital Marketing"
    },
    {
        category: "Cooking"
    },
    {
        category: "Photography"
    },
    {
        category: "Sports"
    },
     {
        category: "other"
    },
    
]



const RecentBlog = () => {
    const { blog } = useSelector(store => store.blog)
    const [category, setCategory] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    console.log(blog);

    useEffect(() => {
        const getAllPublsihedBlogs = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/v1/blog/get-published-blogs`, { withCredentials: true })
                if (res.data.success) {
                    dispatch(setBlog(res.data.blogs))
                }
            } catch (error) {
                console.log(error);

            }
        }
        getAllPublsihedBlogs()
    }, [])

    return (
        <div className='pb-10 bg-gray-100 dark:bg-gray-800'>
            <div className='flex flex-col items-center max-w-6xl mx-auto space-y-4'>
                <h1 className='pt-10 text-4xl font-bold '>Recent Blogs</h1>
                <hr className='w-24 text-center border-2 border-red-500 rounded-full ' />
            </div>
            <div className='flex gap-6 mx-auto max-w-7xl'>
                <div>
                    <div className='px-4 mt-10 md:px-0'>
                        {
                            blog?.slice(0, 4)?.map((blog, index) => {
                                return <BlogCardList key={index} blog={blog} />
                            })
                        }
                    </div>

                </div>
                <div className='bg-white hidden md:block dark:bg-gray-700 w-[350px] p-5 rounded-md mt-10'>
                    <h1 className='text-2xl font-semibold'>Popular categories</h1>
                    <div className='flex flex-wrap gap-3 my-5'>
                        {
                            tags.map((item, index) => {
                                return <Badge onClick={() => navigate(`/search?q=${item.category}`)} key={index} className="cursor-pointer">{item.category}</Badge>
                            })
                        }
                    </div>
                    <h1 className='text-xl font-semibold '>Subscribe to Newsletter</h1>
                    <p className='text-sm text-gray-600 dark:text-gray-400'>Get the latest posts and updates delivered straight to your inbox.</p>
                    <div className="flex flex-col max-w-md gap-2 mx-auto mt-5 sm:flex-row">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="flex w-full h-10 px-3 py-2 text-sm text-gray-300 bg-gray-200 border rounded-md dark:bg-gray-800"
                        />
                        <Button>Subscribe</Button>
                    </div>
                    <div className='mt-7'>
                        <h2 className="mb-3 text-xl font-semibold">Suggested Blogs</h2>
                        <ul className="space-y-3">
                            {[
                                '10 Tips to Master React',
                                'Understanding Tailwind CSS',
                                'Improve SEO in 2024',
                            ].map((title, idx) => (
                                <li
                                    key={idx}
                                    className="text-sm cursor-pointer dark:text-gray-100 hover:underline"
                                >
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentBlog
