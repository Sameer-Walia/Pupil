import { useRef, useEffect, useState } from "react";
import Webcam from "react-webcam";
import axios from "axios";

function Pupil_detection()
{
    const webcamRef = useRef<Webcam>(null);
    const [alert, setAlert] = useState<boolean>(false);

    const captureAndSend = async () =>
    {
        if (!webcamRef.current) return;

        const imageSrc = webcamRef.current.getScreenshot();
        if (!imageSrc) return;

        const res = await axios.post("http://localhost:4444/detect-eyes", {
            image: imageSrc,
        });

        setAlert(!res.data.eyesDetected);
    };

    // It runs captureAndSend() every 1.5 seconds automatically while the component is on screen.
    // 1.5 sec → capture webcam frame → send to backend
    // 3.0 sec → capture → send
    // 4.5 sec → capture → send

    useEffect(() =>
    {
        const interval = setInterval(captureAndSend, 1500);
        return () => clearInterval(interval);
    }, []);

    // When this component is removed from the screen, STOP the interval
    // Without this: Interval keeps running , Memory leak , Backend keeps getting requests , Webcam keeps capturing even after leaving page

    return (
        <div style={{ textAlign: "center", marginTop: "120px" }}>
            <h2 className="form-heading mb-5">👁️ Eye Attention Monitor</h2>
            <Webcam
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={400}
            />

            {alert && (
                <div style={{ color: "red", fontSize: "20px", marginTop: "10px" }}>
                    ⚠ Eyes not on screen!
                </div>
            )}
        </div>
    );
}

export default Pupil_detection;

                    <img src="assets/images/pupil_detection.png" alt="loader" className="loader" />

