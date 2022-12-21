import React, { useRef } from 'react';
import { 
    Button, 
    useDisclosure,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Image,
} from '@chakra-ui/react';
import styled, { css } from 'styled-components';

type ProjectCardProps = {
  title: string,
  date: string,
  description: string,
  about: string,
  imageSrc: string,
  link: string,
  github: string,
  technologies: string[]
}

const ProjectCard = (props: ProjectCardProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    // const btnRef = useRef();
    // const drawer_bg = useColorModeValue()
    
    return (
        <StyledProjectCard img={props.imageSrc} onClick={onOpen}>
          <div>
            <h1>{props.title}</h1>
            <h2>{props.description}</h2>
            <p>
                {props.technologies.map((tech, index) => (
                    <span key={index}>{tech}</span>
                ))}
            </p>
          </div>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            size={'md'}
          >
            <DrawerOverlay />
            <DrawerContent bgColor={'rgb(252,255,233)'}>
              <DrawerCloseButton />
              <DrawerHeader borderBottomWidth={'1px'} borderBottomColor={'rbg(90, 90, 90)'}>{props.title}</DrawerHeader>

              <DrawerBody>
                <StyledDrawerBody>
                    <h1>{props.title} ({props.date})</h1>
                    <p>{props.description}</p>
                    <Image src={props.imageSrc} alt={props.title} sx={{ 'border-radius' : '10px' }}></Image>
                    <h2>About</h2>
                    <p>{props.about}</p>
                    <h2>Technologies</h2>
                    <p>
                        {props.technologies.map((tech, index) => (
                            <span key={index}>{tech}</span>
                        ))}
                    </p>
                    {props.link ? (
                        <>
                            <h2>Website</h2>
                            <p>{props.link}</p>
                        </>
                    ) : null }
                    {props.github ? (
                        <>
                            <h2>GitHub</h2>
                            <p>{props.github}</p>
                        </>
                    ) : null }
                </StyledDrawerBody>
              </DrawerBody>

              <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </StyledProjectCard>
    )
}

type IStyledProjectCard = {
    img: string;
}

const StyledProjectCard = styled('li')<IStyledProjectCard>`
    & {
        min-height: 325px;
        position: relative;
        border-radius: 11px;
        margin-top: 10px;
    }

    div {
        height: 100%;
        width: 100%;        
        border-radius: 10px;
        background-image: linear-gradient(to bottom, rgba(214, 214, 214, 0.12), rgba(186, 186, 186, 0.33)),
        url(${props => props.img});
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        transition: bagkground-image 10s ease-in-out;

        h1 {
            display: none;
            position: absolute;
            bottom: 30%;
            color: white;
            font-size: 26px;
            font-weight: 700;
            opacity: 0;
            transition: 3s ease-in-out;
        }
        h2 {
            display: none;
            padding: 0px 20px;
            position: absolute;
            bottom: 20%;
            color: white;
            opacity: 0;
            transition: 3s ease-in-out;
        }
        p {
            display: none;
            padding: 0px 20px;
            position: absolute;
            bottom: 9%;
            color: white;
            opacity: 0;
            transition: 3s ease-in-out;

            span {
                margin-right: 6px;
                padding: 2px 7px;
                border-radius: 20px;
                font-size: 12px;
                background-color: rgba(186, 186, 186, 0.33);
            }
        }
    }

    &:hover {
        div {
            background-image: 
                linear-gradient(to bottom, rgba(126, 126, 126, 0.22), rgba(0, 0, 0, 0.63)),
                url(${props => props.img});
        }

        h1, h2, p {
            display: block;
            opacity: 1;
        }

    }
`

const StyledDrawerBody = styled('div')`
    margin: 0;

    h1 {
        font-size: 22px;
        font-weight: 600;
        line-height: 30px;
    }

    img {
        margin: 20px 0px;
    }

    h2 {
        margin-top: 20px;
        font-size: 18px;
        font-weight: 600;
    }

    p {
        margin: 5px 5px;

        span {
            margin-right: 12px;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 12px;
            background-color: rgba(186, 186, 186, 0.33);
        }
    }
`

export default ProjectCard;
