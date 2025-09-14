import { useState, useEffect } from "react";
import { artists, timetable } from "./artistes";

// SVG Logo Components
const SoundCloudIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="-271 345.8 256 111.2" fill="currentColor">
    <g>
      <path
        d="M-238.4,398.1c-0.8,0-1.4,0.6-1.5,1.5l-2.3,28l2.3,27.1c0.1,0.8,0.7,1.5,1.5,1.5c0.8,0,1.4-0.6,1.5-1.5l2.6-27.1l-2.6-28
        C-237,398.7-237.7,398.1-238.4,398.1z"
      />
      <path
        d="M-228.2,399.9c-0.9,0-1.7,0.7-1.7,1.7l-2.1,26l2.1,27.3c0.1,1,0.8,1.7,1.7,1.7c0.9,0,1.6-0.7,1.7-1.7l2.4-27.3l-2.4-26
        C-226.6,400.6-227.3,399.9-228.2,399.9z"
      />
      <path
        d="M-258.6,403.5c-0.5,0-1,0.4-1.1,1l-2.5,23l2.5,22.5c0.1,0.6,0.5,1,1.1,1c0.5,0,1-0.4,1.1-1l2.9-22.5l-2.9-23
        C-257.7,404-258.1,403.5-258.6,403.5z"
      />
      <path
        d="M-268.1,412.3c-0.5,0-1,0.4-1,1l-1.9,14.3l1.9,14c0.1,0.6,0.5,1,1,1s0.9-0.4,1-1l2.2-14l-2.2-14.2
        C-267.2,412.8-267.6,412.3-268.1,412.3z"
      />
      <path
        d="M-207.5,373.5c-1.2,0-2.1,0.9-2.2,2.1l-1.9,52l1.9,27.2c0.1,1.2,1,2.1,2.2,2.1s2.1-0.9,2.2-2.1l2.1-27.2l-2.1-52
        C-205.4,374.4-206.4,373.5-207.5,373.5z"
      />
      <path
        d="M-248.6,399c-0.7,0-1.2,0.5-1.3,1.3l-2.4,27.3l2.4,26.3c0.1,0.7,0.6,1.3,1.3,1.3c0.7,0,1.2-0.5,1.3-1.2l2.7-26.3l-2.7-27.3
        C-247.4,399.6-247.9,399-248.6,399z"
      />
      <path
        d="M-217.9,383.4c-1,0-1.9,0.8-1.9,1.9l-2,42.3l2,27.3c0.1,1.1,0.9,1.9,1.9,1.9s1.9-0.8,1.9-1.9l2.3-27.3l-2.3-42.3
        C-216,384.2-216.9,383.4-217.9,383.4z"
      />
      <path
        d="M-154.4,359.3c-1.8,0-3.2,1.4-3.2,3.2l-1.2,65l1.2,26.1c0,1.8,1.5,3.2,3.2,3.2c1.8,0,3.2-1.5,3.2-3.2l1.4-26.1l-1.4-65
        C-151.1,360.8-152.6,359.3-154.4,359.3z"
      />
      <path
        d="M-197.1,368.9c-1.3,0-2.3,1-2.4,2.4l-1.8,56.3l1.8,26.9c0,1.3,1.1,2.3,2.4,2.3s2.3-1,2.4-2.4l2-26.9l-2-56.3
        C-194.7,370-195.8,368.9-197.1,368.9z"
      />
      <path
        d="M-46.5,394c-4.3,0-8.4,0.9-12.2,2.4C-61.2,368-85,345.8-114,345.8c-7.1,0-14,1.4-20.1,3.8c-2.4,0.9-3,1.9-3,3.7v99.9
        c0,1.9,1.5,3.5,3.4,3.7c0.1,0,86.7,0,87.3,0c17.4,0,31.5-14.1,31.5-31.5C-15,408.1-29.1,394-46.5,394z"
      />
      <path
        d="M-143.6,353.2c-1.9,0-3.4,1.6-3.5,3.5l-1.4,70.9l1.4,25.7c0,1.9,1.6,3.4,3.5,3.4c1.9,0,3.4-1.6,3.5-3.5l1.5-25.8l-1.5-70.9
        C-140.2,354.8-141.7,353.2-143.6,353.2z"
      />
      <path
        d="M-186.5,366.8c-1.4,0-2.5,1.1-2.6,2.6l-1.6,58.2l1.6,26.7c0,1.4,1.2,2.6,2.6,2.6s2.5-1.1,2.6-2.6l1.8-26.7l-1.8-58.2
        C-184,367.9-185.1,366.8-186.5,366.8z"
      />
      <path
        d="M-175.9,368.1c-1.5,0-2.8,1.2-2.8,2.8l-1.5,56.7l1.5,26.5c0,1.6,1.3,2.8,2.8,2.8s2.8-1.2,2.8-2.8l1.7-26.5l-1.7-56.7
        C-173.1,369.3-174.3,368.1-175.9,368.1z"
      />
      <path
        d="M-165.2,369.9c-1.7,0-3,1.3-3,3l-1.4,54.7l1.4,26.3c0,1.7,1.4,3,3,3c1.7,0,3-1.3,3-3l1.5-26.3l-1.5-54.7
        C-162.2,371.3-163.5,369.9-165.2,369.9z"
      />
    </g>
  </svg>
);

const InstagramIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

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
    // Hide body scrollbars when modal opens
    document.body.classList.add("modal-open");
    // Small delay to ensure DOM is updated before animation
    setTimeout(() => setIsModalVisible(true), 10);
  };

  const closeModal = () => {
    setIsModalVisible(false);
    // Restore body scrollbars when modal closes
    document.body.classList.remove("modal-open");
    // Wait for animation to complete before unmounting
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedArtist(null);
    }, 300);
  };

  // Cleanup effect to restore body overflow when component unmounts
  useEffect(() => {
    return () => {
      // Restore body overflow on component unmount
      document.body.classList.remove("modal-open");
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Simplified background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/10 via-black to-purple-900/10"></div>
      </div>

      {/* Hero Section */}
      <header className="relative z-10 w-full py-8 md:py-6 flex flex-col items-center">
        <div className="text-center mb-2">
          {/* Hero Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/og.png"
                alt="Burning Kabania"
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-red-500/50 shadow-2xl shadow-red-500/30"
              />
            </div>
          </div>

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
            À LA RENCONTRE DES ONDES SONORES PAR DELÀ LES TÉNÈBRES
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
            <div className="overflow-x-auto pr-4">
              {/* Friday Section */}
              <div className="mb-8">
                <h3 className="text-2xl font-black text-red-400 mb-4 uppercase tracking-wider flex items-center gap-3">
                  <span className="text-3xl">🔥</span>
                  Vendredi 20 Septembre
                  <span className="text-3xl">🔥</span>
                </h3>
                <table className="w-full mb-6 min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider w-24">
                        Horaire
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider w-64">
                        Artiste
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider w-32">
                        Genre
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider w-36">
                        Sur les réseaux
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
                            className="transition-all duration-300 cursor-pointer border-b border-gray-800/50 hover:bg-gradient-to-r hover:from-red-900/20 hover:to-red-800/20"
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
                                {artist.socialLinks?.soundcloud && (
                                  <a
                                    href={artist.socialLinks.soundcloud}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <SoundCloudIcon className="w-8 h-8" />
                                  </a>
                                )}
                                {artist.socialLinks?.instagram && (
                                  <a
                                    href={artist.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-400 hover:text-pink-300 transition-colors duration-200"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <InstagramIcon className="w-8 h-8" />
                                  </a>
                                )}
                                {!artist.socialLinks?.soundcloud &&
                                  !artist.socialLinks?.instagram && (
                                    <span className="text-gray-500 text-sm">
                                      -
                                    </span>
                                  )}
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
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider w-24">
                        Horaire
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider w-64">
                        Artiste
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider w-32">
                        Genre
                      </th>
                      <th className="text-left py-3 px-4 text-red-400 font-bold uppercase tracking-wider w-36">
                        Sur les réseaux
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
                            className="transition-all duration-300 cursor-pointer border-b border-gray-800/50 hover:bg-gradient-to-r hover:from-red-900/20 hover:to-red-800/20"
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
                                {artist.socialLinks?.soundcloud && (
                                  <a
                                    href={artist.socialLinks.soundcloud}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-orange-400 hover:text-orange-300 transition-colors duration-200"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <SoundCloudIcon className="w-8 h-8" />
                                  </a>
                                )}
                                {artist.socialLinks?.instagram && (
                                  <a
                                    href={artist.socialLinks.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-pink-400 hover:text-pink-300 transition-colors duration-200"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <InstagramIcon className="w-8 h-8" />
                                  </a>
                                )}
                                {!artist.socialLinks?.soundcloud &&
                                  !artist.socialLinks?.instagram && (
                                    <span className="text-gray-500 text-sm">
                                      -
                                    </span>
                                  )}
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
          className={`fixed inset-0 z-50 overflow-auto modal-container transition-all duration-300 ${
            isModalVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Backdrop */}
          <div
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm transition-all duration-300 ${
              isModalVisible ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeModal}
          ></div>

          {/* Modal Container with Scrolling */}
          <div
            className="min-h-full flex items-start justify-center p-2 py-4 md:p-4 md:py-8 relative z-10"
            onClick={closeModal}
          >
            {/* Modal Content */}
            <div
              className={`relative max-w-2xl w-full bg-gradient-to-br from-gray-900 to-black border border-red-500/30 rounded-xl p-4 md:p-8 shadow-2xl shadow-red-500/20 transition-all duration-300 modal-content ${
                isModalVisible
                  ? "opacity-100 scale-100 translate-y-0"
                  : "opacity-0 scale-95 translate-y-4"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-400 hover:text-red-400 transition-colors text-2xl md:text-3xl z-10 w-8 h-8 md:w-auto md:h-auto flex items-center justify-center"
                aria-label="Fermer la fenêtre"
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
                    <div className="flex flex-col items-center gap-6 pt-4">
                      <div className="relative">
                        <img
                          src={artist.image}
                          alt={artist.name}
                          className="w-59 h-59 sm:w-59 sm:h-59 rounded-full object-cover border-2 border-red-500/50"
                        />
                        <div className="absolute inset-0 rounded-full bg-red-500/20 animate-pulse"></div>
                      </div>
                      <div className="text-center">
                        <h2 className="text-2xl sm:text-3xl font-black text-red-400 mb-2">
                          {artist.name}
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-300 font-medium">
                          {artist.genre}
                        </p>
                      </div>
                    </div>

                    {/* Performance Schedule */}
                    <div className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-lg p-3 sm:p-4">
                      <h3 className="text-base sm:text-lg font-bold text-red-400 mb-3 uppercase tracking-wider">
                        Horaires de Performance
                      </h3>
                      <div className="space-y-2">
                        {artistSets.map((set, idx) => (
                          <div
                            key={idx}
                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                              <span className="text-red-300 font-bold uppercase text-sm sm:text-base">
                                {set.day}
                              </span>
                              <span className="font-mono text-white text-sm sm:text-base">
                                {set.startTime} → {set.endTime}
                              </span>
                            </div>
                            <span className="text-red-400 font-bold text-sm sm:text-base">
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
                          Sur les réseaux
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                          {artist.socialLinks.soundcloud && (
                            <a
                              href={artist.socialLinks.soundcloud}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-lg hover:from-orange-500 hover:to-orange-400 transition-all duration-300 font-medium text-center"
                            >
                              <SoundCloudIcon className="w-6 h-6" />
                              SoundCloud
                            </a>
                          )}
                          {artist.socialLinks.instagram && (
                            <a
                              href={artist.socialLinks.instagram}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white rounded-lg hover:from-pink-500 hover:to-pink-400 transition-all duration-300 font-medium text-center"
                            >
                              <InstagramIcon className="w-6 h-6" />
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
        </div>
      )}
    </div>
  );
}

export default App;
