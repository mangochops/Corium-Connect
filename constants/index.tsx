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
  technologies: string[];
  extra: string;

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
    route: "/Services",
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
 

export const Services: Service[] = [
  {
    icon: <Palette />, // Design-related icon
    title: "Design",
    description:
      "Crafting visually appealing and user-friendly designs, from wireframes to full product prototypes. We ensure your brand stands out with pixel-perfect precision and modern aesthetics.",
    technologies: [
      "Figma - for wireframes and prototypes",
      "Adobe XD - for design systems and collaboration",
      "Sketch - for UI/UX design",
      "InVision - for interactive prototyping",
      "Adobe Photoshop & Illustrator - for branding and graphic design",
    ],
    extra: "We prioritize a user-centered design approach, focusing on accessibility and intuitive navigation. From creating mood boards to final product mockups, our design team ensures a cohesive visual experience across all touchpoints."
  },
  {
    icon: <Code />, // Web Development-related icon
    title: "Web Development",
    description:
      "Building responsive, high-performance websites and web applications tailored to your business needs. Our solutions range from static sites to complex full-stack applications.",
    technologies: [
      "React.js - for building interactive user interfaces",
      "Next.js - for server-side rendering and static site generation",
      "Node.js & Express.js - for backend development",
      "GraphQL & REST APIs - for data handling and integration",
      "MongoDB & PostgreSQL - for database management",
      "Tailwind CSS - for modern, utility-first CSS styling",
      "Docker - for containerized development environments",
    ],
    extra: "We follow agile methodologies to ensure timely delivery and continuous improvement. Our team emphasizes clean code, scalability, and security best practices."
  },
  {
    icon: <Settings />, // IT Consultancy-related icon
    title: "IT Consultancy & Maintenance",
    description:
      "Providing expert guidance and support for your IT infrastructure. Our team offers continuous maintenance, troubleshooting, and optimization to ensure your systems run smoothly.",
    technologies: [
      "Puppet & Ansible - for configuration management",
      "AWS & Azure - for cloud infrastructure management",
      "Docker & Kubernetes - for container orchestration",
      "Nginx & Apache - for web server management",
      "Linux (Ubuntu, CentOS) - for server administration",
      "VMWare & Hyper-V - for virtualization solutions",
    ],
    extra: "From monitoring and patching to server management and disaster recovery, our IT services cover every aspect to keep your business running efficiently and securely."
  },
  {
    icon: <Search />, // Digital Forensics-related icon
    title: "Digital Forensics",
    description:
      "Uncovering critical digital evidence through our advanced digital forensics services. We assist businesses in tracing cyber threats, identifying breaches, and securing valuable data.",
    technologies: [
      "EnCase - for digital investigation and forensic analysis",
      "FTK (Forensic Toolkit) - for data recovery and forensic investigation",
      "Autopsy - for open-source digital forensics",
      "Wireshark - for network analysis",
      "Sleuth Kit - for file system analysis",
      "X-Ways Forensics - for efficient disk imaging and data extraction",
    ],
    extra: "We specialize in uncovering critical evidence while adhering to legal and regulatory frameworks. Our forensic experts are experienced in supporting investigations involving data breaches, insider threats, and other forms of cybercrime."
  },
  {
    icon: <Cloud />, // Cloud Consulting-related icon
    title: "Cloud Consulting",
    description:
      "Empowering businesses to migrate, manage, and scale their operations in the cloud. Our expertise in cloud platforms helps you reduce costs, enhance security, and optimize performance.",
    technologies: [
      "AWS (Amazon Web Services) - for cloud hosting and infrastructure",
      "Microsoft Azure - for enterprise cloud solutions",
      "Google Cloud Platform (GCP) - for cloud computing and storage",
      "Terraform - for infrastructure as code (IaC)",
      "Kubernetes - for managing containerized applications",
      "Jenkins - for continuous integration and deployment",
    ],
    extra: "We help businesses adopt the right cloud strategy, focusing on cost optimization, performance improvement, and security enhancements. Our solutions cover everything from cloud architecture to migration and deployment."
  },
  {
    icon: <Brain />, // AI-related icon
    title: "Artificial Intelligence Consulting",
    description:
      "Helping businesses harness the power of AI to drive innovation, automate processes, and gain data-driven insights. From machine learning to natural language processing, we offer end-to-end AI solutions.",
    technologies: [
      "TensorFlow & PyTorch - for machine learning models",
      "Scikit-learn - for data analysis and machine learning",
      "Keras - for deep learning models",
      "OpenAI & GPT models - for natural language processing",
      "Google Cloud AI & AWS AI - for AI infrastructure",
      "Hugging Face - for pre-trained transformer models",
    ],
    extra: "Our AI consulting services span from data collection and preparation to model deployment and integration. Whether it's automating workflows or gaining insights from unstructured data, we help businesses make the most of AI technologies."
  },
];



