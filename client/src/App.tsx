import { ToastContainer } from 'react-toastify'
import './App.css'
import CommonHeader from './component/CommonHeader'
import Siteroutes from './component/Siteroutes'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, Rootstate } from './store'
import Header from './component/Header'
import { useEffect } from 'react'
import { login } from './ReduxSlice/authslice'
import Cookies from 'universal-cookie'

function App()
{

  const { isLoggedIn } = useSelector((state: Rootstate) => state.auth)
  const dispatch = useDispatch<AppDispatch>()
  const usercokkie = new Cookies()

  useEffect(() =>
  {
    const data = sessionStorage.getItem("userdata");
    if (data)
    {
      dispatch(login(JSON.parse(data)));
    }
  }, []);

  useEffect(() =>
  {
    const cookieUser = usercokkie.get("staysignin");
    if (cookieUser)
    {
      dispatch(login(cookieUser))
      sessionStorage.setItem("userdata", JSON.stringify(cookieUser));
    }
  }, []);

  return (
    <>
      {
        isLoggedIn === false ? <CommonHeader /> : <Header />
      }
      <Siteroutes />
      <ToastContainer theme="colored" />
    </>
  )
}

export default App
