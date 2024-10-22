import { ReactNode } from "react";
import {
  Palette,
  Code,
  Settings,
  Search,
  Cloud,
  Brain
} from 'lucide-react'; // Importing icons from lucide-react
interface Service {
  icon: ReactNode; // Allows any valid JSX component, like an icon
  title: string;
  description: string;
}

interface navItems{
  route:string;
  label:string;
}

export const navItems : navItems[]= [
  {
    route: "/",
    label: "Home"
  },
  {
    route: "/about",
    label: "About Us"
  },
  {
    route: "/services",
    label: "Services"
  },
  {
    route: "/foundations",
    label: "Foundations"
  },
  {
    route: "/portfolio",
    label: "Portfolio"
  },
  {
    route: "/contact",
    label: "Contact Us"
  },
];
 

export const Services : Service[] = [
  {
    icon: <Palette />, // Design-related icon
    title: "Design",
    description:
      "Crafting visually appealing and user-friendly designs, from wireframes to full product prototypes. We ensure your brand stands out with pixel-perfect precision and modern aesthetics.",
  },
  {
    icon: <Code />, // Web Development-related icon
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and web applications tailored to your business needs. Our solutions range from static sites to complex full-stack applications.",
  },
  {
    icon: <Settings />, // IT Consultancy-related icon
    title: "IT Consultancy & Maintenance",
    description:
      "Providing expert guidance and support for your IT infrastructure. Our team offers continuous maintenance, troubleshooting, and optimization to ensure your systems run smoothly.",
  },
  {
    icon: <Search />, // Digital Forensics-related icon
    title: "Digital Forensics",
    description:
      "Uncovering critical digital evidence through our advanced digital forensics services. We assist businesses in tracing cyber threats, identifying breaches, and securing valuable data.",
  },
  {
    icon: <Cloud />, // Cloud Consulting-related icon
    title: "Cloud Consulting",
    description:
      "Empowering businesses to migrate, manage, and scale their operations in the cloud. Our expertise in cloud platforms helps you reduce costs, enhance security, and optimize performance.",
  },
  {
    icon: <Brain />, // AI-related icon
    title: "Artificial Intelligence Consulting",
    description:
      "Helping businesses harness the power of AI to drive innovation, automate processes, and gain data-driven insights. From machine learning to natural language processing, we offer end-to-end AI solutions.",
  },
];


