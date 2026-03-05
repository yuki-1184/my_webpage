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
    label: "Publications",
    href: "/publications",
    keyboardShortcut: ["u"],
  }),
  createScoutAction({
    label: "Blog",
    href: "/blog",
    keyboardShortcut: ["b"],
  }),
  createScoutAction({
    label: "Contact",
    href: "/contact",
    keyboardShortcut: ["c"],
  }),
];
