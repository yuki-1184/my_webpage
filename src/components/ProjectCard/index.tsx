import React from "react";
import {
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Image,
} from "@chakra-ui/react";
import styled from "styled-components";

type ProjectCardProps = {
  title: string;
  date: string;
  description: string;
  about: string;
  imageSrc: string;
  link: string;
  github: string;
  technologies: string[];
};

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
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"md"}>
        <DrawerOverlay />
        <DrawerContent
        // bgColor={"#FFFFE0"}
        >
          <DrawerCloseButton />
          <DrawerHeader padding={"0px"}>
            <StyledDrawerHeader>{props.title}</StyledDrawerHeader>
          </DrawerHeader>

          <DrawerBody padding={"0px"}>
            <StyledDrawerBody>
              <h1>
                {props.title} ({props.date})
              </h1>
              <p>{props.description}</p>
              <Image
                src={props.imageSrc}
                alt={props.title}
                sx={{ "border-radius": "10px" }}
              ></Image>
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
                  <p>
                    <a href={props.link} target="_blank" rel="noreferrer">
                      {props.link}
                    </a>
                  </p>
                </>
              ) : null}
              {props.github ? (
                <>
                  <h2>GitHub</h2>
                  <p>
                    <a href={props.github} target="_blank" rel="noreferrer">
                      {props.github}
                    </a>
                  </p>
                </>
              ) : null}
            </StyledDrawerBody>
          </DrawerBody>

          {/* <DrawerFooter>
                <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
                </Button>
                <Button colorScheme='blue'>Save</Button>
              </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </StyledProjectCard>
  );
};

type IStyledProjectCard = {
  img: string;
};

const StyledProjectCard = styled("li")<IStyledProjectCard>`
  min-height: 325px;
  position: relative;
  border-radius: 11px;
  margin-top: 10px;

  div {
    height: 100%;
    width: 100%;
    border-radius: 10px;
    background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.04),
        rgba(0, 0, 0, 0.16)
      ),
      url(${(props) => props.img});
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    transition: 3s ease-in-out;

    h1 {
      position: absolute;
      padding: 0px 10px;
      bottom: 21%;
      color: var(--white);
      font-size: 26px;
      font-weight: 700;
      opacity: 0;
      transition-property: opacity, bottom;
      transition: 0.5s ease-in-out;
    }
    h2 {
      padding: 0px 20px;
      position: absolute;
      bottom: 11%;
      color: var(--white);
      opacity: 0;
      transition-property: opacity, bottom;
      transition: 0.5s ease-in-out;
    }
    p {
      padding: 0px 20px;
      position: absolute;
      bottom: 0%;
      color: var(--white);
      opacity: 0;
      transition-property: opacity, bottom;
      transition: 0.5s ease-in-out;

      span {
        margin-right: 6px;
        padding: 2px 7px;
        border-radius: 20px;
        font-size: 12px;
        background-color: rgba(186, 186, 186, 0.33);
      }
    }

    &:hover {
      background-image: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.05),
          rgba(0, 0, 0, 0.78)
        ),
        url(${(props) => props.img});

      h1 {
        bottom: 30%;
        opacity: 1;
      }
      h2 {
        bottom: 20%;
        opacity: 1;
      }
      p {
        bottom: 9%;
        opacity: 1;
      }
    }
  }
`;

const StyledDrawerHeader = styled("div")`
  padding: 16px 24px;
  color: var(--notbg);
  background-color: var(--drawer-bgcolor);
  border-bottom: 1px solid var(--notbg);
`;

const StyledDrawerBody = styled("div")`
  margin: 0;
  padding: 8px 24px;
  color: var(--notbg);
  background-color: var(--drawer-bgcolor);
  min-height: 100%;

  h1 {
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
  }

  img {
    margin: 20px 0px;
    border: 1px solid var(--dark-gray);
  }

  h2 {
    margin-top: 25px;
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
      background-color: var(--drower-langtagbg);
    }

    a {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default ProjectCard;
