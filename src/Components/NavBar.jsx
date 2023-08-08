import { Link } from "react-router-dom";


export default function NavBar() {
    return (
    <nav className="navbar">
      <div className="navbar-logo">Puppy Bowl 2023</div>
      <div className="navbar-links">
        <div><Link to="/" className="navbar-link">Home</Link></div>
        <div><Link to="/players" className="navbar-link">All Players</Link></div>
        <div><Link to="/newPlayer" className="navbar-link">Add Player</Link></div>
      </div>
    </nav>
  );
}