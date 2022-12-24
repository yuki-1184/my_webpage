import React, { ReactNode, useState, useEffect} from "react";
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
  useMediaQuery
} from "@chakra-ui/react";

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonLogo } from '../../data/Icons';
import { StyledHeader } from '../Layout/style';
import styled, { css } from 'styled-components';
import myResume from '../../data/myResume.pdf'

const Links = [
    { goto: '/', link: "Home" },
    { goto: '/about', link: "About" }, 
    { goto: '/projects', link: "Projects" }, 
    { goto: 'contact', link:  "Contact" }
];

const NavLink = ({ children, goto }: { children: ReactNode, goto: string }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: 'rgba(186, 186, 186, 0.33)',
    }}
    href={goto}
  >
    {children}
  </Link>
);

type NavBarProps = {
  theme: string,
  toggleTheme: () => void,
}

const NavBar = ({ theme, toggleTheme }: NavBarProps ) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const [theme, setTheme] = useState(false);
  const [scrolled, setScrolled] = useState('false');
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)');

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled('true')
      } else {
        setScrolled('false')
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <StyledHeader>
      <Flex h={16} alignItems={"center"} pl={isLargerThan800? '80px': '20px'} pr={ isLargerThan800? '80px': '20px'}>
        <Flex alignItems={"center"} w={'100%'}>
          <Box>
            {/* <SkipNavLink>
              <Text fontSize={'4xl'}><strong>SO.</strong></Text>
            </SkipNavLink> */}
            <Link href='/' _hover={{ textDecoration: 'none' }}>
              <Text fontSize={'4xl'}><strong>SO.</strong></Text>
            </Link>
          </Box>
          <Spacer />
          <Box>
            <HStack
              as={"nav"}
              spacing={5}
              display={{ base: "none", md: "flex" }}
              >
              {Links.map(({goto, link} ) => (
                  <NavLink goto={goto} key={link}>{link}</NavLink>
              ))}
              <StyledResume>
                <a href={myResume} target='_blank' rel="noopener noreferrer">
                  Resume
                </a>
              </StyledResume>
              <Box p={['5px', '10px']}>
                <button onClick={() => toggleTheme()}>
                  <StyledLogo theme={theme}>
                    {MoonLogo('24px', '24px')}
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
            variant='outline'
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4} alignItems='center' justifyContent={'center'}>
            {Links.map(({goto, link}) => (
              <NavLink goto={goto} key={link}>{link}</NavLink>
            ))}
            <StyledResume>
              <a href={myResume} target='_blank' rel="noopener noreferrer">
                Resume
              </a>
            </StyledResume>
          </Stack>

          <FormControl display='flex' alignItems='center' justifyContent={'center'} mt={'25px'}>
            <FormLabel htmlFor='dark-theme'>
              <HStack>
                <StyledLogo theme={theme}>
                  {MoonLogo('22px', '22px')}
                </StyledLogo>
                <Text>
                  Dark Theme
                </Text>
                <Switch id='dark-theme' defaultChecked={theme === 'dark' ? true : false} onChange={() => toggleTheme()} />
              </HStack>
            </FormLabel>
          </FormControl>
        </Box>
      ) : null}
    </StyledHeader>
  );
}

const StyledResume = styled('div')`
  a {
    padding: 9px 16px;
    border: solid var(--dark-cyan);
    border-width: 1px;
    border-radius: 5px;
    color: var(--dark-cyan);
    font-weight: 500;
    transition-property: background;
    transition-duration: 200ms;

    &:hover {
      background: var(--light-cyan);
    }
  }
`

type StyledLogoProps = {
  theme: string
}

const StyledLogo = styled('div')<StyledLogoProps>`
  transition: 1s ease-in-out;

  ${(props) => props.theme === 'dark'
    ? css `
      filter: invert(1)
    `
    : null
  }
`

export default NavBar;
