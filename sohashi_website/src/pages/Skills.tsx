import React from "react";
import {
    Box, 
    useColorModeValue, 
    Grid, 
    GridItem, 
    Card,
    CardBody,
    Text,
    SimpleGrid
} from "@chakra-ui/react";
import { LanguageCard } from "../components/LanguageCard"


const languages: string[] = ["Python", "C/C++", "JavaScript", "TypeScript", "HTML"]
const frameworks: string[] = ["React", "Vue", "Scikit-Learn", "TensorFlow", "Flask", "CSS"]
const sphr_elems: string[] = [
    "Python", "C/C++", "JavaScript", 
    "TypeScript", "React", "Vue", 
    "Scikit-Learn", "TensorFlow", "Flask", 
    "Chakra", "HTML", "CSS"
]

// const TagCloud = require('TagCloud');
// const container = '.tagcloud';
// const options = {};
// const sphere = TagCloud(container, sphr_elems, options);

function Skills() {
    return (
        <Box className="Skills-Container" bg={useColorModeValue("gray.400", "gray.800")}>
          <Grid templateColumns='repeat(2, 1fr)' gap={1}>
            <GridItem>
              <h1 className="skills-lang">Languages:</h1>
              <SimpleGrid minChildWidth='100px' spacing='10px'>
                {
                  languages.map((lang, index) => {
                    return (
                      <LanguageCard key={index} msg={lang} />
                    )
                  })
                }
              </SimpleGrid>
              <h1 className="skills-fw">Frameworks:</h1>
              <SimpleGrid minChildWidth='100px' spacing='10px'>
                {
                  frameworks.map((fw, index) => {
                    return (
                      <LanguageCard key={index} msg={fw} />
                    )
                  })
                }
              </SimpleGrid>
            </GridItem>
              {/* <script type="text/javascript" src="./dist/TagCloud.min.js"></script>
              {sphere} */}
            <GridItem>
              
            </GridItem>
          </Grid>
        </Box>
    )
}

export default Skills;