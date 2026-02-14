import React from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";

const PANDIT_DETAILS = {
  name: "Pandit Sunil Shastri Ji",
  email: "shastrisunil281@gmail.com",
  phone: "+919457077623",
  whatsapp: "919457077623",
  address: "Serving clients globally from India.",
};

const Contact: React.FC = () => {
  return (
    <div className="py-20 bg-saffron-50">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display text-maroon-900 mb-6">
            Connect with Pandit Ji
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            For bookings, consultations, or any spiritual guidance, please feel
            free to reach out directly to Pandit Sunil Shastri Ji.
          </p>
          <div className="w-24 h-1 bg-gold-500 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Contact Details & Actions */}
          <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-saffron-500 order-2 md:order-1">
            <h3 className="text-3xl font-display text-gray-800 mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-saffron-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl">🕉</span>
                </div>
                <div>
                  <p className="font-bold text-xl text-maroon-800">
                    {PANDIT_DETAILS.name}
                  </p>
                  <p className="text-gray-500">{PANDIT_DETAILS.address}</p>
                </div>
              </div>

              <a
                href={`tel:${PANDIT_DETAILS.phone}`}
                className="flex items-center p-4 rounded-md hover:bg-gray-50 transition-colors group"
              >
                <Phone className="w-6 h-6 text-saffron-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-700 group-hover:text-maroon-800">
                    Phone
                  </p>
                  <p className="text-gray-600">{PANDIT_DETAILS.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${PANDIT_DETAILS.email}`}
                className="flex items-center p-4 rounded-md hover:bg-gray-50 transition-colors group"
              >
                <Mail className="w-6 h-6 text-saffron-600 mr-4" />
                <div>
                  <p className="font-semibold text-gray-700 group-hover:text-maroon-800">
                    Email
                  </p>
                  <p className="text-gray-600">{PANDIT_DETAILS.email}</p>
                </div>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <a
                href={`https://wa.me/${PANDIT_DETAILS.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center py-4 px-6 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-transform transform hover:-translate-y-0.5 shadow-lg"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <img
              src="/images/compressed_hawan.jpg"
              alt="Pandit Sunil Shastri Ji"
              className="rounded-lg shadow-2xl w-full h-full object-cover max-h-[500px] ornate-border"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
