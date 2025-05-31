# Number Vibes – Vibe Check

**Live Demo:** [vibe-check-green.vercel.app](https://vibe-check-green.vercel.app)

**Description:**  
**Number Vibes** is a playful web application that interprets numbers across various cultural and symbolic dimensions. Leveraging Google's Gemini LLM, it provides users with multifaceted analyses of any number they input, offering insights into numerology, aesthetics, pop culture references, phonetics, symbolism, mathematical properties, and emotional connotations.

---

## ✨ Features

- **Multidimensional Number Analysis:**  
  Input any number to receive interpretations across:
  - **Numerology**
  - **Aesthetic Appeal**
  - **Pop Culture References**
  - **Phonetics**
  - **Symbolism & Superstition**
  - **Mathematical Properties**
  - **Emotional Resonance**

- **LLM Integration:**  
  Utilizes Google's Gemini LLM to generate rich, context-aware analyses.

- **Responsive Design:**  
  Built with React and Chakra UI for a seamless experience across devices.

---

## 🛠️ Tech Stack

- **Frontend:**
  - [React](https://reactjs.org/)
  - [Vite](https://vitejs.dev/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Chakra UI](https://chakra-ui.com/)
  - [React Icons](https://react-icons.github.io/react-icons/)

- **Backend:**
  - [@google/genai](https://www.npmjs.com/package/@google/genai) for Gemini LLM integration

- **Deployment:**
  - [Vercel](https://vercel.com/) for hosting

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14 or later)
- **npm** or **yarn**
- **Google API Key** for Gemini LLM

### Installation

1. **Clone the repository:**

```bash
git clone https://github.com/astronights/vibe-check.git
cd vibe-check
```

2. **Install dependencies:**

```bash
npm install
# or
yarn install
```

3. Set up environment variables:

```
VITE_GEMINI_API_KEY=your_google_api_key
```

4. Start the development server:

```
npm start
```

The app should now be running at `http://localhost:5173`.

## 🧠 Usage

### 1. Enter a Number  
Navigate to the homepage and enter any number you'd like to analyze. You can enter up to 10 digits.

### 2. View Vibe Analysis  
The app sends the number to Gemini for analysis and returns insights in seven categories:

- **Numerology** – Mystical meaning and personality of the number  
- **Aesthetic** – Visual elegance, symmetry, or quirkiness  
- **Pop Culture** – References in movies, memes, history, etc.  
- **Sound / Phonetics** – How the number sounds when spoken aloud  
- **Symbolism & Superstition** – Cultural or spiritual associations  
- **Math Vibe** – Mathematical traits like prime status or palindromes  
- **Emotional Feel** – The "mood" or emotional resonance the number gives off  

Each section comes with playful commentary, emojis, and metaphors.

### 3. Try Different Locales  
You can also switch locales (e.g., `en-US`, `fr-FR`) to format numbers differently and see how perception changes.

---

## 🧾 Project Structure

```yaml
vibe-check/
├── public/        # Static files
├── src/
│ ├── assets/      # CSS and style assets
│ ├── components/  # NavBar, Vibe, Footer, etc.
│ ├── App.tsx      # Main app component
│ └── main.tsx     # App entry point
├── .env           # Environment variables (API keys, etc.)
├── package.json   # Project metadata
├── tsconfig.json  # TypeScript config
└── vite.config.ts # Vite bundler config
```


---


## 📦 Deployment

The app is built with Vite and deployed to [Vercel](https://vercel.com/).

To deploy your own version:

1. **Fork the repo:**  
   Click “Fork” on the [GitHub repo](https://github.com/astronights/vibe-check).

2. **Connect to Vercel:**  
   Import your fork into Vercel. It auto-detects Vite projects.

3. **Add Environment Variables:**  
   - `VITE_GEMINI_API_KEY` – Your Google Gemini API key  

4. **Deploy:**  
   Hit "Deploy" and Vercel will handle the rest.

---

## 🤝 Contributing

Contributions are very welcome! Here’s how:

- 🐞 **Report Bugs:** Open an [issue](https://github.com/astronights/vibe-check/issues)
- 🌟 **Request Features:** Share your idea via an issue
- 🛠 **Submit PRs:** Fork the repo, make changes, and create a pull request

---

## 📬 Contact

Have questions, ideas, or just want to say hi?

- GitHub: [@astronights](https://github.com/astronights)