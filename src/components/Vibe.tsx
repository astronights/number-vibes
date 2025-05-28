import { Box, Heading, Container, Text, Button, Stack, Input, NativeSelect } from "@chakra-ui/react";
import { RiMagicLine } from "react-icons/ri"
import { useEffect, useState } from "react";
import { prompt, supportedLocales } from "../constants";
import { callGemini } from "../api/genai";

const Vibe = () => {
    const [curNumber, setCurNumber] = useState(0);
    const [rawInput, setRawInput] = useState("");
    const [formatted, setFormatted] = useState("");
    const [locale, setLocale] = useState("");
    const [response, setResponse] = useState("");

    useEffect(() => {
        if (rawInput === "") {
            setFormatted("");
            setCurNumber(0);
            return;
        }

        const num = parseInt(rawInput, 10);
        if (!isNaN(num)) {
            setCurNumber(num);
            const formattedNumber =
                locale === "" ? num.toString() : new Intl.NumberFormat(locale).format(num);
            setFormatted(formattedNumber);
        }
    }, [rawInput, locale]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(/\D/g, ""); // Only digits
        if (raw.length <= 10) {
            setRawInput(raw);
        }
    };

    const callLLMAPI = () => {
        const promptWithNumber = prompt.replace("{formatted_number}", formatted);
        callGemini(promptWithNumber).then((res) => {
            setResponse(res);
        });
    };

    return (
        <Container maxW={"4xl"} id="header">
            <Stack
                as={Box}
                textAlign={"center"}
                pb={{ base: 20, md: 16 }}
                pt={{ base: 36, md: 32 }}
                spaceY={4}
            >
                <Input
                    placeholder="Enter up to 10 digits"
                    size="lg"
                    variant={"flushed"}
                    value={formatted}
                    onChange={handleInputChange}
                />

                <NativeSelect.Root
                    size="sm"
                    width={'240px'}
                    onChange={(e) => setLocale(e.target.value)}
                >
                    <NativeSelect.Field>
                        <option value="">Select locale</option>
                        {supportedLocales.map((loc) => (
                            <option key={loc} value={loc}>
                                {loc}
                            </option>
                        ))}
                    </NativeSelect.Field>
                    <NativeSelect.Indicator />
                </NativeSelect.Root>

                <Button variant="outline" onClick={callLLMAPI} disabled={curNumber <= 0}>
                    Vibe <RiMagicLine />
                </Button>

                <Text>
                    {response}
                </Text>

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
