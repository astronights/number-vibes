import {Box, Heading, Container, Text, Button, Stack, Input } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Vibe = () => {
    const [rawInput, setRawInput] = useState("");
    const [formatted, setFormatted] = useState("");
    const [locale, setLocale] = useState("");

    useEffect(() => {
        if (rawInput === "") {
            setFormatted("");
            return;
        }

        const num = parseInt(rawInput, 10);
        if (!isNaN(num)) {
            const formattedNumber = locale === "" ? num.toString() : new Intl.NumberFormat(locale).format(num);
            setFormatted(formattedNumber);
        }
    }, [rawInput, locale]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/\D/g, ""); // Remove non-digits
        if (raw.length <= 10) {
            setRawInput(raw);
        }
    };

    const toggleLocale = () => {
        setLocale((prev) => (prev === "en-US" ? "fr-FR" : "en-US"));
    };

    return (
        <Container maxW={"4xl"} id="header">
            <Stack
                as={Box}
                textAlign={"center"}
                pb={{ base: 20, md: 16 }}
                pt={{ base: 36, md: 32 }}
            >
                <Input
                    placeholder="Enter up to 10 digits"
                    size="lg"
                    variant={"flushed"}
                    value={formatted}
                    onChange={handleInputChange}
                />

                {/* <Checkbox onChange={toggleLocale} isChecked={locale === "fr-FR"}>
          Use French locale
        </Checkbox> */}

                <Heading
                    fontWeight={400}
                    fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
                    lineHeight={"110%"}
                >
                    <Text as="span" opacity={1} transition="opacity 0.5s ease-in-out">
                        'Yo'
                    </Text>
                </Heading>

                <Stack direction={"column"} align={"center"} alignSelf={"center"}>
                    <Button rounded={"full"} px={6}>
                        Let's connect!
                    </Button>
                </Stack>
            </Stack>
        </Container>
    );
};

export default Vibe;
