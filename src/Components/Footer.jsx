import React from 'react'
import { navLinks } from '../Constants'
const Footer = () => {
  return (
    <footer id="footer" className="relative bg-black bottom-0">
        <div className="text-white w-full h-[10vh] flex justify-between items-center p-5">
            <p>Copyright © 2026. XXXXX RoboDragons</p>
            <img className="h-10 w-11" src="/3318-logo.png" alt="3318-logo"/> 
            </div>

                    <hr className='border border-white w-[50%] m-2'/>
                    <ul className="flex items-center h-[10vh] p-5">
                    {navLinks.map(({label})=>(
                            <li key = {label} className="relative group">
                                <a  href = {label}> {label}</a>
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                            </li>
                            
                        ))}
                    </ul>
            
    </footer>
  )
}

export default Footer
