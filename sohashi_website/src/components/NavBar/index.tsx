import React, { ReactNode, useState, useEffect} from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
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
import styled from 'styled-components';
import myResume from '../../data/myResume.pdf'

const Links = [
    { goto: '/about', link: "About" }, 
    { goto: '/experience', link: "Experience" }, 
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
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={goto}
  >
    {children}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [theme, setTheme] = useState(false);
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
                <Link>
                    <a 
                    className="nav-moon"
                    aria-label={`Turn On ${
                        theme === false ? 'Light' : 'Dark'
                    } Mood`}
                    onClick={() => setTheme(!theme)}
                    href='/'
                    >
                    {MoonLogo('24px', '24px')}
                    </a>
                </Link>
              </HStack> 
            </Box>
            <IconButton
                size={"md"}
                icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                aria-label={"Open Menu"}
                display={{ md: "none" }}
                onClick={isOpen ? onClose : onOpen}
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
              <FormLabel htmlFor='dark-theme' onChange={() => setTheme(!theme)} mb='0'>
                <HStack>
                  {MoonLogo('22px', '22px')}
                  <Text>
                    Dark Theme
                  </Text>
                </HStack>
              </FormLabel>
              <Switch id='dark-theme' onChange={() => setTheme(!theme)} />
            </FormControl>
          </Box>
        ) : null}
      </StyledHeader>
  );
}

const StyledResume = styled('div')`
    a {
        padding: 9px 16px;
        border: solid #2C7A7B;
        border-width: 1px;
        border-radius: 5px;
        color: #2C7A7B;
        font-weight: 500;
        transition-property: background;
        transition-duration: 200ms;

        &:hover {
            background: #e1ffe1;
        }
    }
`
