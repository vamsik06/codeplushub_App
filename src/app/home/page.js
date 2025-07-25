
export default function HomePage() {
  return (
    <section className="bg-blue-50 min-h-80% flex items-center justify-center mt-10 rounded-2xl">
      <div className="max-w-6xl w-full flex flex-col md:flex-row py-10 items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Learn, Practice, and <br /> Get Hired with <br /> CodePlusHub
          </h2>
          <p className="text-lg text-gray-700">
            Daily coding challenges, job updates, and <br />
            free resources for every developer.
          </p>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition">
              Start Learning
            </button>
            <button className="bg-white border border-gray-300 text-black px-6 py-3 rounded-md text-lg hover:bg-gray-100 transition">
              Get Job Alerts
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src="/computer.png"
            alt="Laptop with code"
            className="w-full max-w-md mx-auto"
          />
         
        </div>
      </div>
    </section>
   
  );
}
