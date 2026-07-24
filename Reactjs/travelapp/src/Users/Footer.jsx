export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        <div>
          <h2 className="text-3xl font-bold mb-4">
            TravelGo
          </h2>

          <p className="text-gray-400">
            Discover the world's best destinations and luxury hotels.
          </p>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Company
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>About</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Support
          </h3>

          <ul className="space-y-3 text-gray-400">
            <li>Help Center</li>
            <li>Privacy</li>
            <li>Terms</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-xl mb-4">
            Contact
          </h3>

          <p className="text-gray-400">
            travel@email.com
          </p>

          <p className="text-gray-400">
            +91 99999 99999
          </p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
        © 2026 TravelGo. All Rights Reserved.
      </div>

    </footer>
  );
}