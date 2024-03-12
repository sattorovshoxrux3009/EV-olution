import './Navbar.css'

const navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">EV-olution</div>
      <ul className="navbar-menu">
        <li>Home</li>
        <li>Explore</li>
        <li>About</li>
        <li className='navbar-contact'>Contact</li>
      </ul>
    </div>
  )
}

export default navbar