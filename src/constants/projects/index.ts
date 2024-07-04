import yumemi_frontend_img from "../../Images/yumemi_frontend_portfolio.png";
import my_portfolio_img from "../../Images/my_portfolio.png";
import upcoming_img from "../../Images/upcoming.png";
import genPlate from "../../Images/genPlate.png";
import upcoming_sxc from "../../Images/upcoming-sxc.jpeg"

export const PROJECTS = [
    {
      title: "ServiceXchange",
      date: "Jan 2022 - Current",
      description: "Connect people. Provide services.",
      about: 
        "ServiceXchange (sXc) is a centralized service network connecting service providers from a wide variety of disciplines with recurrent customers. The app allows anyone to easily request or provide a service whether it be a babysitting gig, a grocery delivery driver, handyman, or online consultant.",
      imageSrc: upcoming_sxc,
      link: "",
      github: "",
      technologies: ["SwiftUI", "Firebase", "iOS"],
    }, 
    {
      title: "GenPlate",
      date: "Dec 2022 - Current",
      description: "Auto-generates Email templates.",
      about:
        "GenPlate is a web application where users can create their own E-mail or SNS templates with simple user interface. The app is not complete yet and we're adding more features and test thoroughly to make sure app works fine.",
      imageSrc: genPlate,
      link: "https://genplate.app/",
      github: "",
      technologies: ["TypeScript", "React", "Chakra-UI", "Node.js"],
    },
    {
      title: "Portfolio",
      date: "Dec 2022",
      description: "My first personal portfolio website",
      about:
        "This is my first portfolio website, what you're exploring now. Thank you for visiting my website.",
      imageSrc: my_portfolio_img,
      link: "https://satokiohashi.com/",
      github: "https://github.com/yuki-1184/my_webpage",
      technologies: ["TypeScript", "React", "Chakra-UI", "HTML", "CSS"],
    },
    {
      title: "Multi-Threaded HTTP Server",
      date: "Nov 2022 - Current",
      description: "Deals with concurrency by synchronization",
      about:
        "Created a multi-threaded http server that handles multiple client requests simutaneously by using Synchronization. The implementation includes, strong modularity, high-level system design, HTTP protocols, client-server architecture, atomicity and coherency, own testing scripts, and understanding in POSIX.",
      imageSrc: upcoming_img,
      link: "",
      github: "",
      technologies: ["C", "Bash", "POSIX"],
    },
    {
      title: "Yumemi-Frontend",
      date: "May 2022 - June 2022",
      description: "Personal project to get started with web-development",
      about:
        "This is an open coding assesment provided by Yumemi Inc. Built a single page web application to display the population change in each prefecture in Japan. \n * The application requires RESAS API-Key.",
      imageSrc: yumemi_frontend_img,
      link: "https://yuki-1184.github.io/yumemi-frontend/",
      github: "https://github.com/yuki-1184/yumemi-frontend",
      technologies: ["JavaScript", "React", "RESAS API"],
    },
  ];
  