import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { LogOut } from "../ReduxSlice/authslice";
import Footer from "./Footer";

function ResetPassword()
{

    const dispatch = useDispatch()

    const [newpass, setnewpass] = useState<string>("");
    const [cnewpass, setcnewpass] = useState<string>("");
    const [flag, setflag] = useState<boolean>(false);
    const [loading, setloading] = useState<boolean>(false);
    const [params] = useSearchParams()
    const token = params.get("code")
    const navigate = useNavigate()

    useEffect(() =>
    {
        verifytoken()
    }, [token])

    async function verifytoken()
    {
        try
        {
            const resp = await axios.get(`${import.meta.env.VITE_API_URL}/api/checktoken?token=` + token)
            if (resp.data.statuscode === 1)
            {
                setflag(true)
            }
            else if (resp.data.statuscode === 0)
            {
                setflag(false)
            }
            else if (resp.data.statuscode === 2)
            {
                setflag(false)
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
    }

    useEffect(() =>
    {
        document.title = "Reset Password";
    }, []);

    async function resetpassword(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault()
        try
        {
            setloading(true)
            if (newpass === cnewpass)
            {
                const apidata = { newpass, token }
                const resp = await axios.put(`${import.meta.env.VITE_API_URL}/api/resetpassword`, apidata)
                if (resp.data.statuscode === 1)
                {
                    toast.success("Password Reset Successfully")
                    sessionStorage.clear()
                    dispatch(LogOut())
                    navigate("/login")
                    toast.info("You have been logged out , login with new password")
                }
                else if (resp.data.statuscode === 0)
                {
                    toast.warn("Password Not Reset Successfully")
                }
                else
                {
                    toast.error("Some Problem Occured")
                }
            }
            else
            {
                toast.warn("New Password and Confirm Mew Password doesnot Match")
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

    return (
        <>
            <h2 className="form-heading ">Reset Password</h2>
            {
                flag === true ?
                    <div>

                        <form onSubmit={(e) => resetpassword(e)} className="register-form mt-5">
                            <div className="input-container mt-4 ">
                                <input type="password" name="userpass" placeholder="" onChange={(e) => setnewpass(e.target.value)} className="input-field" required />

                                <label className="input-label">
                                    <span><i className="fa-solid fa-lock" /></span><span>New Password</span>
                                </label>
                            </div>
                            <div className="input-container mt-4 ">
                                <input type="password" name="userpass" placeholder="" onChange={(e) => setcnewpass(e.target.value)} className="input-field" required />

                                <label className="input-label">
                                    <span><i className="fa-solid fa-lock" /></span><span>Confirm New Password</span>
                                </label>
                            </div>

                            {
                                loading ?
                                    <div className="loader-container mt-2">
                                        <img src="assets/images/loader.gif" alt="loader" className="loader" />
                                    </div> : <input type="submit" className="register-button" value="Submit" />
                            }

                        </form>
                    </div> : <h2 className="text-center mt-5 mb-5">Invalid Token or Token expired</h2>
            }
            <br /><br />
            <Footer />
        </>
    )
}
export default ResetPassword;