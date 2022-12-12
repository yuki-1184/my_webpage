import React, { ReactNode, useState } from "react";
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
  Spacer
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { MoonLogo } from '../../data/Icons';

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

  console.log(theme)

  return (
      <Box className="Header" bg={'transaprent'} pt={'50px'} pb={'50px'}>
        <Flex h={16} alignItems={"center"} pl={'50px'} pr={'50px'}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex alignItems={"center"} w={'100%'}>
            <Box>
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
                    <MoonLogo />  
                    </a>
                </Link>
              </HStack> 
            </Box>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
  );
}
