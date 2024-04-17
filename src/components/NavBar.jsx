import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to='/' className="navitem">Home</Link>
            <Link to='/popular' className="navitem">Popular</Link>
            <Link to='/airing' className="navitem">Airing</Link>
        </div>
    )
}

export default NavBar