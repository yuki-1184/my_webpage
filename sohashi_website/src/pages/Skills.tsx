import React, { useEffect, useState } from "react";
import { useScript } from 'usehooks-ts';
import { Box, useColorModeValue, Grid, GridItem, SimpleGrid} from "@chakra-ui/react";
import { LanguageCard } from "../components/LanguageCard"
// import TagCloud from "@types/react-tagcloud"


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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const TagCloud: any

function Skills() {
    const [sphere, setSphere] = useState('hello');
    const status = useScript(`https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js`, {
      removeOnUnmount: false,
    })

    useEffect(() => {
      if (typeof TagCloud !== 'undefined') {
        const tagCloud = TagCloud('.content', sphr_elems, {

          // radius in px
          radius: 300,
        
          // animation speed
          // slow, normal, fast
          maxSpeed: 'fast',
          initSpeed: 'fast',
        
          // 0 = top
          // 90 = left
          // 135 = right-bottom
          direction: 135,
        
          // interact with cursor move on mouse out
          keep: true
        
        });
        setSphere(tagCloud)
      }
    }, [status])

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
            <GridItem>
              <p>{sphere}</p>
              <p>hello</p>
            </GridItem>
          </Grid>
        </Box>
    )
}

export default Skills;