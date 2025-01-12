import { Box, Flex,Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
    return (
      <Box as="nav" bg="teal.500" p={4} color="white">
        <Flex justify="space-between" align="center">
          <Heading size="md">Gestión de Hábitos</Heading>
          <Flex gap={4}>
            <Link as={RouterLink} to="/" color="white">
              Inicio
            </Link>
            <Link as={RouterLink} to="/habit/new" color="white">
              Nuevo Hábito
            </Link>
          </Flex>
        </Flex>
      </Box>
    );
  };

export default Navbar;