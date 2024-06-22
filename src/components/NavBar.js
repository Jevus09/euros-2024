import React from 'react';
import { IoHomeOutline } from "react-icons/io5";
import { FaGlobeEurope } from "react-icons/fa";
import { MdOutlineSouthAmerica } from "react-icons/md";

const NavBar = () => {
    return (
        <div className="navbar bg-base-100 flex justify-center">
            <div className="navbar-center ">
                <ul className="menu menu-horizontal gap-8 px-1 text-4xl md:text-2xl bg-black text-white rounded-lg opacity-60">
                    <li><a href='/'  ><IoHomeOutline  /></a></li>                                        
                    <li><a href='/euros'><FaGlobeEurope /></a></li>
                    <li><a href='/copa-america'><MdOutlineSouthAmerica /></a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;