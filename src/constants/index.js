import header_img from "../assets/header_img.png";
import brand_img from "../assets/brand_img.png";
import cross_icon from "../assets/cross_icon.svg";
import menu_icon from "../assets/menu_icon.svg";
import left_arrow from "../assets/left_arrow.svg";
import right_arrow from "../assets/right_arrow.svg";
import project_img_1 from "../assets/project_img_1.jpg";
import project_img_2 from "../assets/project_img_2.jpg";
import project_img_3 from "../assets/project_img_3.jpg";
import project_img_4 from "../assets/project_img_4.jpg";
import project_img_5 from "../assets/project_img_5.jpg";
import project_img_6 from "../assets/project_img_6.jpg";
import profile_img_1 from "../assets/profile_img_1.png";
import profile_img_2 from "../assets/profile_img_2.png";
import profile_img_3 from "../assets/profile_img_3.png";

export const assets = {
  header_img,
  cross_icon,
  menu_icon,
  left_arrow,
  right_arrow,
};

export const links = [
  {
    name: "Home",
    link: "#Header",
  },
  {
    name: "About",
    link: "#About",
  },
  {
    name: "Projects",
    link: "#Projects",
  },
  {
    name: "Testimonials",
    link: "#Testimonials",
  },
];

export const header = {
  heading: "Find Your Perfect Home with Ease.",
  text: "Discover a wide range of homes tailored to your needs. From cozy apartments to luxurious villas, we make your dream home a reality. Start your journey today and find a place you'll love to call home.",
  buttons: [
    {
      title: "Projects",
      href: "#Projects",
      className: "text-bitBlack border-yummyYellow",
    },
    {
      title: "Contact Us",
      href: "#Contact",
      className: "text-bitBlack border-yummyYellow bg-yummyYellow",
    },
  ],
};

export const about = {
  heading: "About",
  subHeading: "Our Brand",
  text: "Passionate About Properties, Dedicated to Your Vision.",
  img: brand_img,
  imgAlt: "About section image",
  aboutText:
    "We are a team of professionals who are passionate about properties. We are dedicated to helping you find the perfect property that fits your vision. We understand that buying a property is a big decision and we are here to help you every step of the way.",
  stats: [
    {
      number: "10+",
      text: "Years of Expertise in Real Estate Development.",
    },
    {
      number: "12+",
      text: "Successful Projects Delivered with Excellence.",
    },
    {
      number: "20+",
      text: "Million Square Feet Delivered to Clients.",
    },
    {
      number: "25+",
      text: "Projects in Progress, Ensuring Timely Delivery.",
    },
  ],
};

export const projects = {
  heading: "Projects",
  subHeading: "Completed",
  text: "Crafting Spaces, Building Legacies-Explore Our Portfolio",
  projectsData: [
    {
      title: "Les Jardins d'Alger",
      price: "DZD 30,000,000",
      location: "Algiers",
      image: project_img_1,
    },
    {
      title: "Résidence El-Mouradia",
      price: "DZD 45,000,000",
      location: "Algiers",
      image: project_img_2,
    },
    {
      title: "Villa des Pins",
      price: "DZD 50,000,000",
      location: "Oran",
      image: project_img_3,
    },
    {
      title: "Cité du Soleil",
      price: "DZD 38,000,000",
      location: "Constantine",
      image: project_img_4,
    },
    {
      title: "Résidence Sidi Yahia",
      price: "DZD 35,000,000",
      location: "Tlemcen",
      image: project_img_5,
    },
    {
      title: "Plage d'Or",
      price: "DZD 60,000,000",
      location: "Bejaia",
      image: project_img_6,
    },
  ],
};

export const testimonials = {
  heading: "Customer",
  subHeading: "Testimonials",
  text: "Real Stories from those who have experienced our services",
  testimonialsData: [
    {
      name: "Ali Mohammed",
      title: "Amazing service",
      image: profile_img_1,
      alt: "Portrait of Ali Mohammed",
      rating: 5,
      text: "I was looking for a property that would align with my business goals, and they delivered beyond expectations. The team was knowledgeable and helped me make the best decision.",
    },

    {
      name: "Abdelkader Ahmed",
      title: "Great experience",
      image: profile_img_2,
      alt: "Portrait of Abdelkader Ahmed",
      rating: 4,
      text: "The team at Estate really took the time to understand what I was looking for and guided me every step of the way. I found the perfect property for my family, and I couldn't be happier.",
    },
    {
      name: "Omar Zayd",
      title: "Amazing service",
      image: profile_img_3,
      alt: "Portrait of Omar Zayd",
      rating: 5,
      text: "As an architect, I have a very specific vision when it comes to properties. The team understood my needs and helped me find a home that matched my design aspirations perfectly.",
    },
  ],
};

export const footer = {
  logo: "PrimeHomes",
  description:
    "PrimeHomes is your trusted partner in real estate, offering top-tier services to help you find your dream property. With expertise in residential and commercial spaces, we’re committed to making your real estate journey seamless and rewarding.",
  newsletter: "Subscribe to our newsletter",
  newsletterText:
    "Get the latest property listings, market insights, and real estate tips delivered to your inbox every week.",
  inputPlaceholder: "Enter your email",
  buttonText: "Subscribe",
  rightsText: "2024 Devlopped by",
  rightsLink: "https://www.linkedin.com/in/marzen-alaaeddine/",
  rightsLinkText: "MARZEN AlaaEddine",
};
