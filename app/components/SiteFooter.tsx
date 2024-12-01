"use client";

import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Flex,
  Link,
  Text,
  Container,
  VStack,
  HStack,
  InputGroup,
  InputRightElement,
  Button,
  Input,
} from "@chakra-ui/react";

import React from "react";

const footerData = [
  {
    label: "Product",
    href: "#",
    links: [
      { label: "Movies", href: "#" },
      { label: "TV Show", href: "#" },
      { label: "Videos", href: "#" },
    ],
  },
  {
    label: "Media Group",
    href: "#",
    links: [
      { label: "Nice Studio", href: "#" },
      { label: "Nice News", href: "#" },
      { label: "Nice TV", href: "#" },
    ],
  },
  {
    label: "Sitemap",
    href: "#",
    links: [
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" },
    ],
  },
];

const SiteFooter = () => {
  return (
    <div>
      <HStack
        bg={"gray.800"}
        justifyContent={"space-between"}
        alignItems={"stretch"}
      >
        <Container margin={0} padding={"3%"} bg={"gray.700"} height={"100%"}>
          <Text fontSize={"5xl"} marginBottom={6} color={"white"}>
            PcariMovie
          </Text>
          <Text color={"white"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et.
          </Text>

          <Container marginY={6} padding={0}>
            <Text color={"white"}>Join Newsletters</Text>
            <InputGroup marginY={6}>
              <Input
                border={0}
                bg={"gray.600"}
                height={"48px"}
                placeholder="Insert your mail here"
              />
              <InputRightElement margin={1}>
                <Button bg={"yellow.400"}>
                  <ArrowForwardIcon />
                </Button>
              </InputRightElement>
            </InputGroup>
          </Container>
        </Container>

        <Container
          maxW="7xl"
          p={{ base: 5, md: 10 }}
          marginRight={"10%"}
          marginTop={"auto"}
          marginBottom={"auto"}
        >
          <VStack spacing={5} alignItems="initial">
            <Flex
              flexWrap="wrap"
              direction={{ base: "column", md: "row" }}
              alignItems="start"
              justifyContent="space-between"
            >
              {footerData.map((data, index) => (
                <Flex key={index} direction="column" mb="3">
                  <Link
                    fontWeight="600"
                    href={data.href}
                    padding={3}
                    color="white"
                  >
                    {data.label}
                  </Link>
                  <Flex direction={{ base: "row", md: "column" }}>
                    {data.links.map((link, index) => (
                      <Link
                        key={index}
                        padding={3}
                        fontSize={{ base: "sm", sm: "md" }}
                        href="#"
                        mr={{ base: 1, sm: 2, md: 0 }}
                        color="white"
                        _hover={{ color: "orange" }}
                        fontWeight="200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </Flex>
                </Flex>
              ))}
            </Flex>
            <Flex justify={"space-between"}>
              <Text color="white" fontSize="0.875rem" pl="0.5rem">
                8819 Ohio St. South Gate, California 90280
              </Text>
              <Text color="white" fontSize="0.875rem" pl="0.5rem">
                ourstudio@hello.com
              </Text>
              <Text color="white" fontSize="0.875rem" pl="0.5rem">
                +271 386-647-3637
              </Text>
            </Flex>
          </VStack>
        </Container>
      </HStack>
    </div>
  );
};

export default SiteFooter;
