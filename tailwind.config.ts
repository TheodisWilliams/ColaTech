import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        colatech: {
          green: '#0B3D2E',
          black: '#0B0D10',
          grey: {
            1: '#1B1F24',
            2: '#2A3038',
            3: '#9AA4B2',
          },
        },
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(11, 61, 46, 0.6)',
        'glow-green-lg': '0 0 40px rgba(11, 61, 46, 0.4)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
