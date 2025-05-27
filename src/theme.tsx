import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  globalCss: {
    html: {
      colorPalette: "blue",
    },
  },
})

export const theme = createSystem(defaultConfig, config)