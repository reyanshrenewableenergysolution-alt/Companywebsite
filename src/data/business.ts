import {
  Sun,
  Droplets,
  BatteryCharging,
  Wrench,
  ShieldCheck,
  Leaf,
  IndianRupee,
  Clock,
  MapPin,
  Mail,
  Phone,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type BusinessInfo = {
  name: string;
  tagline: string;
  about: string;
  contact: {
    person: string;
    role: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
    email: string;
    phone: string;
    hours: string;
  };
  stats: { label: string; value: string }[];
};

export const business: BusinessInfo = {
  name: 'Reyansh Renewable Energy Solutions',
  tagline: 'Powering Your Future with Clean Energy',
  about:
    'Reyansh Renewable Energy Solutions is dedicated to making clean and reliable energy accessible for everyone. With years of experience and a focus on quality, we deliver rooftop solar systems and solar water heaters that empower homes and businesses across India.',
  contact: {
    person: 'Vallithippi',
    role: 'Founder & CEO',
    address: '8-412C, Narpala',
    city: 'Anantapur',
    state: 'Andhra Pradesh',
    pincode: '515425',
    country: 'India',
    email: 'vallithippi@gmail.com',
    phone: '+91-9652362250',
    hours: 'Mon–Sat 9:00am–6:00pm',
  },
  stats: [
    { label: 'Electricity Bill Reduction', value: 'Up to 90%' },
    { label: 'Experience', value: 'Years of Trust' },
    { label: 'Service Area', value: 'Pan-India' },
    { label: 'Installations', value: 'Quality First' },
  ],
};

export type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  price?: string;
  phase?: string;
  image: string;
  icon: LucideIcon;
};

export const products: Product[] = [
  {
    id: 'solar-3kw-single',
    name: '3kW Rooftop Solar System',
    category: 'Rooftop Solar',
    description:
      'A compact single-phase rooftop solar system ideal for small homes, reducing your electricity bills by up to 90%.',
    features: ['Single Phase', 'Inclusive of Installation', 'Government Subsidy Eligible', 'Flexible Financing'],
    price: '₹2,20,000',
    phase: 'Single Phase',
    image:
      'https://images.pexels.com/photos/9875418/pexels-photo-9875418.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Sun,
  },
  {
    id: 'solar-5kw-single',
    name: '5kW Rooftop Solar System',
    category: 'Rooftop Solar',
    description:
      'A powerful single-phase solar solution for medium-sized homes, engineered for maximum efficiency and durability.',
    features: ['Single Phase', 'Inclusive of Installation', 'Government Subsidy Eligible', 'Flexible Financing'],
    price: '₹3,40,000',
    phase: 'Single Phase',
    image:
      'https://images.pexels.com/photos/11645008/pexels-photo-11645008.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Sun,
  },
  {
    id: 'solar-5kw-three',
    name: '5kW Rooftop Solar System',
    category: 'Rooftop Solar',
    description:
      'A robust three-phase rooftop solar system designed for larger homes and small businesses with higher energy needs.',
    features: ['Three Phase', 'Inclusive of Installation', 'Government Subsidy Eligible', 'Flexible Financing'],
    price: '₹3,60,000',
    phase: 'Three Phase',
    image:
      'https://images.pexels.com/photos/8783541/pexels-photo-8783541.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Sun,
  },
  {
    id: 'solar-water-heater',
    name: 'Solar Water Heaters',
    category: 'Water Heating',
    description:
      'Energy-efficient solar water heating systems that provide hot water round the clock while cutting your energy costs.',
    features: ['Round-the-Clock Hot Water', 'Low Maintenance', 'Eco-Friendly', 'Long Lifespan'],
    image:
      'https://images.pexels.com/photos/38733791/pexels-photo-38733791.jpeg?auto=compress&cs=tinysrgb&w=900',
    icon: Droplets,
  },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: 'Solar Installation',
    description:
      'End-to-end rooftop solar installation, from site survey and design to mounting, wiring, and grid connection.',
    icon: Wrench,
  },
  {
    title: 'Maintenance & Support',
    description:
      'Regular cleaning, performance checks, and prompt repair services to keep your solar system running at peak efficiency.',
    icon: ShieldCheck,
  },
  {
    title: 'Financing & Subsidies',
    description:
      'Guidance on government subsidies and flexible financing options so going solar stays affordable for every home.',
    icon: IndianRupee,
  },
  {
    title: 'Energy Consulting',
    description:
      'Personalized energy audits and system sizing to match the right solar capacity to your actual consumption.',
    icon: Leaf,
  },
];

export type WhyChooseUs = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const whyChooseUs: WhyChooseUs[] = [
  {
    title: 'Clean & Reliable Energy',
    description:
      'We make clean energy accessible with high-quality systems built to perform reliably for years.',
    icon: Leaf,
  },
  {
    title: 'Up to 90% Bill Savings',
    description:
      'Our rooftop solar systems are engineered to reduce your monthly electricity bills by up to 90%.',
    icon: IndianRupee,
  },
  {
    title: 'Quality You Can Trust',
    description:
      'Years of experience and an uncompromising focus on quality in every installation we deliver.',
    icon: ShieldCheck,
  },
  {
    title: 'End-to-End Service',
    description:
      'From consultation and design to installation and after-sales support, we handle it all.',
    icon: Wrench,
  },
];

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const contactItems = [
  { label: 'Address', value: '8-412C, Narpala, Anantapur, Andhra Pradesh - 515425', icon: MapPin },
  { label: 'Email', value: 'vallithippi@gmail.com', icon: Mail, href: 'mailto:vallithippi@gmail.com' },
  { label: 'Phone', value: '+91-9652362250', icon: Phone, href: 'tel:+919652362250' },
  { label: 'Business Hours', value: 'Mon–Sat 9:00am–6:00pm', icon: Clock },
];

export const heroImage =
  'https://images.pexels.com/photos/29206488/pexels-photo-29206488.jpeg?auto=compress&cs=tinysrgb&w=1400';
export const aboutImage =
  'https://images.pexels.com/photos/4254158/pexels-photo-4254158.jpeg?auto=compress&cs=tinysrgb&w=1100';
export const batteryImage =
  'https://images.pexels.com/photos/698485/pexels-photo-698485.jpeg?auto=compress&cs=tinysrgb&w=900';
