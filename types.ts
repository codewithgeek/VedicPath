export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  priceStart: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface BookingDetails {
  serviceId: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  notes: string;
}

export interface CalendarEvent {
  date: string;
  title: string;
  auspicious: boolean;
  time?: string;
}

export enum Page {
  HOME = "home",
  SERVICES = "services",
  // BOOKING = 'booking',
  CALENDAR = "calendar",
  ABOUT = "about",
  CONTACT = "contact",
}
