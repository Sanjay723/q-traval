"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const DISTRICTS = [
  { id: "thiruvananthapuram", name: "Thiruvananthapuram", image: "https://images.unsplash.com/photo-1600077106724-946750eeaf3c" },
  { id: "kollam", name: "Kollam", image: "https://images.unsplash.com/photo-1629285483876-54d4b9bdbd2a" },
  { id: "pathanamthitta", name: "Pathanamthitta", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2" },
  { id: "alappuzha", name: "Alappuzha", image: "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587" },
  { id: "kottayam", name: "Kottayam", image: "https://images.unsplash.com/photo-1591851211814-bb4db6c6d4b4" },
  { id: "idukki", name: "Idukki", image: "https://images.unsplash.com/photo-1599640842225-85d111c60e6b" },
  { id: "ernakulam", name: "Ernakulam", image: "https://images.unsplash.com/photo-1589286092789-6c5c13f73cfd" },
  { id: "thrissur", name: "Thrissur", image: "https://images.unsplash.com/photo-1629468201519-0c0b6c5a5f0a" },
  { id: "palakkad", name: "Palakkad", image: "https://images.unsplash.com/photo-1609838462115-0b6e4b0a0d6c" },
  { id: "malappuram", name: "Malappuram", image: "https://images.unsplash.com/photo-1621416894569-0f39c9a9f4d5" },
  { id: "kozhikode", name: "Kozhikode", image: "https://images.unsplash.com/photo-1624862760645-7e8d5c9d7f2a" },
  { id: "wayanad", name: "Wayanad", image: "https://images.unsplash.com/photo-1599901216780-7bdf62eae6a6" },
  { id: "kannur", name: "Kannur", image: "https://images.unsplash.com/photo-1604137809304-24b3eec9f8b0" },
  { id: "kasaragod", name: "Kasaragod", image: "https://images.unsplash.com/photo-1625231334168-35067c5e1d18" },
];

export default function KeralaPage() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += e.deltaY;
    }
  };

  return (
    <main className="bg-white">
      <section className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1588411393236-d2524cca1196"
            alt="Kerala Backwaters"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>

        <div className="relative z-10 flex-1 flex flex-col px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="max-w-7xl mx-auto w-full">
            <span className="inline-block text-xs sm:text-sm bg-green-50 text-green-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium">
              🌴 Discover Kerala
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4 sm:mt-6 leading-tight text-white max-w-3xl">
              Explore God's Own Country
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-gray-100 max-w-2xl leading-relaxed">
              From misty hill stations to serene backwaters, Kerala offers unforgettable
              experiences across all 14 districts. Choose your destination and start exploring.
            </p>
          </div>

          <div className="mt-12 sm:mt-16 lg:mt-20 w-full">
            <div className="text-center mb-8 sm:mb-10 max-w-7xl mx-auto px-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Explore Kerala Districts
              </h2>
              <p className="text-sm sm:text-base text-gray-200 mt-2 sm:mt-3">
                Click on a district to explore tourist places and attractions
              </p>
            </div>

            <div className="hidden lg:block overflow-x-auto pb-6 px-4" ref={scrollRef} onWheel={handleWheel} style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex gap-6 min-w-max">
                {DISTRICTS.map((district) => (
                  <Link
                    key={district.id}
                    href={`/kerala/${district.id}`}
                    className="flex-none w-72 group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
                  >
                    <div className="relative h-48">
                      <Image
                        src={district.image}
                        alt={district.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="p-5 text-center">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">
                        {district.name}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden sm:grid lg:hidden grid-cols-2 gap-4 sm:gap-6 px-4">
              {DISTRICTS.map((district) => (
                <Link
                  key={district.id}
                  href={`/kerala/${district.id}`}
                  className="group bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                  <div className="relative h-40 sm:h-48">
                    <Image
                      src={district.image}
                      alt={district.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">
                      {district.name}
                    </h3>
                    <span className="inline-flex items-center text-green-600 text-sm font-semibold">
                      Explore →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="sm:hidden grid grid-cols-1 gap-4 px-4">
              {DISTRICTS.map((district) => (
                <Link
                  key={district.id}
                  href={`/kerala/${district.id}`}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all overflow-hidden active:scale-98"
                >
                  <div className="flex items-center gap-4 p-4">
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={district.image}
                        alt={district.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        {district.name}
                      </h3>
                      <span className="inline-flex items-center text-green-600 text-sm font-semibold">
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}