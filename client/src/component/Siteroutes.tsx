import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Authpage from './Authpage'
import Thanks from './Thanks'
import ActivateAccount from './ActivateAccount'
import NoThanks from './NoThanks'
import ForgotPassword from './ForgotPassword'
import ResetPassword from './ResetPassword'
import ChangePassword from './ChangePassword'
import Pupil_detection from './Pupil_detection'
import Profile from './Profile'
import Profile_update from './Profile_update'


function Siteroutes()
{
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<Authpage />} />
                <Route path="/thanks" element={<Thanks />} />
                <Route path="/nothanks" element={<NoThanks />} />
                <Route path="/activateaccount" element={<ActivateAccount />} />
                <Route path="/login" element={<Authpage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/updateprofile" element={<Profile_update />} />
                <Route path="/forgotpassword" element={<ForgotPassword />} />
                <Route path="/resetpassword" element={<ResetPassword />} />
                <Route path="/changepassword" element={<ChangePassword />} />
                <Route path="/pupil_detection" element={<Pupil_detection />} />
            </Routes>
        </div>
    )
}

export default Siteroutes
