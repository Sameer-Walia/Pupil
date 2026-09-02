import { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-router-dom';

function CommonHeader()
{

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div id='sahil'>
            <nav className="navbar2">
                <div className="nav-container">
                    <Link to="/home" className="nav-logo">
                        👁️_Detect
                    </Link>

                    <div className="nav-links">
                        <Link to="/about" className="nav-link">About Us</Link>
                    </div>

                    <div className="nav-buttons">
                        <Link to="/login" className="btn login">Login</Link>
                        <Link to="/signup" className="btn signup">Sign Up</Link>
                    </div>

                    <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {isOpen ?
                    <div className="mobile-menu">
                        <Link to="/aboutus" className="mobile-link" onClick={() => setIsOpen(false)}>About Us</Link>

                        <div className="mobile-buttons">
                            <Link to="/login" className="btn mobile-login" onClick={() => setIsOpen(false)}>Login</Link>
                            <Link to="/signup" className="btn mobile-signup" onClick={() => setIsOpen(false)}>Sign Up</Link>
                        </div>
                    </div> : null
                }
            </nav>
        </div>
    )
}

export default CommonHeader
