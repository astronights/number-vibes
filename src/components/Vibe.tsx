import { Box, Heading, Container, Text, Button, Stack, Input, NativeSelect, HStack } from "@chakra-ui/react";
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
        <Container maxW={"xl"} id="header">
            <Stack
                as={Box}
                textAlign={"center"}
                pb={{ base: 20, md: 16 }}
                pt={{ base: 36, md: 32 }}
                spaceY={4}
            >
                <HStack>
                    <Input
                        placeholder="Up to 10 digits"
                        size="lg"
                        variant={"flushed"}
                        value={formatted}
                        onChange={handleInputChange}
                    />

                    <NativeSelect.Root
                        size="sm"
                        width={'200px'}
                        onChange={e => setLocale((e.target as HTMLSelectElement).value)}
                    >
                        <NativeSelect.Field>
                            <option value="">Locale</option>
                            {supportedLocales.map((loc) => (
                                <option key={loc} value={loc}>
                                    {loc}
                                </option>
                            ))}
                        </NativeSelect.Field>
                        <NativeSelect.Indicator />
                    </NativeSelect.Root>

                    <Button variant="outline" 
                            onClick={callLLMAPI} 
                            disabled={curNumber <= 0}
                            width={'150px'}>
                        Vibe <RiMagicLine />
                    </Button>
                </HStack>

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
            </Stack>
        </Container>
    );
};

export default Vibe;
