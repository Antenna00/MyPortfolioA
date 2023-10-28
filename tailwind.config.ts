import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      padding: {
        default: '15px',
      },
    },

    screens: {
      sssm: '300px',
      ssm: '400px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
      xml: '1400px',
      xxl: '2500px',
    },

    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        accent: '#F13024',
      },

      backgroundImage: {
        backgroundImg: 'url("/bg-explosion.png")',
        catAvatar: 'url("/cat-avatar.jpg")',
        paintsplash1200: 'url("/paint-splash1200.jpg")',
        paintsplash1920: 'url("/paint-splash1920.jpg")',
        paintsplash: 'url("/paint-splash.jpg")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },

      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        nova: ['cursive']
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [
    // ...
    require('tailwind-scrollbar'),
  ],
}
export default config
