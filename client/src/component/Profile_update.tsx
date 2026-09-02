import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import type { Rootstate } from "../store";
import Footer from "./Footer";

interface User
{
    name: string
    phone: string
    address: string
}

function Profile_update()
{
    const navigate = useNavigate();

    const [name, setname] = useState<string>("");
    const [phone, setphone] = useState<string>("");
    const [address, setaddress] = useState<string>("");
    const [loading, setloading] = useState<boolean>(false);

    const { email } = useSelector((state: Rootstate) => state.auth)

    useEffect(() =>
    {
        if (email) 
        {
            fetchoneuser()
        }
    }, [email])

    useEffect(() =>
    {
        document.title = "Update Profile"
    }, [])

    async function fetchoneuser()
    {
        setloading(true)
        try
        {
            const resp = await axios.get<{ statuscode: number, oneuserdata?: User }>(`${import.meta.env.VITE_API_URL}/api/fetchoneuserdata/${email}`)

            if (resp.data.statuscode === 1 && resp.data.oneuserdata) 
            {
                const user: User = resp.data.oneuserdata;
                setname(user.name);
                setphone(user.phone);
                setaddress(user.address);
            }
            else if (resp.data.statuscode === 0)
            {
                toast.error("Cannot Fetch User Data")
            }
            else
            {
                toast.error("Some Problem Occured")
            }
        }
        catch (e: any)
        {
            toast.error(e.message)
        }
        finally
        {
            setloading(false)
        }
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault();
        setloading(true)
        try 
        {
            const updateuserprofile = { name, phone, email, address }

            const resp = await axios.put<{ statuscode: number }>(`${import.meta.env.VITE_API_URL}/api/updateuserprofile`, updateuserprofile)

            if (resp.data.statuscode === 1) 
            {
                toast.success("User Profile Updated Successfully")
                navigate("/profile");
            }
            else if (resp.data.statuscode === 0) 
            {
                toast.error("User Profile Cannot Updated Successfully. Do some changes for update")
            }
            else
            {
                toast.error("Some error occured")
            }
        }
        catch (e: any) 
        {
            toast.error(e.message)
        }
        finally
        {
            setloading(false)
        }
    };

    return (

        <div id="update">
            <form onSubmit={handleSubmit} className="edit-form mt-5">
                <div className="edit-card">
                    <h2 className="edit-title">✏️ Update Profile</h2>

                    <div className="form-body">
                        <div className="form-group">
                            <label className="form-label">🧑 Name</label>
                            <input type="text" placeholder="Full Name" className="form-input" value={name} onChange={(e) => setname(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">📧 Email</label>
                            <input type="email" value={email || ""} className="form-input disabled" />
                        </div>

                        <div className="form-group">
                            <label className="form-label">📞 Phone Number</label>
                            <input type="text" placeholder="Phone Number" className="form-input" value={phone} onChange={(e) => setphone(e.target.value)} required />
                        </div>

                        <div className="form-group">
                            <label className="form-label">🎪 Address</label>
                            <input type="text" placeholder="Address / Location" className="form-input" value={address} onChange={(e) => setaddress(e.target.value)} required />
                        </div>

                        {
                            loading ?
                                <div className="loader-container mt-2">
                                    <img src="assets/images/loader.gif" alt="loader" className="loader" />
                                </div> :
                                <button type="submit" className="btn primary-btn" >
                                    ✅ Update Profile
                                </button>
                        }

                    </div>
                </div>
            </form>
            <Footer />
        </div>


    );
}

export default Profile_update;


