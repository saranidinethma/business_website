import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Enhanced Blue Palette
        blue: {
          50: "#f0f8ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
        },
        
        // Enhanced Purple Palette
        purple: {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7c3aed",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764",
        },
        
        // Vibrant Pink Palette
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
          950: "#500724",
        },
        
        // Enhanced Orange Palette
        orange: {
          50: "#fff7ed",
          100: "#ffedd5",
          200: "#fed7aa",
          300: "#fdba74",
          400: "#fb923c",
          500: "#f97316",
          600: "#ea580c",
          700: "#c2410c",
          800: "#9a3412",
          900: "#7c2d12",
          950: "#431407",
        },
        
        // Vibrant Red Palette
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        
        // Enhanced Green Palette
        green: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          950: "#052e16",
        },
        
        // Enhanced Teal Palette
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },
        
        // Enhanced Yellow Palette
        yellow: {
          50: "#fefce8",
          100: "#fef9c3",
          200: "#fef08a",
          300: "#fde047",
          400: "#facc15",
          500: "#eab308",
          600: "#ca8a04",
          700: "#a16207",
          800: "#854d0e",
          900: "#713f12",
          950: "#422006",
        },
        
        // Enhanced Indigo Palette
        indigo: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#3730a3",
          900: "#312e81",
          950: "#1e1b4b",
        },
        
        // Enhanced Slate Palette
        slate: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
          950: "#020617",
        },
        
        // Custom Gradient Colors
        gradient: {
          from: "#667eea",
          via: "#764ba2",
          to: "#f093fb",
        },
        
        // Custom Brand Colors
        brand: {
          primary: "#667eea",
          secondary: "#ff6b6b",
          accent: "#4ecdc4",
          success: "#2ecc71",
          warning: "#f39c12",
          danger: "#e74c3c",
          info: "#3498db",
        },
        
        // Neon Colors
        neon: {
          blue: "#00f5ff",
          purple: "#bf00ff",
          pink: "#ff007f",
          green: "#00ff41",
          yellow: "#ffff00",
          orange: "#ff8c00",
          red: "#ff073a",
        },
        
        // Pastel Colors
        pastel: {
          blue: "#87ceeb",
          purple: "#dda0dd",
          pink: "#ffb6c1",
          green: "#98fb98",
          yellow: "#f0e68c",
          orange: "#ffa07a",
          red: "#ffa07a",
        },
      },
      
      // Enhanced Gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-primary": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-secondary": "linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%)",
        "gradient-success": "linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)",
        "gradient-warning": "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "gradient-rainbow": "linear-gradient(135deg, #ff6b6b 0%, #ffa726 25%, #4ecdc4 50%, #667eea 75%, #f093fb 100%)",
        "gradient-sunset": "linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)",
        "gradient-ocean": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-forest": "linear-gradient(135deg, #134e5e 0%, #71b280 100%)",
        "gradient-fire": "linear-gradient(135deg, #ff9a9e 0%, #ff6b6b 100%)",
        "gradient-night": "linear-gradient(135deg, #2c3e50 0%, #34495e 100%)",
        "gradient-aurora": "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
        "gradient-cyber": "linear-gradient(135deg, #00f5ff 0%, #bf00ff 100%)",
      },
      
      // Enhanced Box Shadows
      boxShadow: {
        "glow-sm": "0 0 10px rgba(102, 126, 234, 0.3)",
        "glow-md": "0 0 20px rgba(102, 126, 234, 0.4)",
        "glow-lg": "0 0 30px rgba(102, 126, 234, 0.5)",
        "glow-xl": "0 0 40px rgba(102, 126, 234, 0.6)",
        "glow-pink": "0 0 20px rgba(255, 107, 107, 0.4)",
        "glow-green": "0 0 20px rgba(78, 205, 196, 0.4)",
        "glow-yellow": "0 0 20px rgba(255, 167, 38, 0.4)",
        "glow-purple": "0 0 20px rgba(168, 85, 247, 0.4)",
        "neon-blue": "0 0 20px #00f5ff, 0 0 30px #00f5ff, 0 0 40px #00f5ff",
        "neon-pink": "0 0 20px #ff007f, 0 0 30px #ff007f, 0 0 40px #ff007f",
        "neon-green": "0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41",
        "inner-glow": "inset 0 0 20px rgba(102, 126, 234, 0.3)",
        "3d": "0 5px 15px rgba(0, 0, 0, 0.1), 0 10px 25px rgba(0, 0, 0, 0.1)",
      },
      
      // Enhanced Animations
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "slide-in-left": "slideInLeft 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.8s ease-out forwards",
        "bounce-in": "bounceIn 0.8s ease-out forwards",
        "pulse-glow": "pulseGlow 2s infinite",
        "float": "float 3s ease-in-out infinite",
        "rotate": "rotate 2s linear infinite",
        "rainbow": "rainbow 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 15s ease infinite",
        "shimmer": "shimmer 2s linear infinite",
        "wobble": "wobble 1s ease-in-out infinite",
        "heartbeat": "heartbeat 1.5s ease-in-out infinite",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "typewriter": "typewriter 3s steps(20) infinite",
        "slide-up": "slideUp 0.5s ease-out",
        "slide-down": "slideDown 0.5s ease-out",
        "scale-in": "scaleIn 0.5s ease-out",
        "scale-out": "scaleOut 0.5s ease-out",
        "fade-in": "fadeIn 0.5s ease-out",
        "fade-out": "fadeOut 0.5s ease-out",
      },
      
      // Enhanced Keyframes
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(50px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(50px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        bounceIn: {
          "0%": { opacity: "0", transform: "scale(0.3)" },
          "50%": { opacity: "1", transform: "scale(1.05)" },
          "70%": { transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { transform: "scale(1)", boxShadow: "0 0 20px rgba(102, 126, 234, 0.3)" },
          "50%": { transform: "scale(1.05)", boxShadow: "0 0 30px rgba(102, 126, 234, 0.6)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        rotate: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        rainbow: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        wobble: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(5deg)" },
          "75%": { transform: "rotate(-5deg)" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        glowPulse: {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(102, 126, 234, 0.3)" 
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(102, 126, 234, 0.8)" 
          },
        },
        typewriter: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          from: { opacity: "0", transform: "translateY(-20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scaleIn: {
          from: { opacity: "0", transform: "scale(0.8)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        scaleOut: {
          from: { opacity: "1", transform: "scale(1)" },
          to: { opacity: "0", transform: "scale(0.8)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeOut: {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
      
      // Enhanced Typography
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'monospace'],
        'hand': ['Kalam', 'cursive'],
      },
      
      // Enhanced Font Sizes
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        'hero': ['clamp(3rem, 8vw, 8rem)', { lineHeight: '1' }],
      },
      
      // Enhanced Spacing
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      // Enhanced Border Radius
      borderRadius: {
        'none': '0px',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
        '5xl': '2.5rem',
        'full': '9999px',
      },
      
      // Enhanced Backdrop Blur
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
        'DEFAULT': '8px',
        'md': '12px',
        'lg': '16px',
        'xl': '24px',
        '2xl': '40px',
        '3xl': '64px',
      },
      
      // Enhanced Transform
      scale: {
        '0': '0',
        '25': '.25',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
        '200': '2',
      },
      
      // Enhanced Z-Index
      zIndex: {
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
        'auto': 'auto',
        'modal': '1000',
        'dropdown': '1001',
        'sticky': '1002',
        'fixed': '1003',
        'overlay': '1004',
        'tooltip': '1005',
      },
      
      // Enhanced Transition
      transitionDuration: {
        '0': '0ms',
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      
      // Enhanced Screens
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
        '4xl': '2560px',
      },
      
      // Enhanced Container
      container: {
        center: true,
        padding: {
          'DEFAULT': '1rem',
          'sm': '2rem',
          'lg': '4rem',
          'xl': '5rem',
          '2xl': '6rem',
        },
        screens: {
          'sm': '640px',
          'md': '768px',
          'lg': '1024px',
          'xl': '1280px',
          '2xl': '1400px',
        },
      },
      
      // Enhanced Aspect Ratio
      aspectRatio: {
        'auto': 'auto',
        'square': '1 / 1',
        'video': '16 / 9',
        'photo': '4 / 3',
        'portrait': '3 / 4',
        'wide': '21 / 9',
        'ultra': '32 / 9',
        'golden': '1.618 / 1',
      },
      
      // Enhanced Flex Utilities
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      },
      
      // Enhanced Grid
      gridTemplateColumns: {
        'none': 'none',
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        '15': 'repeat(15, minmax(0, 1fr))',
        '16': 'repeat(16, minmax(0, 1fr))',
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
      },
    },
  },
  
  
}

export default config