import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import { HiOutlineMenu } from 'react-icons/hi'

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const location = useLocation();

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

  return ( 
    <div className="navbar" id={isOpen ? 'open' : 'close'}>
        <div className='toggleButton'>
            <button onClick={() => {setIsOpen((prev) => !prev)}}>
                <HiOutlineMenu />
            </button>
        </div>
        <div className="links">
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/experience'>Experience</Link>
        </div>
    </div>
  )
}

export default Navbar