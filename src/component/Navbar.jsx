import { Link } from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div id="Navbar">
            <div className='Logo'>
                <Link to="/">
                    <img src="/mainlogo.png" alt="NextStep AI Logo" />
                </Link>
            </div>

            <div className='middle-navbar'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/career-track">Career Track</Link></li>
                    <li><Link to="/ai-career-finder">AI Career Finder</Link></li>
                    <li><Link to="/resume-insights">Resume Insights</Link></li>
                </ul>
            </div>

            <div className='signin-signout'>
                <Link to="/signin"><button className='sign'>Sign In</button></Link>
                <Link to="/signout"><button className='sign'>Sign Up</button></Link>
            </div>
        </div>
    );
}

export default Navbar;
