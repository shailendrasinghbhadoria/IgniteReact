import React, { useState, useContext } from 'react';
import LOGO from '../../food-logo.png'
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';

const Header =()=>{

    const [btnName, setBtName] = useState("Login")

    const onlineStatus = useOnlineStatus()

    const {loggedInUser} = useContext(UserContext)
   

    return(
        <div className='flex justify-between bg-slate-100 shadow-lg mb-8'>
            <div className='logo-container'>
                <img className='w-36' src={LOGO}/>
            </div>
            <div className='flex items-center'>
                <ul className='flex p-6'>
                    <li className='px-4'>Online Status: {onlineStatus?"🟢":"🔴"}</li>
                    <li className='px-4'><Link className='border-solid border-2 border-black border-spacing-2 p-2' to={"/"}>Home</Link></li>
                    <li className='px-4'><Link className='border-solid border-2 border-black border-spacing-2 p-2' to={"/about"}>About Us</Link></li>
                    <li className='px-4'><Link className='border-solid border-2 border-black border-spacing-2 p-2' to={"/contact"}>Contact Us</Link></li>
                    <li className='px-4'><Link className='border-solid border-2 border-black border-spacing-2 p-2' to={"/Grocery"}>Grocery</Link></li>
                    <li className='px-4'>Cart</li>
                    <button className='px-2 py-1 bg-blue-300' onClick={()=>
                       btnName==="Login"?setBtName("Logout"):setBtName("Login")}
                    >
                    {btnName}</button>
                    <li className='px-4 font-bold'>{loggedInUser}</li>
                </ul>

            </div>
        </div>

    )
}


export default Header;