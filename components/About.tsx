import React from "react";

const About: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative p-4 border-2 border-gold-400 rounded-lg">
              <img
                src="/images/compressed_hawan.jpg"
                alt="Pandit performing Havan"
                className="rounded shadow-lg w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-saffron-600 text-white p-6 rounded shadow-xl hidden md:block">
                <p className="text-3xl font-bold font-display">25+</p>
                <p className="text-sm uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <h2 className="text-saffron-700 font-bold uppercase tracking-widest text-sm mb-2">
              About Pandit Ji
            </h2>
            <h3 className="text-4xl font-display text-maroon-900 mb-6">
              Pandit Sunil Shastri Ji
            </h3>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed font-serif">
              With a vision to bring authentic spiritual services to the modern
              world, Pandit Sunil Shastri Ji bridges the gap between ancient
              wisdom and contemporary needs.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed font-serif">
              As a Gurukul-trained Pandit, he performs rituals with strict
              adherence to Vedic scriptures. Whether it is a grand wedding or a
              simple peace havan, Pandit Ji ensures divinity, purity, and
              satisfaction for every family he serves.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 text-xl font-bold">
                  ॐ
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Spiritual</h4>
                  <p className="text-xs text-gray-500">
                    Deeply rooted in faith
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-saffron-100 flex items-center justify-center text-saffron-600 text-xl font-bold">
                  ☸
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Dharmic</h4>
                  <p className="text-xs text-gray-500">Following the path</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
