import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Advgen,
  rubi,
  portfolio,
  traveller,
  weather,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile App Developer",
    icon: mobile,
  },
  {
    title: "Software Developer",
    icon: backend,
  },
  {
    title: "Ui Ux Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "RuBi",
    company_name: "01",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Smart Billing App",
    points: [
      "Android mobile application",
      "Developing for small business",
      "User should be able to generate invoices and manage business",
      "Developed using Java, Android Studio and Firebase",
    ],
  },
  {
    title: "Travel Agency",
    company_name: "02",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Travell Sri Lanka",
    points: [
      "Web application application",
      "Developing for travellers in the world wide",
      "User should be able to get information about srilankan visiting palaces",
      "Developed using Codeigniter and PHP",
    ],
  },
  {
    title: "Advice Generator",
    company_name: "03",
    icon: shopify,
    iconBg: "#383E56",
    date: "Smart Advices",
    points: [
      "Web application application",
      "Developing for give advices to the users",
      "User should be able to generate advices",
      "Developed using ReactJs and APIs",
    ],
  },
  {
    title: "Weather App",
    company_name: "04",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Weather World Wide",
    points: [
      "Web application application",
      "Developing for present weather deatails",
      "User should be able to get weather details any location",
      "Developed using Django, Python, Html ,Css and JS",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "RuBi - Smart Billing App",
    description:
      "Developed a mobile application that allows users to generate invoices and manage their small business.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Android Studio",
        color: "green-text-gradient",
      },
      {
        name: "Firebase",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Travel Agency",
    description:
      "Develop a web application that show travelling informations Sri lanka visiting Places",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Codeigniter",
        color: "green-text-gradient",
      },
      
    ],
    image: traveller,
    source_code_link: "https://github.com/",
  },
  {
    name: "Advice Generator",
    description:
      "Develop a web application that generate advices for the users using Apis",
    tags: [
      {
        name: "reactJs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "APIs",
        color: "pink-text-gradient",
      },
    ],
    image: Advgen,
    source_code_link: "https://github.com/",
  },
  {
    name: "Weather App",
    description:
      "Develop a web application for display weather informations of any location to the users",
    tags: [
      {
        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "HtmlCss",
        color: "pink-text-gradient",
      },
    ],
    image: weather,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio",
    description:
      "Develop a web application for display my informations, skills and projects",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
  {
    name: "RuBi - Web",
    description:
      "Developed a web application for luanch and share rubi smart billing android app for users",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "Css",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: rubi,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
