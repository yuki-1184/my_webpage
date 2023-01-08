import React, { ReactNode, useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Text,
  Spacer,
  Switch,
  FormControl,
  FormLabel,
  useMediaQuery,
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonLogo } from "../../data/Icons";
import { StyledHeader } from "../Layout/style";
import styled, { css } from "styled-components";
import myResume from "../../data/myResume.pdf";

const Links = [
  { goto: "/", link: "Home" },
  { goto: "/about", link: "About" },
  { goto: "/projects", link: "Projects" },
  { goto: "contact", link: "Contact" },
];

// const LOCAL_STORAGE_KEY1 = "CurrentPage"

type NavLinkProps = {
  children: JSX.Element; 
  goto: string;
  link: string;
  setPage: (page: string) => void;
}

const NavLink = ({ children, goto, link, setPage}: NavLinkProps) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "rgba(186, 186, 186, 0.33)",
      }}
      onClick={() => setPage(link)}
      href={goto}
    >
      {children}
    </Link>
);

type NavBarProps = {
  theme: string;
  toggleTheme: () => void;
};

const NavBar = ({ theme, toggleTheme }: NavBarProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [scrolled, setScrolled] = useState("false");
  const [isLargerThan900] = useMediaQuery("(min-width: 900px)");
  const [ page, setPage ] = useState("");

  // useEffect(() => {
  //   const onScroll = () => {
  //     if (window.scrollY > 50) {
  //       setScrolled("true");
  //     } else {
  //       setScrolled("false");
  //     }
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  // useEffect(() => {
  //   const storedPage = localStorage.getItem(LOCAL_STORAGE_KEY1);
  //   if (storedPage) {
  //     setPage(storedPage);
  //   }
  // })

  // useEffect(() => {
  //   localStorage.setItem(LOCAL_STORAGE_KEY1, page)
  // }, [page])

  return (
    <StyledHeader>
      <Flex
        h={16}
        alignItems={"center"}
        pl={isLargerThan900 ? "80px" : "20px"}
        pr={isLargerThan900 ? "80px" : "20px"}
      >
        <Flex alignItems={"center"} w={"100%"}>
          <Box className="navbar-my-name" fontSize={"4xl"} fontWeight={"bold"}>
            <Link href="/" _hover={{ textDecoration: "none" }}>
              SO.
            </Link>
          </Box>
          <Spacer />
          <Box>
            <HStack
              as={"nav"}
              spacing={5}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map(({ goto, link }) => (
                <NavLink 
                  key={link} 
                  goto={goto} 
                  link={link}
                  setPage={setPage}
                >
                  <StyledNavLink className={link === page ? "navlink-selected" : "navlink-normal"}>
                    {link}
                  </StyledNavLink>
                </NavLink>
              ))}
              <StyledResume>
                <a href={myResume} target="_blank" rel="noopener noreferrer">
                  Resume
                </a>
              </StyledResume>
              <Box p={["5px", "10px"]}>
                <button onClick={() => toggleTheme()}>
                  <StyledLogo theme={theme}>
                    {MoonLogo("24px", "24px")}
                  </StyledLogo>
                </button>
              </Box>
            </HStack>
          </Box>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
            variant="outline"
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack
            as={"nav"}
            spacing={4}
            alignItems="center"
            justifyContent={"center"}
          >
            {Links.map(({ goto, link }) => (
              <NavLink 
                key={link} 
                goto={goto} 
                link={link}
                setPage={setPage}
              >
                <StyledNavLink className={link === page ? "navlink-selected" : "navlink-normal"}>
                  {link}
                </StyledNavLink>
              </NavLink>
            ))}
            <StyledResume>
              <a href={myResume} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </StyledResume>
          </Stack>

          <FormControl
            display="flex"
            alignItems="center"
            justifyContent={"center"}
            mt={"25px"}
          >
            <FormLabel htmlFor="dark-theme">
              <HStack>
                <StyledLogo theme={theme}>
                  {MoonLogo("22px", "22px")}
                </StyledLogo>
                <Text>Dark Theme</Text>
                <Switch
                  id="dark-theme"
                  defaultChecked={theme === "dark" ? true : false}
                  onChange={() => toggleTheme()}
                />
              </HStack>
            </FormLabel>
          </FormControl>
        </Box>
      ) : null}
    </StyledHeader>
  );
};

type StyledNavLinkProps = {
  className: string;
}

const StyledNavLink = styled("div")<StyledNavLinkProps>`
  /* ${(props) => props.className === "navlink-selected"
    ? css `
      color: var(--navbar-page)
    `
    : css `
      color: var(--notbg)
    `
  } */
`

const StyledResume = styled("div")`
  a {
    padding: 9px 16px;
    border: solid var(--button-border);
    border-width: 1px;
    border-radius: 5px;
    color: var(--button-border);
    font-weight: 500;
    transition-property: background;
    transition-duration: 200ms;

    &:hover {
      background: var(--button-background);
    }
  }
`;

type StyledLogoProps = {
  theme: string;
};

const StyledLogo = styled("div")<StyledLogoProps>`
  transition: 1s ease-in-out;

  ${(props) =>
    props.theme === "dark"
      ? css`
          filter: invert(1);
        `
      : null}
`;

export default NavBar;
