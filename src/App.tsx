import { useState } from "react";
import { artists, timetable } from "./artistes";

function App() {
  const [selectedArtist, setSelectedArtist] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Combine both days into a single array with day information
  const allSets = [
    ...timetable.vendredi.map((set) => ({ ...set, day: "Vendredi" })),
    ...timetable.samedi.map((set) => ({ ...set, day: "Samedi" })),
  ];

  // Modal animation functions
  const openModal = (artistId: string) => {
    setSelectedArtist(artistId);
    setIsModalOpen(true);
    // Small delay to ensure DOM is updated before animation
    setTimeout(() => setIsModalVisible(true), 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    // Wait for animation to complete before unmounting
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedArtist(null);
    }, 300);
  };

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Simplified background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 via-black to-purple-900/10"></div>
      </div>

      {/* Hero Section */}
      <header className="relative z-10 w-full py-8 md:py-6 flex flex-col items-center">
        <div className="text-center mb-2">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-black text-transparent bg-gradient-to-r from-red-500 via-orange-500 to-red-600 bg-clip-text drop-shadow-2xl tracking-wider uppercase mb-4">
            Burning Kabania
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-20"></div>
            <p className="text-xl sm:text-2xl md:text-4xl font-bold text-red-400 tracking-widest">
              19-21 SEPTEMBRE 2025
            </p>
            <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent w-20"></div>
          </div>
          <p className="text-lg sm:text-xl px-4 text-gray-300 font-medium tracking-wide">
            LÀ OÙ LES TÉNÈBRES RENCONTRENT LE SON
          </p>
        </div>
      </header>

      <div className="relative z-10 max-w-7xl mx-auto px-4 pb-12">
        {/* Timetable Section - Full Width */}
        <section className="space-y-6">
          <h2 className="text-3xl font-black text-red-400 mb-8 text-center uppercase tracking-wider">
            Table du temps
          </h2>
          <div className="bg-gradient-to-b from-gray-900/80 to-black/80 border border-gray-700 rounded-lg p-6 backdrop-blur-sm">
            <div className="overflow-x-hidden">
              {/* Friday Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-red-400 mb-4 uppercase tracking-wider flex items-center gap-3">
                  <span className="text-3xl">🔥</span>
                  Vendredi 20 Septembre
                  <span className="text-3xl">🔥</span>
                </h3>
                <table className="w-full mb-6">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider">
                        Horaire
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider">
                        Artiste
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider">
                        Genre
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider">
                        Durée
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allSets
                      .filter((set) => set.day === "Vendredi")
                      .map((set, idx) => {
                        const artist = artists[set.artistId];

                        return (
                          <tr
                            key={idx}
                            className="transition-all duration-300 cursor-pointer border-b border-gray-800/50 hover:bg-gradient-to-r hover:from-red-900/20 hover:to-red-800/20 hover:scale-[1.01]"
                            onClick={() => openModal(set.artistId)}
                          >
                            <td className="py-4 px-4">
                              <div className="font-mono text-lg text-red-300 font-bold">
                                {set.startTime}
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={artist.image}
                                  alt={artist.name}
                                  className="w-12 h-12 rounded-full object-cover border border-red-500/50"
                                />
                                <div>
                                  <div className="font-bold text-white text-lg">
                                    {artist.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <span className="text-gray-300 font-medium">
                                {artist.genre}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-2">
                                <span className="text-red-400 font-bold">
                                  {set.duration}
                                </span>
                                <div className="text-red-500/70">🔥</div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>

              {/* Saturday Section */}
              <div>
                <h3 className="text-2xl font-black text-red-400 mb-4 uppercase tracking-wider flex items-center gap-3">
                  <span className="text-3xl">🔥</span>
                  Samedi 21 Septembre
                  <span className="text-3xl">🔥</span>
                </h3>
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider">
                        Horaire
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider">
                        Artiste
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider">
                        Genre
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider">
                        Durée
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allSets
                      .filter((set) => set.day === "Samedi")
                      .map((set, idx) => {
                        const artist = artists[set.artistId];

                        return (
                          <tr
                            key={idx}
                            className="transition-all duration-300 cursor-pointer border-b border-gray-800/50 hover:bg-gradient-to-r hover:from-red-900/20 hover:to-red-800/20 hover:scale-[1.01]"
                            onClick={() => openModal(set.artistId)}
                          >
                            <td className="py-4 px-4">
                              <div className="font-mono text-lg text-red-300 font-bold">
                                {set.startTime}
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-3">
                                <img
                                  src={artist.image}
                                  alt={artist.name}
                                  className="w-12 h-12 rounded-full object-cover border border-red-500/50"
                                />
                                <div>
                                  <div className="font-bold text-white text-lg">
                                    {artist.name}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="py-4 px-4">
                              <span className="text-gray-300 font-medium">
                                {artist.genre}
                              </span>
                            </td>
                            <td className="py-4 px-4">
                              <div className="flex items-center gap-2">
                                <span className="text-red-400 font-bold">
                                  {set.duration}
                                </span>
                                <div className="text-red-500/70">🔥</div>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Artist Modal */}
      {isModalOpen && selectedArtist && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`absolute inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 ${
              isModalVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div
            className={`relative max-w-2xl w-full bg-gradient-to-br from-gray-900 to-black border border-red-500/30 rounded-xl p-8 shadow-2xl shadow-red-500/20 transition-all duration-300 ${
              isModalVisible
                ? "opacity-100 scale-100 translate-y-0"
                : "opacity-0 scale-95 translate-y-4"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-red-400 transition-colors text-2xl"
            >
              ×
            </button>

            {(() => {
              const artist = artists[selectedArtist];
              const artistSets = allSets.filter(
                (set) => set.artistId === selectedArtist
              );

              return (
                <div className="space-y-6">
                  {/* Artist Header */}
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-24 h-24 rounded-full object-cover border-2 border-red-500/50"
                      />
                      <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-black text-red-400 mb-2">
                        {artist.name}
                      </h2>
                      <p className="text-xl text-gray-300 font-medium">
                        {artist.genre}
                      </p>
                    </div>
                  </div>

                  {/* Performance Schedule */}
                  <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-4">
                    <h3 className="text-lg font-bold text-red-400 mb-3 uppercase tracking-wider">
                      Horaires de Performance
                    </h3>
                    <div className="space-y-2">
                      {artistSets.map((set, idx) => (
                        <div
                          key={idx}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-4">
                            <span className="text-red-300 font-bold uppercase">
                              {set.day}
                            </span>
                            <span className="font-mono text-white">
                              {set.startTime} → {set.endTime}
                            </span>
                          </div>
                          <span className="text-red-400 font-bold">
                            {set.duration}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Artist Description */}
                  <div>
                    <h3 className="text-lg font-bold text-red-400 mb-3 uppercase tracking-wider">
                      À Propos
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {artist.description}
                    </p>
                  </div>

                  {/* Social Links */}
                  {artist.socialLinks && (
                    <div>
                      <h3 className="text-lg font-bold text-red-400 mb-3 uppercase tracking-wider">
                        Liens Sociaux
                      </h3>
                      <div className="flex gap-4">
                        {artist.socialLinks.soundcloud && (
                          <a
                            href={artist.socialLinks.soundcloud}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg hover:from-orange-500 hover:to-orange-400 transition-all duration-300 font-medium"
                          >
                            SoundCloud
                          </a>
                        )}
                        {artist.socialLinks.instagram && (
                          <a
                            href={artist.socialLinks.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-pink-400 transition-all duration-300 font-medium"
                          >
                            Instagram
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-gray-800">
        <p className="text-gray-400 font-medium">
          🔥 Inspiré par Burning Man • Forgé dans les Flammes de Kabania 2025 🔥
        </p>
      </footer>
    </div>
  );
}

export default App;
