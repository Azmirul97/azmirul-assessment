"use client";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import { useMovieContext } from "./MovieProvider";

interface Props {
  children: React.ReactNode;
  onClick?: () => void;
}

const Links = [
  "Home",
  "Movies",
  "TV Show",
  "Video",
  "FAQ",
  "Pricing",
  "Contact Us",
];

const NavLink = (props: Props) => {
  const { children, onClick } = props;
  return (
    <Box
      color={"white"}
      as="a"
      px={2}
      py={1}
      _hover={{
        borderBottom: "4px solid #ECC94B",
      }}
      href={"#"}
      onClick={onClick} // Attach the onClick handler
    >
      {children}
    </Box>
  );
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setDisplayFinder } = useMovieContext();

  const handleHomeClick = () => {
    // Refresh the page
    window.location.reload();
  };

  return (
    <>
      <Box px={20} py={2}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box>
              <Heading color={"white"} size={"lg"}>
                PcariMovie
              </Heading>
            </Box>
            <HStack
              px={5}
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink
                  key={link}
                  onClick={link === "Home" ? handleHomeClick : undefined}
                >
                  {link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                boxSize={10}
                mx={10}
                _hover={{ color: "black", bgColor: "gray.200" }}
                as={Button}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <SearchIcon boxSize={6} />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => setDisplayFinder(1)}>
                  Search by Theatre
                </MenuItem>
                <MenuItem onClick={() => setDisplayFinder(2)}>
                  Search by Timeslot
                </MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
                variant={"link"}
                cursor={"pointer"}
                minW={0}
              >
                <HStack>
                  <Avatar size={"md"} />
                  <Text mx={2}>Azmirul</Text>
                </HStack>
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuDivider />
                <MenuItem>Link 2</MenuItem>
              </MenuList>
            </Menu>
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
    </>
  );
}
