import { Service, Testimonial, CalendarEvent } from "./types";

export const NAV_LINKS = [
  { label: "Home", value: "home" },
  { label: "About", value: "about" },
  { label: "Services", value: "services" },
  // { label: "Booking", value: "booking" },
  { label: "Puja Calendar", value: "calendar" },
  { label: "Contact", value: "contact" },
];

export const SERVICES_LIST: Service[] = [
  {
    id: "havan",
    title: "Havan & Yagya",
    description:
      "Purify your environment with Griha Shanti, Navagraha Havan, and Maha Yagya rituals performed by expert pandits.",
    icon: "flame",
    priceStart: "As Per Rituals",
  },
  {
    id: "puja",
    title: "Vedic Puja Services",
    description:
      "Traditional Satyanarayan, Ganesh, and Lakshmi Pujas conducted with strict adherence to Vedic scriptures.",
    icon: "flower",
    priceStart: "As Per Rituals",
  },
  {
    id: "wedding",
    title: "Vedic Themed Marriage",
    description:
      "Simple, and spiritual Vedic wedding ceremonies. We handle the all the wedding rituals.",
    icon: "rings",
    priceStart: "As Per Rituals",
  },
  {
    id: "sanskars",
    title: "16 Sanskars",
    description:
      "Celebrating life milestones including Namakarana, Mundan, Upanayan (Thread Ceremony), and Annaprashan.",
    icon: "baby",
    priceStart: "As Per Rituals",
  },
  {
    id: "astrology",
    title: "Personalized Planning",
    description:
      "Muhurat calculation based on your birth chart (Kundali) and customized material lists for your rituals.",
    icon: "star",
    priceStart: "As Per Rituals",
  },
  {
    id: "funeral",
    title: "Antyeshti & Shraddh",
    description:
      "Compassionate Last Rites and Shraddh ceremonies to honor ancestors and find peace for the departed soul.",
    icon: "peace",
    priceStart: "As Per Rituals",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Rajesh Gupta",
    location: "New York, USA",
    text: "The Pandit ji was very knowledgeable and explained every mantra in English. The Griha Pravesh havan was divine.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Sharma",
    location: "Mumbai, India",
    text: "Booked a Satyanarayan Puja online. The process was seamless, and the virtual darshan was high quality.",
    rating: 5,
  },
  {
    id: "3",
    name: "Amit & Sneha",
    location: "London, UK",
    text: "Our Arya Samaj wedding was conducted beautifully. Simple, elegant, and deeply spiritual. Highly recommended.",
    rating: 4,
  },
];

export const CALENDAR_EVENTS: CalendarEvent[] = [
  {
    date: "2023-11-12",
    title: "Diwali",
    auspicious: true,
    time: "6:00 PM - 8:00 PM",
  },
  { date: "2023-11-27", title: "Kartik Purnima", auspicious: true },
  { date: "2023-12-23", title: "Gita Jayanti", auspicious: true },
  { date: "2024-01-15", title: "Makar Sankranti", auspicious: true },
  {
    date: "2024-02-14",
    title: "Vasant Panchami",
    auspicious: true,
    time: "9:00 AM - 12:00 PM",
  },
  {
    date: "2024-03-08",
    title: "Maha Shivratri",
    auspicious: true,
    time: "All Day",
  },
];
