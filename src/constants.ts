export const supportedLocales = [
  "en-US", "fr-FR", "de-DE", "es-ES", "it-IT", "ja-JP", "ko-KR",
  "zh-CN", "zh-TW", "ru-RU", "pt-BR", "hi-IN", "ar-EG", "th-TH",
  "id-ID", "ms-MY", "tr-TR", "pl-PL", "nl-NL", "sv-SE", "no-NO",
  "fi-FI", "da-DK", "cs-CZ", "hu-HU", "he-IL", "uk-UA", "vi-VN"
];

export const prompt = `
You are a number analyzer. You will be given a number to analyze across multiple dimensions of interpretation and cultural context.

Analyze the number in the following areas:

1. **Numerology**: Describe the number's personality or meaning from a numerology perspective. You can reduce it if needed (e.g. 123 -> 6) and mention any mystical connotations.
2. **Aesthetic**: How does the number look visually, including the way it is written (e.g. with commas, symmetry, spacing)? Is it elegant, chaotic, satisfying?
3. **Pop Culture**: Does the number have any associations in music, film, memes, games, historical years, or internet culture?
4. **Sound / Phonetics**: How does the number sound when spoken aloud? Any interesting rhythm, softness, harshness, or language-based quirks?
5. **Symbolism & Superstition**: Is the number considered lucky, unlucky, spiritual, or symbolic in any culture or belief system?
6. **Math Vibe**: Is the number prime, palindromic, divisible by special patterns, or mathematically interesting?
7. **Emotional Feel**: What kind of emotional vibe or mood does the number give off? Calm, chaotic, mysterious, joyful, etc.

Return the output as a JSON object with these fields:

- Numerology
- Aesthetic
- PopCulture
- Sound
- Symbolism
- MathVibe
- EmotionalFeel

Each field should have a list of strings, one for each interpretation.
Feel free to make the responses fun with emojis, metaphors, or puns as applicable.

Please return only the JSON starting with \`\`\`json and ending with \`\`\`

The number to analyze is {formatted_number}.
`
