import Link from 'next/link';
import './navbar.css';
export default function Navbar() {
  return (
    
    <nav className="navbar">
      <div className="logo">
        <h1>CODE(+)HUB</h1>
      </div>
      <ul className="nav-links">
        <li>
          <Link href="/home">Home</Link>  
        </li>
        
        <li>
          <Link href="/jobs">Jobs</Link>
        </li>
        <li>
          <Link href="/internships">Internships</Link>
        </li>
        <li>
          <Link href="/practice">Practice</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  
  );
}
