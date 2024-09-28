import { useEffect } from "react"
import "./App.css"
import OpenRoute from "./components/OpenRoute"
import PrivateRoute from "./components/PrivateRoute"
import { useDispatch, useSelector } from "react-redux"
import { Route, Routes, useNavigate } from "react-router-dom"
import LiveScores from "./pages/LiveScores"
import News from "./pages/News"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Rankings from "./pages/Rankings"
import Schedules from "./pages/Schedules"
import Teams from "./pages/Teams"
import Chat from "./pages/Chat"
import Error from "./pages/Error"
import SignupForm from "./pages/SignUp"
import PlayerStats from "./pages/PlayerStats"



//Notes: Open Route is for pages, that has to be visible when user is not logged in, but invisible when user is logged in
//Private Route exact opposite of Open Routes

//Normal Routes, whether user is logged in or not, it will be same like about us page

function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const token = JSON.parse(localStorage.getItem("token"))
      // dispatch(getUserDetails(token, navigate))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="flex min-h-screen w-screen flex-col font-inter theme-bg">
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/livescores" element={<LiveScores/>} /> */}
        {/* <Route path="/news" element={<News/>}/>
        <Route path="/rankings" element={<Rankings/>} />
        <Route path="/schedules" element={<Schedules/>} />
        <Route path="/teams" element={<Teams/>} />
        <Route path="/login"element={<Login />}/>
        <Route path="/player/:playerId"element={<PlayerStats/>}/> */}
        {/* <Route path="/signup"element={<OpenRoute><SignupForm /></OpenRoute>}/> */}
        {/* <Route path="/signup"element={<SignupForm />}/> */}
        <Route path="/chat"element={<PrivateRoute><Chat /></PrivateRoute>}/>
        {/* <Route path="forgot-password" element={ <OpenRoute><ForgotPassword /></OpenRoute>}/> */}
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App


