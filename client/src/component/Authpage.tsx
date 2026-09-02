import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';
import Signupform from './Signupform';
import Loginform from './Loginform';


function Authpage()
{

    const location = useLocation();
    const path = location.pathname

    // Determine the active button based on the current URL path
    const activeButton = path === "/signup" ? "signup" : "login";

    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-6 col-12 ">
                        <img src={`assets/images/login.jpg`} alt="" className="img-fluid images " />
                    </div>
                    <div className="col-md-6 col-12 text-center mt-5">

                        <div className={`containerdiv mt-5 `}>
                            <Link
                                to="/login"
                                className={`link ${activeButton === "login" ? "active" : "inactive"}`}
                                style={{ fontSize: "0.9rem" }}
                            >
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                className={`link ${activeButton === "signup" ? "active" : "inactive"}`}
                                style={{ fontSize: "0.9rem" }}
                            >
                                Register
                            </Link>
                        </div>

                        {
                            activeButton === "signup" ?
                                <>
                                    <Signupform />
                                </> : <Loginform />
                        }

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Authpage
