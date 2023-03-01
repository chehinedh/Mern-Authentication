import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <Link to ="/login">Login</Link>
          <Link to ="/signup">Sign Up</Link>
        </nav>
      </div>
    </header>
  )
}

export default Navbar