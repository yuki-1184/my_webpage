import { createScoutAction } from "scoutbar";

export const actions = () => [
  createScoutAction({
    label: "Home",
    href: "/",
    keyboardShortcut: ["h"],
  }),
  createScoutAction({
    label: "About",
    href: "/about",
    keyboardShortcut: ["a"],
  }),
  createScoutAction({
    label: "Projects",
    href: "/projects",
    keyboardShortcut: ["p"],
  }),
  createScoutAction({
    label: "Contact",
    href: "/contact",
    keyboardShortcut: ["c"],
  }),
];
