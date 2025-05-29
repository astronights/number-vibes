import { Box, Container, Link, Stack, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex
        px={4}
        h={12}
        boxShadow={"base"}
        zIndex="sticky"
        position="fixed"
        as="footer"
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
        borderWidth="1px"
        borderColor="border.disabled"
        bg="chakra-body-bg"
        bottom={0}
      >
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
      </Flex>
    </>
  );
}

export default Footer;