const photos = [
  { id: 1, location: 'Paris, France', url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800' },
  { id: 2, location: 'Tokyo, Japan', url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800' },
  { id: 3, location: 'Santorini, Greece', url: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800' },
  { id: 4, location: 'New York, USA', url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800' },
  { id: 5, location: 'Bali, Indonesia', url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800' },
  { id: 6, location: 'Dubai, UAE', url: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800' },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Photo Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition cursor-pointer">
              <img src={photo.url} alt={photo.location} className="w-full h-80 object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end">
                <p className="text-white text-xl font-semibold p-6">{photo.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}