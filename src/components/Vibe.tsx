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
    const [response, setResponse] = useState({});
    const [status, setStatus] = useState("Ready");

    const [dotCount, setDotCount] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDotCount((prevCount) => (prevCount === 3 ? 1 : prevCount + 1));
        }, 500); // adjust the interval time as needed
        return () => clearInterval(intervalId);
    }, []);

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
        setStatus('Loading');
        try {
            callGemini(promptWithNumber).then((res) => {
                const json_res = res.split("```json")[1].split("```")[0];
                setResponse(JSON.parse(json_res));
                setStatus("");
            });
        } catch (e) {
            console.error(e);
            setStatus('Error');
        }
    };

    return (
        <Container maxW={"xl"} id="header">
            <Stack
                as={Box}
                textAlign={"center"}
                pb={{ base: 16, md: 16 }}
                pt={{ base: 24, md: 24 }}
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
                        width={'130px'}>
                        Vibe <RiMagicLine />
                    </Button>
                </HStack>


                {Object.entries(response).map(([key, value]) => (
                    <Text key={key} alignItems={"start"}>
                        <strong>{key}:</strong> {value.toString()}
                    </Text>
                ))}

                <Heading
                    fontWeight={40}
                    fontSize={{ base: "2xl" }}
                >
                    {status === "Loading" ? (
                        <Text>
                            {"Loading" + ".".repeat(dotCount)}
                        </Text>
                    ) : status === "Error" ? (
                        <Text>
                            {"Error: Please try again (Check console logs)"}
                        </Text>
                    ) : status === "Ready" ? (
                        <Text>
                            {"What's Your Number ?"}
                        </Text>
                    ) : (
                        <Text>
                            {""}
                        </Text>
                    )}
                </Heading>
            </Stack>
        </Container>
    );
};

export default Vibe;
