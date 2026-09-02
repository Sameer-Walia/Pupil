import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios'
import { toast } from 'react-toastify'

interface ValidationErrors
{
    name?: string;
    address?: string;
    phone?: string;
    email?: string;
    password?: string;
    passmatch?: string;
    terms?: string;
}

interface SignupResponse
{
    statuscode: number;
    msg?: string;
}

function Signupform()
{

    const [name, setname] = useState<string>("");
    const [address, setaddress] = useState<string>("");
    const [role, setrole] = useState<string>("");
    const [phone, setphone] = useState<string>("");
    const [email, setemail] = useState<string>("");
    const [pass, setpass] = useState<string>("");
    const [cpass, setcpass] = useState<string>("");
    const [verrors, setverrors] = useState<ValidationErrors>({});
    const [terms, setterms] = useState<boolean>(false);
    const [loading, setloading] = useState<boolean>(false);

    const navi = useNavigate();

    useEffect(() =>
    {
        document.title = "Register Page"
    }, [])

    async function onsignup(e: React.FormEvent<HTMLFormElement>) 
    {
        e.preventDefault()
        if (validateForm() === true)
        {
            if (terms === true) 
            {
                if (pass === cpass) 
                {
                    const reqdata = { name, address, role, phone, email, pass }
                    try 
                    {
                        setloading(true)
                        const resp = await axios.post<SignupResponse>(`${import.meta.env.VITE_API_URL}/api/signup`, reqdata)
                        if (resp.data.statuscode === 1)
                        {
                            navi("/thanks")
                            toast.success("Signup Successfull , check your email to activate your account")
                        }
                        else if (resp.data.statuscode === 2)
                        {
                            navi("/nothanks")
                            toast.warn("Signup Successfull , error while sending activation mail")
                        }
                        else if (resp.data.statuscode === 0)
                        {
                            toast.warn(resp.data.msg)
                        }
                        else
                        {
                            toast.error("Some problem occured")
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
                else
                {
                    toast.error("Password Doesnot Match")
                }
            }
            else
            {
                toast.warn("Please accept terms and condition")
            }
        }
    }

    function validateForm(): boolean
    {
        const errors: ValidationErrors = {};

        if (name.length < 3)
        {
            errors.name = "Name must be at least 3 characters long";
        }
        if (address.length < 3)
        {
            errors.address = "Address must be at least 3 characters long";
        }
        if (!/^\d{10}$/.test(phone))
        {
            errors.phone = "Phone must be a 10-digit number";
        }

        if (!/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/.test(email))
        {
            errors.email = "Invalid email format";
        }

        if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{6,}/.test(pass))
        {
            errors.password = "Weak password";
        }

        if (pass !== cpass)
        {
            errors.passmatch = "Passwords do not match";
        }

        if (!terms)
        {
            errors.terms = "Please accept terms and conditions";
        }

        setverrors(errors);
        if (Object.keys(errors).length > 0) 
        {
            return false
        }
        else
        {
            return true
        }
    }

    return (
        <div>
            <form name="form1" onSubmit={onsignup} className="register-form mb-5" >

                <div className="input-row mt-5">
                    <div className="input-container col">
                        <input type="text" name="username" placeholder="" className="input-field" onChange={(e) => setname(e.target.value)} required />
                        <label className="input-label">
                            <span><i className="fa-solid fa-user" /></span><span>Name</span>
                        </label>
                        {verrors.name ? <span>{verrors.name}</span> : null}
                    </div>

                    <div className="input-container col">
                        <input type="text" name="userrollno" placeholder="" className="input-field" onChange={(e) => setaddress(e.target.value)} required />
                        <label className="input-label">
                            <span><i className="fa-solid fa-id-card" /></span><span>Address</span>
                        </label>
                        {verrors.address ? <span>{verrors.address}</span> : null}
                    </div>
                </div>

                <div className="select-container mt-4 col">
                    <select
                        name="department"
                        className="select-box"
                        required
                        onChange={(e) => setrole(e.target.value)}
                    >
                        <option value="">Choose Role</option>
                        <option value="Browse a Task">Browse a Task</option>
                        <option value="Post a Task">Post a Task</option>
                    </select>
                    <label className="select-label">
                        <span><i className="fa-solid fa-school" /></span><span>Role</span>
                    </label>
                </div>


                <div className="input-row mt-4">

                    <div className="input-container col">
                        <input type="tel" name="usernumber" placeholder="" className="input-field" onChange={(e) => setphone(e.target.value)} minLength={10} maxLength={10} required />
                        <label className="input-label">
                            <span><i className="fa-solid fa-phone" /></span><span>Phone</span>
                        </label>
                        {verrors.phone ? <span>{verrors.phone}</span> : null}
                    </div>
                </div>

                <div className="input-container mt-4 ">

                    <input type="email" name="useremail" placeholder="" className="input-field" onChange={(e) => setemail(e.target.value)} required />
                    <label className="input-label">
                        <span><i className="fa-solid fa-envelope" /></span><span>Email</span>
                    </label>
                    {verrors.email ? <span>{verrors.email}</span> : null}
                </div>

                <div className="input-container mt-4 ">

                    <input type="password" name="password" placeholder="" className="input-field" onChange={(e) => setpass(e.target.value)} required />
                    {/* pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" */}
                    <label className="input-label">
                        <span><i className="fa-solid fa-lock" /></span><span>Password</span>
                    </label>
                    {verrors.password ? <span>{verrors.password}</span> : null}

                </div>
                <div className="input-container mt-4 ">

                    <input type="password" name="confirmpass" placeholder="" className="input-field" onChange={(e) => setcpass(e.target.value)} required />
                    <label className="input-label">
                        <span><i className="fa-solid fa-lock" /></span><span>Confirm Password</span>
                    </label>
                    {verrors.passmatch ? <span>{verrors.passmatch}</span> : null}

                </div>
                <label className="checkbox mt-4">
                    <input type="checkbox" name="cbx1" onChange={(e) => setterms(e.target.checked)} /><i> </i>I accept the terms and conditions
                    {verrors.terms ? <span>{verrors.terms}</span> : null}
                </label>

                {
                    loading ?
                        <div className="loader-container mt-2">
                            <img src="assets/images/loader.gif" alt="loader" className="loader" />
                        </div> : <input type="submit" className="register-button" value="Submit" />
                }

                <p className="register-text">
                    Already registered? <Link to="/login" className="login-link" >Login</Link>
                </p>

            </form>

        </div>
    )
}

export default Signupform
