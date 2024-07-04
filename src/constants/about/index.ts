import { url } from "node:inspector";
import { title } from "node:process";
import { describe } from "node:test";

export const EDUCATION = {
    degree: "BS in Computer Engineering, University of California Santa Cruz",
    date: "June 2024",
    clubs: "Member of Japanese Student Association",
    courses: [
        "Computer System Design",
        "Algorithms and Abstract Data Types",
        "Computer Architecture",
        "Computer Networks",
        "Applied Machine Learning",
    ],
};

export const EXPERIENCES = [
    {
        title: "Brinqa",
        type: "Frontend Developer Intern",
        date: "Jan 2024 - Jun 2024",
        location: "Santa Cruz, USA",
        description: "Collaborated directly with Brinqa's engineering manager to develop a user-friendly component that enables the creation and management of personalized onboarding guides for new users. Led a team of five in the design and development of an onboarding guide, including the creation of its dedicated website.",
        url: "https://www.brinqa.com/",
        technologies: ["TypeScript", "Angular", "Figma"]   
    },
    {
        title: "Partsone, Inc.",
        type: "Fullstack Developer Intern",
        date: "Jul 2023 - Dec 2023",
        location: "Tokyo, Japan",
        description: "Worked a crucial role as a member of the front-end development team in the development of UZONE app. Cooperated with the backend team to implement end-to-end features, showing full-stack capabilities.",
        url: "https://www.partsone7.com/",
        technologies: ["TypeScript", "React", "PHP", "PHP Laravel"]
    },
    {
        title: "STMN, Inc.",
        type: "Frontend Developer Intern",
        date: "Aug 2023",
        location: "Nagoya, Japan",
        description: "Collaborated with the front-end team to perform front-end replacement and enhancements for TUNAG app. Designed and implemented a new component for the company’s component library. Wrote comprehensive unit tests using Jest to validate the functionality of the features I implemented.",
        url: "https://stmn.co.jp/",
        technologies: ["Next.js", "TypeScript", "React", "Storybook", "Jest"]
    },
    {
      title: "e-Seikatsu",
      type: "Software Engineer Intern",
      date: "Aug 2022 - Sep 2022",
      location: "Tokyo, Japan",
      description:
        "Used modern web technologies to build a website that looks up for rentals. Implemented heat map searching feature using map API with a team mate.",
      url: "https://www.e-seikatsu.info/en/",
      technologies: ["TypeScrips", "Vue", "GitHub"],
    },
];