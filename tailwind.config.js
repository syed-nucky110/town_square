/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    black: '#0a0a0a',
                    dark: '#1a1a1a',
                    darker: '#252525',
                    gold: '#c9a961',
                },
                text: {
                    primary: '#ffffff',
                    light: 'rgba(255, 255, 255, 0.85)',
                    muted: 'rgba(255, 255, 255, 0.6)',
                },
                border: {
                    subtle: 'rgba(255, 255, 255, 0.1)',
                },
            },
            spacing: {
                'section': 'clamp(4rem, 10vw, 8rem)',
                'section-sm': 'clamp(3rem, 8vw, 6rem)',
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            fontSize: {
                'display': 'clamp(2.5rem, 8vw, 6rem)',
                'hero': 'clamp(2rem, 6vw, 4rem)',
                'h1': 'clamp(2rem, 5vw, 3.5rem)',
                'h2': 'clamp(1.5rem, 4vw, 2.5rem)',
                'h3': 'clamp(1.25rem, 3vw, 2rem)',
            },
            boxShadow: {
                'glow': '0 0 20px rgba(201, 169, 97, 0.3)',
                'glow-lg': '0 0 40px rgba(201, 169, 97, 0.4)',
            },
        },
    },
    plugins: [],
}
