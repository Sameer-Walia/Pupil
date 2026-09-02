import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { Rootstate } from "../store";
import { LogOut } from "../ReduxSlice/authslice";
import Footer from "./Footer";

function ChangePassword()
{

    const { email } = useSelector((state: Rootstate) => state.auth)
    const dispatch = useDispatch();
    const [currpass, setcurrpass] = useState<string>("");
    const [newpass, setnewpass] = useState<string>("");
    const [cnewpass, setcnewpass] = useState<string>("");
    const [loading, setloading] = useState<boolean>(false);

    const navi = useNavigate();

    async function onchangepassword(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault()

        const uname = email;
        const apidata = { currpass, newpass, uname };

        try
        {
            setloading(true)
            if (currpass !== newpass)
            {
                if (newpass === cnewpass)
                {

                    const resp = await axios.put(`${import.meta.env.VITE_API_URL}/api/changepassword`, apidata);

                    if (resp.data.statuscode === 0)
                    {
                        toast.warn("Current Password Incorrect")
                    }
                    else if (resp.data.statuscode === 1)
                    {
                        toast.success("Password changed successfully");
                        dispatch(LogOut())
                        sessionStorage.clear();
                        // sessionStorage.removeItem("userdata");
                        navi("/login")
                        toast.info("You have been logged out , login with new password");
                    }
                    else
                    {
                        toast.error("Some Problem Occured")
                    }
                }
                else
                {
                    toast.info("New Password and confirm new password does not match")
                }
            }
            else
            {
                toast.info("Current Password and new Pasword are same")
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
            <div>
                <h2 className="form-heading">🔐 Change Password</h2>

                <form onSubmit={(e) => onchangepassword(e)} className="register-form mt-5">

                    <div className="input-container mt-4 ">

                        <input type="password" name="userpass" placeholder="" onChange={(e) => setcurrpass(e.target.value)} className="input-field" required />

                        <label className="input-label">
                            <span><i className="fa-solid fa-lock" /></span><span>Current Password</span>
                        </label>

                    </div>

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

                    </div><br />

                    {
                        loading ?
                            <div className="loader-container mt-2">
                                <img src="assets/images/loader.gif" alt="loader" className="loader" />
                            </div> : <input type="submit" className="register-button" value="Submit" />
                    }


                </form>

            </div><br /><br />
            <Footer />
        </>
    )
}
export default ChangePassword;