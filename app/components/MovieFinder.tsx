"use client";

import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Heading,
  HStack,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useMovieContext } from "./MovieProvider";

const MovieFinder = () => {
  const { displayFinder, fetchMovies, movies, searchMovies } =
    useMovieContext();
  const [theaterName, setTheaterName] = useState("");
  const [date, setDate] = useState("");
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");

  const handleSearch = () => {
    searchMovies({
      theaterName,
      date,
      timeEnd,
      timeStart,
    });
  };

  useEffect(() => {
    handleSearch();
  }, []);

  // function pattern 1
  // function foo1() {
  //   return "foo1";
  // }

  // function pattern 2
  // const foo2 = () => "foo2";
  // consoles
  // console.log({ foo1: foo1, foo2: foo2, foo1Value: foo1() });

  return (
    <HStack
      justifyContent={"center"}
      width={"50%"}
      ml={"auto"}
      mr={"auto"}
      my={150}
    >
      <Image
        boxSize={"250px"}
        src="/play_yellow_button.png"
        alt="play image"
        mr={20}
      ></Image>

      {displayFinder === 0 && (
        <VStack align={"start"}>
          <Heading color={"white"} size={"3xl"} lineHeight={1.2}>
            Find your movies here!
          </Heading>
          <Text color={"white"} marginTop={10}>
            Explore our gallery full of exciting films from all around the globe
            only for your entertainment. No hidden charges or disturbing ads.
          </Text>
        </VStack>
      )}

      {displayFinder === 1 && (
        <VStack spacing={4} align={"start"}>
          <Heading color={"white"} width={"100%"} whiteSpace={"nowrap"}>
            Search your movies here!
          </Heading>
          <VStack align={"start"} spacing={3}>
            <HStack>
              <InputGroup width={"65%"}>
                <InputLeftElement>
                  <SearchIcon />
                </InputLeftElement>
                <Input
                  borderRadius={20}
                  placeholder="Search by theatre..."
                  variant={"filled"}
                  value={theaterName}
                  onChange={(e) => setTheaterName(e.target.value)}
                  _focus={{
                    borderColor: "yellow.400", // Change border color when focused
                    color: "white", // Change text color when focused
                  }}
                />
              </InputGroup>
              <Input
                type="date"
                variant={"filled"}
                borderRadius={20}
                width={"35%"}
                value={date}
                onChange={(e) => setDate(e.target.value)}
                _focus={{
                  borderColor: "yellow.400", // Change border color when focused
                  color: "white", // Change text color when focused
                }}
              ></Input>
            </HStack>
            <Button
              bgColor="yellow.400"
              borderRadius={20}
              onClick={handleSearch}
            >
              Search
            </Button>
          </VStack>
        </VStack>
      )}

      {displayFinder === 2 && (
        <VStack spacing={4}>
          <Heading color={"white"} width={"100%"} whiteSpace={"nowrap"}>
            Search your movies here!
          </Heading>
          <VStack align={"start"} spacing={3} width={"100%"}>
            <InputGroup width={"100%"}>
              <InputLeftElement>
                <SearchIcon />
              </InputLeftElement>
              <Input
                borderRadius={20}
                placeholder="Theater name..."
                variant={"filled"}
                value={theaterName}
                onChange={(e) => setTheaterName(e.target.value)}
                _focus={{
                  borderColor: "yellow.400", // Change border color when focused
                  color: "white", // Change text color when focused
                }}
              />
            </InputGroup>
            <HStack width={"100%"}>
              <Input
                fontSize={14}
                type="datetime-local"
                variant={"filled"}
                borderRadius={20}
                width={"50%"}
                value={timeStart}
                onChange={(e) => setTimeStart(e.target.value)}
                _focus={{
                  borderColor: "yellow.400", // Change border color when focused
                  color: "white", // Change text color when focused
                }}
              ></Input>
              <Input
                fontSize={14}
                type="datetime-local"
                variant={"filled"}
                borderRadius={20}
                width={"50%"}
                value={timeEnd}
                onChange={(e) => setTimeEnd(e.target.value)}
                _focus={{
                  borderColor: "yellow.400", // Change border color when focused
                  color: "white", // Change text color when focused
                }}
              ></Input>
            </HStack>
            <Button
              bgColor="yellow.400"
              borderRadius={20}
              onClick={handleSearch}
            >
              Search
            </Button>
          </VStack>
        </VStack>
      )}
    </HStack>
  );
};

export default MovieFinder;
