import Link from 'next/link';
import './navbar.css';
export default function Navbar() {
  return (
    <>
    <nav className="navbar flex justify-between text-2xl text-white items-center bg-[#1f4070] p-4">
      <div className="logo ml-20">
        <h1>CODE(+)HUB</h1>
      </div>
      <ul className="nav-links flex gap-15 mr-20  text-bold" >
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
    </>
  );
}
