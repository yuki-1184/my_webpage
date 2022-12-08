import React from "react";
import {
    Box,
    useColorModeValue,
    Image,
    Grid,
    GridItem,
    Heading,
    HStack,
    Flex,
    Stack
} from "@chakra-ui/react"
// import source from "../Images/my_super_cool.jpg"
import navGithub from "../Images/navGithub.svg"
import navLinkedIn from "../Images/navLinkedIn.svg";
import navInsta from "../Images/navInsta.svg";

export default function About() {
    return (
      <Box className="About" bg={useColorModeValue("gray.100", "gray.900")}>
        <Grid
            templateAreas={`"img header1"
                            "img header2"`}
            gridTemplateRows={'150px 150px'}
            gridTemplateColumns={'400px 1fr'}
            h='300px'
        >
          <GridItem pl='2' area={'img'}>
            <Image
                className="about-heading about-img"
                borderRadius='full'
                boxSize='300px'
                src="https://bit.ly/dan-abramov"
                alt='Satoki Ohashi'
            />
          </GridItem>
          <GridItem pl='2' area={'header1'}>
            <Heading className="about-heading about-msg1" as="h1">Software Engineer Based in Tokyo, Japan and California</Heading>
          </GridItem>
          <GridItem pl='2' area={'header2'}>
            <p className="about-heading about-msg2">
                Hi, I am Satoki Ohashi. I am currently an undergraduate student at 
                University of California Santa Cruz and pursuing a career in Software Engineering.
            </p>
            <Flex pt='30px' justifyContent='flex-end' alignItems='center' direction='column'>
                <Box className="about-links">
                <a href="https://www.linkedin.com/in/satoki-ohashi-4ba513253/"><img className="about-img" src={navLinkedIn} alt="Linkedin" /></a>
                <a href="https://www.instagram.com/Satoki716"><img className="about-img" src={navInsta} alt="Instagram" /></a>
                <a href="https://github.com/yuki-1184"><img className="about-img" src={navGithub} alt="GitHub" /></a>
                </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    )
}