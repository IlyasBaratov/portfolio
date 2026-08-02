import type { Project, Service } from "./types";

export const marqueeImages = [
  "/gifs/arduino-autonomous-robot-preview.gif",
  "/gifs/djiboutian-community-preview.gif",
  "/gifs/saquito-shop-preview.gif",
  "/gifs/sober-driver-preview.gif",
  "/gifs/weather-analytics-preview.gif",
  "/gifs/kss-lounge-preview.gif",
  /*
  "https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif",
  "https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif",
  "https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif",
  "https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif",
  "https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif",
  "https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif",
  "https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif",
  "https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif",
  "https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif",
  "https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif",
  "https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif",
  "https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif",
  "https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif",
  "https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif",
  "https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif",
  */
] as const;

export const services: Service[] = [
  {
    number: "01",
    name: "Full-Stack Web Development",
    description:
      "Custom, responsive websites and web applications built with React, FastAPI, Spring Boot, and modern development tools.",
  },
  {
    number: "02",
    name: "Business Websites & Admin Dashboards",
    description:
      "Professional websites with easy-to-use dashboards that let business owners manage products, images, menus, content, and customer information.",
  },
  {
    number: "03",
    name: "API & Database Development",
    description:
      "Secure backend systems, REST APIs, authentication, and database integration using PostgreSQL, MySQL, SQLite, and third-party services.",
  },
  {
    number: "04",
    name: "Cloud Deployment & DevOps",
    description:
      "Application deployment, domain setup, HTTPS, Docker configuration, CI/CD, and cloud hosting through AWS, Azure, Vercel, Render, and Linux servers.",
  },
  {
    number: "05",
    name: "AI Integration & Automation",
    description:
      "Intelligent features powered by AI, including chatbots, content automation, data analysis, recommendation systems, and AI-assisted business workflows.",
  },
];

export const projects: Project[] = [
  {
    number: "01",
    name: "Sober Driver Dashboard",
    category: "Full-Stack Web App",
    description:
      "Sober Driver is a full-stack web application designed to help users request safe rides from verified sober drivers, reducing risks associated with impaired driving. The platform features a user-friendly interface where riders can register, request a driver, and track ride status in real-time. The backend, built with Spring Boot, handles authentication, trip management, and secure data persistence through PostgreSQL. The RESTful API enables seamless communication between the backend and a React-based frontend, providing dynamic updates for ride requests and driver availability.",
    image: "/projects/sober-driver-dashboard.png",
    githubUrl: "https://github.com/IlyasBaratov/SpringBootDriverProject",
  },
  {
    number: "02",
    name: "Weather Analytics",
    category: "Cloud Analytics",
    description:
      "A FastAPI-based Weather Analytics Platform integrated with the OpenWeather API to deliver real-time and forecast weather data with persistent storage, clean architecture, and a lightweight frontend.",
    image: "/projects/weather-analytics.png",
    liveUrl: "https://app-weather-analytics.azurewebsites.net/",
    githubUrl: "https://github.com/IlyasBaratov/WeatherAnalytics",
  },
  {
    number: "03",
    name: "Arduino Labyrinth Escaping Robot",
    category: "Embedded Robotics",
    description:
      "Autonomous Labyrinth-Solving Robot built from the ground up using Arduino Uno, L293D motor driver, ultrasonic sensors, and a custom 4-wheel drive chassis. Programmed to detect obstacles, map paths, and navigate complex mazes without human input. Integrated Java-Arduino serial communication for real-time control and data logging.",
    image: "/projects/arduino-labyrinth-robot.jpg",
    githubUrl: "https://github.com/IlyasBaratov/ArduinoProject",
  },
  {
    number: "04",
    name: "Saquito Shop web",
    category: "E-Commerce",
    description:
      "Artisan florals and handcrafted scents, with every bouquet made to order and every perfume blended by hand.",
    image: "/projects/saquito-shop.png",
    liveUrl: "https://www.saquitoshop.com/",
  },
  {
    number: "05",
    name: "Djiboutian American Community Web",
    category: "Community Platform",
    description:
      "We bring Djiboutian-Americans together through cultural events, social activities, and educational resources, creating meaningful connections and lasting impact in Seattle.",
    image: "/projects/djiboutian-american-community.png",
    liveUrl: "https://djiboutarian-american-community.vercel.app/",
  },
];
