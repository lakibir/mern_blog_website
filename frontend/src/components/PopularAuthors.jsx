import axios from 'axios'
import React, { useEffect, useState } from 'react'
import userLogo from "../assets/user.jpg"

const PopularAuthors = () => {
    const [popularUser, setPopularUser] = useState([])
    const getAllUsers = async () => {
        try {
            const res = await axios.get(`http://localhost:5000/api/v1/user/all-users`)
            if (res.data.success) {
                setPopularUser(res.data.users)
            }
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        getAllUsers()
    }, [])
    return (
        <div>
            <div className='mx-auto max-w-7xl'>
                <div className='flex flex-col items-center space-y-4'>
                    <h1 className='pt-10 text-3xl font-bold md:text-4xl '>Popular Authors</h1>
                    <hr className='w-24 text-center border-2 border-red-500 rounded-full ' />
                </div>
                <div className='flex items-center justify-around px-4 my-10 md:px-0'>
                    {
                        popularUser?.slice(0,1)?.map((user, index) => {
                            return <div key={index} className='flex flex-col items-center gap-2'>
                                <img src={user.photoUrl || userLogo} alt=""  className='w-16 h-16 rounded-full md:w-32 md:h-32' />
                                <p className='font-semibold'>{user.firstName} {user.lastName}</p>
                            </div>

                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PopularAuthors
