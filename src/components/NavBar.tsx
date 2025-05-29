import { Flex, Stack, HStack, Link, IconButton } from "@chakra-ui/react";
import { RiGithubLine } from "react-icons/ri";
import * as TbIcons from "react-icons/tb";
import { ColorModeButton } from "./ui/color-mode"



const NavBar = (props: { title: string }) => {

    const githubUrl = "https://github.com/astronights";

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
                zIndex="sticky"
                position="fixed"
                as="header"
                alignItems={"center"}
                justifyContent={"space-between"}
                w="100%"
                borderWidth="1px"
                bg="chakra-body-bg"
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
                        <IconButton
                            variant={"outline"}
                            onClick={() => window.open(githubUrl, "_blank")}>
                            <RiGithubLine />
                        </IconButton>
                        <ColorModeButton />
                    </Stack>
                </Flex>
            </Flex>
        </>
    );
}

export default NavBar;