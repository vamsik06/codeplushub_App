import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faTelegramPlane, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function HomePage() {
  return (
    <>
    <section className="bg-blue-50 min-h-[80vh] flex items-center justify-center mt-10 rounded-2xl sm:mr-0">
      <div className="max-w-6xl w-full flex flex-col md:flex-row py-10 items-center gap-12 px-4">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Learn, Practice, and <br /> Get Hired with <br /> CodePlusHub
          </h2>
          <p className="text-lg text-gray-700">
            Daily coding challenges, job updates, and <br />
            free resources for every developer.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
            <Link href="/practice">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition w-full sm:w-auto">
              Start Learning
            </button>
            </Link>
            <Link href="/jobs">
            <button className="bg-white border border-gray-300 text-black px-6 py-3 rounded-md text-lg hover:bg-gray-100 transition w-full sm:w-auto">
              Get Job Alerts
            </button>
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/computer.png"
            alt="Laptop with code"
            className="w-full max-w-md mx-auto lg:ml-20"
          />
         
        </div>
      </div>
    </section>
{/* Footer */}
<section className="bg-[#1f4070] px-10 py-10 mt-10  text-white">
  <div className="flex flex-col md:flex-row justify-between gap-10">
    <div>
      <p className="text-2xl font-bold mb-4">Quick Links</p>
      <ul className="space-y-2">
        <li>
          <Link href="/home" className="hover:underline">Home</Link>
        </li>
        <li>
          <Link href="/jobs" className="hover:underline">Jobs</Link>
        </li>
        <li>
          <Link href="/internships" className="hover:underline">Internships</Link>
        </li>
        <li>
          <Link href="/practice" className="hover:underline">Practice</Link>
          </li>
      </ul>
    </div>

    <div>
      <p className="text-2xl font-bold mb-4">Follow Us</p>
      <div className="flex gap-4 text-2xl">
        <Link href="https://www.instagram.com/codeplushub?igsh=Z2dkcXZ2M3FpbDF3" target="_blank" className="hover:underline">
          <FontAwesomeIcon icon={faInstagram} />
        </Link>
        <Link href="https://t.me/codeplushub" target="_blank" className="hover:underline">
          <FontAwesomeIcon icon={faTelegramPlane} />
        </Link>
        <Link href="https://codeplushub.openinapp.co/wtsp" target="_blank" className="hover:underline">
          <FontAwesomeIcon icon={faWhatsapp} />
        </Link>
      </div>
    </div>

    <div>
      <p className="text-2xl font-bold mb-4">Subscribe Newsletter</p>
      <input
        type="email"
        placeholder="Enter your email"
        className="px-4 py-2 border border-gray-400 rounded-md mb-2"
      />
      <br />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Subscribe
      </button>
    </div>
  </div>
</section>
</>
  );
}
