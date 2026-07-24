export default function Hero() {
  return (
    <section
      className="h-[90vh] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-7xl mx-auto h-full flex items-center px-6">

        <div className="text-white max-w-2xl">

          <h1 className="text-6xl font-bold leading-tight">
            Discover The World's Best Destinations
          </h1>

          <p className="mt-6 text-lg">
            Find amazing hotels, flights and unforgettable experiences
            around the world.
          </p>

          <div className="bg-white rounded-xl mt-10 p-5 flex flex-wrap gap-4">

            <input
              type="text"
              placeholder="Where are you going?"
              className="border p-3 rounded-lg flex-1"
            />

            <input
              type="date"
              className="border p-3 rounded-lg"
            />

            <button className="bg-sky-600 text-white px-8 rounded-lg">
              Search
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}