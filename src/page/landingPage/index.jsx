import './landingPage.scss'
import { Link } from "react-router-dom";
export const LandingPage = () => {
  return (
    <div className="landingPage">
     <Link to="/dao">Dao</Link>
     <Link to="/gamefi">GameFi</Link>
     <Link to="/socialfi">SocialFi</Link>
     <Link to="/sportfi">SportFi</Link>
    </div>
  )
}