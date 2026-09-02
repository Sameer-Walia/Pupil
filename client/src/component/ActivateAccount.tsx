import axios from "axios";
import { useEffect, useState } from "react";
import {  useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Footer from "./Footer";

function ActivateAccount()
{

    const [msg, setmsg] = useState<string>('')
    const [params] = useSearchParams();
    const activationCode = params.get("code")
    const navigate = useNavigate()

    useEffect(() => 
    {
        if (activationCode)
        {
            activateuseraccount(activationCode);
        }
    }, [activationCode])

    async function activateuseraccount(code: string) 
    {
        try 
        {
            const apidata = { code }
            const resp = await axios.put<{ statuscode: number }>(`${import.meta.env.VITE_API_URL}/api/activateuseraccount`, apidata)

            if (resp.data.statuscode === 1) 
            {
                toast.success("Account Activated Successfully , please login now");
                navigate("/login")
            }
            else if (resp.data.statuscode === 0) 
            {
                setmsg("Error while activating Account. May be u have already activated. U can directly Login now")
            }
            else 
            {
                toast.error("Some error occured")
            }
        }
        catch (e: any) 
        {
            toast.error("Error Occured " + e.message)
        }
    }

    return (
        <>
            <div className="thanks-page">
                <div className="thanks-container">
                    <div className="thanks-content">
                        <h2 className="thanks-heading">
                            {msg}
                        </h2>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default ActivateAccount;