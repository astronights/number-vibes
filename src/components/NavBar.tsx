import { Flex, Stack, HStack, Link } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode"
import * as TbIcons from "react-icons/tb";

const NavBar = (props: { title: string }) => {

    const scrollToTop = () => {
        document.querySelector("#header")!.scrollIntoView({ behavior: "smooth" });
    };

    const TbLetterComponents = (props.title
        .split('')
        .map((letter) => letter === " " ?
            TbIcons['TbSeparator'] :
            TbIcons[`TbLetter${letter}`]
        ));


    return (
        <>
            <Flex
                px={4}
                h={16}
                boxShadow={"base"}
                zIndex="sticky"
                position="fixed"
                as="header"
                alignItems={"center"}
                justifyContent={"space-between"}
                w="100%"
                borderWidth="1px"
                borderColor="border.disabled"
                bg="chakra-body-bg"
                // color="fg.disabled"
            >
                <Link onClick={scrollToTop}>
                    <HStack gap={'0.3rm'}>
                        {TbLetterComponents.map((Component, index) => {
                            if (Component.name === "TbSeparator") {
                                return <Component key={index} color={'transparent'} />;
                            } else {
                                return <Component key={index} />
                            }
                        }
                        )}
                    </HStack>
                </Link>

                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spaceX={3}>
                        <ColorModeButton />
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}

export default NavBar;