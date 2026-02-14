import React, { useState } from "react";
import { SERVICES_LIST } from "../constants";

interface BookingProps {
  initialServiceId?: string;
}

const Booking: React.FC<BookingProps> = ({ initialServiceId }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: initialServiceId || SERVICES_LIST[0].id,
    date: "",
    time: "",
    location: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-8 bg-saffron-50 rounded-lg ornate-border max-w-3xl mx-auto my-12">
        <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <span className="text-5xl">🙏</span>
        </div>
        <h3 className="text-3xl font-display text-maroon-900 mb-4">
          Booking Request Received
        </h3>
        <p className="text-lg text-gray-700 max-w-lg">
          Hari Om, <strong>{formData.name}</strong>. We have received your
          request for{" "}
          <strong>
            {SERVICES_LIST.find((s) => s.id === formData.service)?.title}
          </strong>
          . Pandit Sunil Shastri Ji will contact you shortly to confirm the
          Muhurat and details.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 px-8 py-3 bg-saffron-600 text-white font-semibold rounded hover:bg-saffron-700 transition-colors"
        >
          Book Another Service
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 px-4 md:px-0 max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left Side Info */}
        <div className="bg-maroon-900 text-white p-10 md:w-1/3 flex flex-col justify-between relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'url("https://www.transparenttextures.com/patterns/black-scales.png")',
            }}
          ></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-display mb-6">Why Book With Us?</h3>
            <ul className="space-y-4 font-serif text-saffron-100">
              <li className="flex items-start">
                <span className="mr-2 text-gold-400">✦</span> Verified Vedic
                Pandit
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gold-400">✦</span> Authentic Samagri
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gold-400">✦</span> Precise Muhurat
                Timing
              </li>
              <li className="flex items-start">
                <span className="mr-2 text-gold-400">✦</span> Multilingual
                Support
              </li>
            </ul>
          </div>
          <div className="relative z-10 mt-10">
            <p className="text-gold-400 text-sm font-bold uppercase tracking-widest mb-1">
              Direct Contact
            </p>
            <p className="text-xl">+91 94570 77623</p>
          </div>
        </div>

        {/* Form */}
        <div className="p-10 md:w-2/3 bg-white">
          <h2 className="text-3xl font-display text-gray-800 mb-8">
            Schedule a Ritual
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">
                  Your Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-colors"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">
                  Phone Number
                </label>
                <input
                  required
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-colors"
                  placeholder="+91 94570 77623"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Select Service
              </label>
              <select
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 bg-white"
                value={formData.service}
                onChange={(e) =>
                  setFormData({ ...formData, service: e.target.value })
                }
              >
                {SERVICES_LIST.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">
                  Preferred Date
                </label>
                <input
                  required
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-600 mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Location / Address
              </label>
              <input
                required
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-colors"
                placeholder="Where should the ritual take place?"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-600 mb-2">
                Special Requests
              </label>
              <textarea
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 h-24"
                placeholder="Specific traditions, language preferences, or questions..."
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-saffron-600 text-white font-bold py-4 rounded hover:bg-saffron-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Confirm Booking Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Booking;
