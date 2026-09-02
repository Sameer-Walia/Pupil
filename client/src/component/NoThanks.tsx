import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import Footer from './Footer';

function NoThanks()
{

    const [email, setemail] = useState<string>("");
    const [showForm, setShowForm] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    async function resendMail(e: React.FormEvent<HTMLFormElement>)
    {
        e.preventDefault()
        try 
        {
            setLoading(true);
            const data = { email }
            const resp = await axios.post<{ statuscode: number; msg?: string }>(`${import.meta.env.VITE_API_URL}/api/resendmail`, data);

            if (resp.data.statuscode === 1)
            {
                toast.success("Activation mail resent successfully! , please check your mail");
                setemail("")
            }
            else if (resp.data.statuscode === 2)
            {
                toast.warn("Activation mail not resent successfully!  , error while resending activation mail");
            }
            else if (resp.data.statuscode === 0)
            {
                toast.warn(resp.data.msg)
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
            setLoading(false);
        }
    };

    return (
        <div id="nothanks">
            <div className="login mt-5 marg">
                <div className="container">

                    {
                        showForm ? <h2 className='form-heading'>Resend Activation Mail Form</h2> :
                            <button onClick={() => setShowForm(true)} className="btn btn-primary marg">
                                Resend Activation Mail
                            </button>
                    }

                    {
                        showForm ?
                            <form className="register-form mt-5" onSubmit={resendMail}>

                                <div className="input-container mt-5 ">

                                    <input type="email" name="useremail" placeholder="" value={email} onChange={(e) => setemail(e.target.value)} className="input-field" required />

                                    <label className="input-label">
                                        <span><i className="fa-solid fa-envelope" /></span><span>Email</span>
                                    </label>

                                </div>


                                {loading ? (
                                    <div className="resend-loader">
                                        <img src="images/loader.gif" alt="Loading..." />
                                    </div>
                                ) : (
                                    <button type="submit" className="register-button">
                                        Resend Mail
                                    </button>
                                )}

                            </form>
                            : null
                    }<br /><br />

                    <p><strong>Thank you!</strong></p><br />

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NoThanks

