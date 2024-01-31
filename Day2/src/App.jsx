import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
// import Hello_World from "./components/Hello_World"
import Home from "./pages/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import UserPage from "./pages/Userpage"
import Contact from "./pages/Contact"
import CourseCard from "./components/CourseCard"
import Profile from "./pages/Profile"
import Admin from "./pages/Admin"
import CollegeList from "./pages/CollegeList"
import LeaderboardAdmin from "./pages/LeaderBoardAdmin"
import Leaderboard from "./pages/LeaderBoard"
import Registration from "./pages/Registration"


function App() {

  return (
    <Router>
      
      <Routes>
        <Route path = "/" element = {<Home/>}/>
        <Route path = "/about" element = {<About/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/userpage" element={<UserPage/>}/>
        <Route path ="/contact" element={<Contact/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/course" element={<CourseCard/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/CollegeList" element={<CollegeList/>}/>
        <Route path="/leaderboardadmin" element={<LeaderboardAdmin/>}/>
        <Route path="/leaderboarduser" element={<Leaderboard/>}/>
        <Route path="/registration" element={<Registration/>}/>
        
      </Routes>
    </Router>
    // <Hello_World />
  )
}

export default App