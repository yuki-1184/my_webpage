import React, { useRef } from 'react';
import { 
    Button, 
    useDisclosure,
    Drawer,
    Image,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input
} from '@chakra-ui/react';
import styled from 'styled-components';

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
    
    return (
        <StyledProjectCard onClick={onOpen}>
          <div></div>
          <img src={props.imageSrc} alt={props.title}></img>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Create your account</DrawerHeader>

              <DrawerBody>
                <Input placeholder='Type here...' />
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

const StyledProjectCard = styled.li`
    /* min-width: 300px;
    min-height: 250px;
    position: relative; */
    display: inline-block;

    img {
        margin: 20px auto;
        background: #010002;
        border: solid;
        border-radius: 10px;
        z-index: -1;
    }

    &:before 
    &:after {
        position: absolute;
        top: -3px;
        left: -3px;
        background: linear-gradient(45deg,#fb0094,#0000ff,#00ff00,#ff0000,#fb0094,#0000ff,#00ff00,#ff0000);
        background-size: 400% 400%;
        width: calc(100% + 5px);
        height: calc(100% + 5px);
        border-radius: 20px;
        z-index: -1;
        animation: animate 10s ease-in-out alternate infinite;
    }

    &:after {
        filter: blur(20px);
    }

    @keyframes animate{
        0%{
          background-position: 0 50%;
        }
        50%{
          background-position: 100% 50%;
        }
        100%{
          background-position: 0% 50%;
        }
    }
`


export default ProjectCard;
