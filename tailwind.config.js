/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 🌈 Colors
      colors: {
        // Mint Family
        mint: {
          primary: '#37BEB0',
          light: '#A4E5E0',
          pale: '#E8F7F5',
          dark: '#2C9B8F',
        },
        // Accent Colors
        gold: {
          warm: '#C6B170',
        },
        blue: {
          midnight: '#2C6170',
        },
        coral: {
          vibrant: '#FF6B6B',
        },
        purple: {
          soft: '#9B85FF',
        },
        // Text Colors
        text: {
          dark: '#1A3940',
          medium: '#567882',
          light: '#8FA3AB',
        },
        // Background Colors
        bg: {
          white: '#FFFFFF',
          ivory: '#F9FBFB',
        },
        border: {
          light: '#D4E3E8',
        },
        // Traveler Type Colors
        type: {
          trendsetter: '#37BEB0',
          heritage: '#2C6170',
          foodie: '#C6B170',
          kculture: '#9B85FF',
          nature: '#7CB342',
          social: '#FF6B6B',
          balanced: '#A4E5E0',
        },
      },

      // 📝 Typography
      fontFamily: {
        primary: ['Pretendard Variable', '-apple-system', 'sans-serif'],
        accent: ['Space Grotesk', 'Pretendard Variable', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.03em', fontWeight: '700' }],
        h1: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        h2: ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        body: ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
        caption: ['0.75rem', { lineHeight: '1.4' }],
        overline: ['0.625rem', { lineHeight: '1.2', letterSpacing: '0.05em', textTransform: 'uppercase' }],
      },

      // 📏 Spacing
      spacing: {
        '0': '0',
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px
        '5': '1.5rem',     // 24px
        '6': '2rem',       // 32px
        '7': '2.5rem',     // 40px
        '8': '3rem',       // 48px
        '10': '4rem',      // 64px
        '12': '6rem',      // 96px
        '16': '8rem',      // 128px
        '20': '10rem',     // 160px
      },

      // 🔲 Border Radius
      borderRadius: {
        'none': '0',
        'sm': '0.375rem',      // 6px
        'md': '0.5rem',        // 8px
        'lg': '1rem',          // 16px
        'xl': '1.5rem',        // 24px
        '2xl': '2rem',         // 32px
        'full': '9999px',
      },

      // 🎭 Box Shadow
      boxShadow: {
        'sm': '0 1px 2px rgba(26, 57, 64, 0.08)',
        'md': '0 4px 8px rgba(26, 57, 64, 0.12)',
        'lg': '0 8px 16px rgba(26, 57, 64, 0.16)',
        'xl': '0 16px 32px rgba(26, 57, 64, 0.20)',
        '2xl': '0 24px 48px rgba(26, 57, 64, 0.24)',
        'mint': '0 8px 24px rgba(55, 190, 176, 0.25)',
        'gold': '0 8px 24px rgba(198, 177, 112, 0.25)',
        'purple': '0 8px 24px rgba(155, 133, 255, 0.25)',
      },

      // ✨ Animation
      transitionTimingFunction: {
        'bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '400ms',
        'slower': '600ms',
      },

      // 📱 Max Width
      maxWidth: {
        'container': '1280px',
      },

      // 🎨 Background Gradients
      backgroundImage: {
        'gradient-mint': 'linear-gradient(135deg, #A4E5E0 0%, #37BEB0 100%)',
        'gradient-gold': 'linear-gradient(135deg, #C6B170 0%, #37BEB0 100%)',
        'gradient-midnight': 'linear-gradient(135deg, #2C6170 0%, #2C9B8F 100%)',
        'gradient-result': 'linear-gradient(135deg, #E8F7F5 0%, #FFFFFF 100%)',
      },

      // ⚡ Keyframes for Custom Animations
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.4s ease-out',
        'fade-up': 'fade-up 0.6s ease-out',
        'scale-in': 'scale-in 0.4s ease-out',
        'slide-right': 'slide-right 0.5s ease-out',
        'shimmer': 'shimmer 2s infinite linear',
      },
    },
  },
  plugins: [],
}
