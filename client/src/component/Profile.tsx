import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaEdit, FaUniversity } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import type { Rootstate } from "../store";
import Footer from "./Footer";

interface User
{
    name: string
    phone: string
    address: string
}

function Profile()
{
    const navigate = useNavigate();

    const [name, setname] = useState<string>("");
    const [phone, setphone] = useState<string>("");
    const [address, setaddress] = useState<string>("");

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
        document.title = "Profile Page"
    }, [])


    async function fetchoneuser()
    {
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
                toast.error("Cannot Fetch User Data. Please Login again")
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

    }

    return (
        <>
            <div className="profile-wrapper ">
                <div className="profile-container">
                    <div className="profile-card">
                        {/* Left Section */}
                        <div className="profile-left">
                            <h2 className="profile-name">{name}</h2>

                            <motion.button
                                className="edit-btn"
                                onClick={() => navigate("/updateprofile")}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaEdit className="edit-icon" />
                                Edit Profile
                            </motion.button>
                        </div>

                        {/* Right Section */}
                        <div className="profile-right">
                            <h2 className="profile-title">User Data</h2>

                            <div className="profile-grid">
                                <div className="info-item">
                                    <FaEnvelope className="info-icon email" />
                                    <div>
                                        <p className="info-label">Email</p>
                                        <p className="info-text">{email}</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <FaPhone className="info-icon phone" />
                                    <div>
                                        <p className="info-label">Phone</p>
                                        <p className="info-text">{phone}</p>
                                    </div>
                                </div>

                                <div className="info-item">
                                    <FaUniversity className="info-icon location" />
                                    <div>
                                        <p className="info-label">Location</p>
                                        <p className="info-text">{address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>

    );
};


export default Profile


