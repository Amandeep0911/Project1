import React from 'react'
import { Link } from 'react-router-dom'
import img from '../assets/Aman.jpg';

const Navbar = () => {

    return (
        <div>
            <div className='flex justify-center items-center'>
                <img src={img} alt="" className="mx-auto rounded-full mt-4 shadow-md w-20 h-30"/>
            </div>
            <div className="p-15 text-center">
                <Link className='p-5 text-red-900 bg-purple-400' to="/">Home</Link>
                <Link className='p-5 text-blue-900 bg-purple-400' to="/about">About</Link>
                <Link className='p-5 text-green-900 bg-purple-400' to="/contact">Contact</Link>
                <Link className='p-5 text-blue-900 bg-purple-400' to="/Login">Login</Link>
                <Link className='p-5 text-blue-900 bg-purple-400' to="/Registration">Registration</Link>

            </div>

        </div>
    )
}

export default Navbar
