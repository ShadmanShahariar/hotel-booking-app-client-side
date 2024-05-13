import "./navbar.css"

export const Navbar = () => {
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className="logo">HotelBookingTask</span>
            <div className="navItems">
                <button className="navButton">Register</button>
                <button className="navButton">LogIn</button>
            </div>
        </div>
    </div>
  )
}
