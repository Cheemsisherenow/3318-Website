
// FIX UP MOBILE HEADER :SOB:
import { navLinks } from "../Constants"
import {useState} from "react"
const Header = () => {
    const [dropdown, setDropdown] = useState(false);
    
    const toggleDropdown = () =>{
        setDropdown((dropdown)=> !dropdown)
    };

    return(
        <header>
            <nav>
                <div className="desktop-nav">
                    <img className="h-10 w-11" src="/3318-logo.png" alt="3318 logo"/>
                    <ul>
                        {navLinks.map(({label})=>(
                            <li key = {label} className="relative group">
                                <a  href = {label}> {label}</a>
                                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                            </li>
                            
                        ))}
                        
                    </ul>
                </div>
                
                <div className="mobile-nav">
                    <div className="wrapper">
                        <img className="relative h-10 w-11" src="/3318-logo.png" alt="3318 logo"/>            
                        <button className="text-white" onClick={toggleDropdown}> ☰ </button>
                    </div>
                    <ul className={` absolute p-2  w-[40%] right-0 space-y-2 bg-neutral-400 transition-transform duration-500 ease-in-out ${dropdown ? "translate-x-0" : "translate-x-full"}`}>
                            {navLinks.map(({label})=>(
                                <li key = {label} className="relative group text-white">
                                    <a  href = {label}> {label}</a>
                                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white scale-x-0 origin-center transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                                </li>
                                
                            ))}
                            
                        </ul>
                </div>
                
                                    
            </nav>

        </header>
    )
}
export default Header