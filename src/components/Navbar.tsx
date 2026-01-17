export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <h1 className="text-2xl font-bold">TravelLens</h1>
          <div className="flex gap-8">
            <a href="#home" className="hover:text-blue-600">Home</a>
            <a href="#gallery" className="hover:text-blue-600">Gallery</a>
            <a href="#about" className="hover:text-blue-600">About</a>
          </div>
        </div>
      </div>
    </nav>
  )
}