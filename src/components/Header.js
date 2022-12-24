import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];
let oldScrollY = window.scrollY;
const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef();

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      if(oldScrollY < window.scrollY){
        headerRef.current.style.transform = "translateY(0)"
      } else if(oldScrollY > window.scrollY){
        headerRef.current.style.transform = "translateY(-200px)"
      } else if(window.scrollY < 30){
        headerRef.current.style.transform = "translateY(0)"
      }
        oldScrollY = window.scrollY;
    })
  },[])

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={ headerRef }
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {/* Add social media links based on the `socials` data */}
            {
              socials.map((social, index) => {
                return <a href={social.url} key={social.url} style={{margin:'auto 5px'}}>
                  <FontAwesomeIcon
                    icon={social.icon} size="2x"/>
                </a>
                        
              })
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a href="#projects-section" onClick={()=>{handleClick("projects")}}>
                Projects
              </a>
              <a href="#contactme-section" onClick={()=>{handleClick("contactme")}}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
