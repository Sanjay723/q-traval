export default function Hero() {
  return (
    <section id="home" className="pt-16 h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="text-center text-white px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-6">Explore the World</h2>
        <p className="text-xl md:text-2xl mb-8">Through the Lens of Adventure</p>
        <a href="#gallery" className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          View Gallery
        </a>
      </div>
    </section>
  )
}