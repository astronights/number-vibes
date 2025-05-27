import { Box, Container, Link, Stack } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box>
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        alignItems={"center"}
      >
        <Link href='https://github.com/astronights'>
          Github @astronights
        </Link>
      </Container>
    </Box>
  );
}

export default Footer;