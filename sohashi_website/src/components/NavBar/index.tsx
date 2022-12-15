import React, { ReactNode, useState, useEffect } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Spacer,
  Switch,
  FormControl,
  FormLabel
} from "@chakra-ui/react";
// import { SkipNavLink } from '@chakra-ui/skip-nav'
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonLogo } from '../../data/Icons';
import { StyledHeader } from '../Layout/style';

const Links = ["About", "Experience", "Projects", "Contact"];

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [theme, setTheme] = useState(false);
  const [scrolled, setScrolled] = useState('false');

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
        <Flex h={16} alignItems={"center"} pl={'70px'} pr={'70px'}>
          <Flex alignItems={"center"} w={'100%'}>
            <Box>
              {/* <SkipNavLink>
                <Text fontSize={'4xl'}><strong>SO.</strong></Text>
              </SkipNavLink> */}
              <Text fontSize={'4xl'}><strong>SO.</strong></Text>
            </Box>
            <Spacer />
            <Box>
              <HStack
                as={"nav"}
                spacing={5}
                display={{ base: "none", md: "flex" }}
                >
                {Links.map((link) => (
                    <NavLink key={link}>{link}</NavLink>
                ))}
                <Button colorScheme='teal' variant='outline'>
                    Resume
                </Button>
                <Link>
                    <a 
                    className="nav-moon"
                    aria-label={`Turn On ${
                        theme === false ? 'Light' : 'Dark'
                    } Mood`}
                    onClick={() => setTheme(!theme)}
                    href='/#'
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
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
            <Button colorScheme='teal' variant='outline' mt={'25px'}>
              Resume
            </Button>
            <FormControl display='flex' alignItems='center' justifyContent={'center'} mt={'25px'}>
              <FormLabel htmlFor='dark-theme' onChange={() => setTheme(!theme)} mb='0'>
                <HStack>
                  {MoonLogo('24px', '24px')}
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
