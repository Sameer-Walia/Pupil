import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Footer from "./Footer";

function ForgotPassword()
{

    const [email, setemail] = useState<string>("");
    const [loading, setloading] = useState<boolean>(false);

    async function handlesubmit(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault()
        try
        {
            setloading(true)
            const resp = await axios.get(`${import.meta.env.VITE_API_URL}/api/forgotpassword?un=` + email)
            if (resp.data.statuscode === 1)
            {
                toast.success("Mail sent. Please check your email to reset Password")
            }
            else if (resp.data.statuscode === 3)
            {
                toast.warn("Incorrect Username")
            }
            else
            {
                toast.error("Some Problem Occured")
            }
        }
        catch (e: any)
        {
            toast.error("Error Occured " + e.message)
        }
        finally
        {
            setloading(false)
        }
    }

    useEffect(() =>
    {
        document.title = "Forgot Password";
    }, []);

    return (
        <>
            <h2 className="form-heading">🔐 Forgot Password</h2>

            <form className="register-form mt-5" onSubmit={handlesubmit}>

                <div className="input-container mt-4 ">

                    <div className="input-container mt-4 ">

                        <input type="email" name="useremail" placeholder="" className="input-field" onChange={(e) => setemail(e.target.value)} required />
                        <label className="input-label">
                            <span><i className="fa-solid fa-envelope" /></span><span>Email</span>
                        </label>
                    </div>
                </div><br />
                {
                    loading ?
                        <div className="loader-container mt-2">
                            <img src="assets/images/loader.gif" alt="loader" className="loader" />
                        </div> : <input type="submit" className="register-button" value="Submit" />
                }

            </form><br /><br /><br />
            <Footer />
        </>
    )
}
export default ForgotPassword;