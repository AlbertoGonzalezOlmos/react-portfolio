import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";
import { useField } from "formik";

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

function Header() {
  const [isScrollingUp, setIsScrollingUp] = useState(false);

  const [scrollPosition, setScrollPosition] = useState({ Y: 0, lastY: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition((prevState) => {
        return {
          Y: window.scrollY,
          lastY: prevState.Y,
        };
      });
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition.Y < scrollPosition.lastY) {
      setIsScrollingUp(true);
    } else {
      setIsScrollingUp(false);
    }
    return () => {};
  }, [scrollPosition]);

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

  return (
    <Box
      position={"fixed"}
      top={0}
      left={0}
      right={0}
      transform={"auto"}
      translateY={isScrollingUp || window.scrollY < 100 ? 0 : -200}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8} alignItems="left">
              {socials.map((f, index) => (
                <a
                  key={index}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  children={<FontAwesomeIcon icon={f.icon} size="2x" />}
                />
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8} alignItems="right">
              <a
                href="/#projects"
                children={"Projects"}
                onClick={handleClick("projects")}
              >
                Projects
              </a>

              <a
                href="/#contact-me"
                children={"Contact Me"}
                onClick={handleClick("contactme")}
              >
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
}
export default Header;
