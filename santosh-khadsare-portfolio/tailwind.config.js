/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px',
			},
		},
		extend: {
			fontFamily: {
				primary: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
				monospace: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
			},
			colors: {
				// Surface Colors (Dark Mode First)
				surface: {
					'pure-black': '#000000',
					'near-black': '#0a0a0a',
					dark: '#141414',
					hover: '#1e1e1e',
					modal: '#282828',
				},
				// Text Colors
				text: {
					primary: '#e4e4e7',
					secondary: '#a1a1aa',
					tertiary: '#71717a',
				},
				// Accent Colors
				accent: {
					primary: '#3b82f6',
					hover: '#60a5fa',
					muted: '#2563eb',
				},
				// Semantic Colors
				semantic: {
					success: '#22c55e',
					warning: '#f59e0b',
					error: '#ef4444',
				},
				// Border Colors
				border: {
					subtle: 'rgba(255, 255, 255, 0.1)',
					moderate: 'rgba(255, 255, 255, 0.15)',
					strong: 'rgba(255, 255, 255, 0.2)',
				},
				// Background colors (for compatibility)
				background: '#0a0a0a',
				foreground: '#e4e4e7',
				primary: {
					DEFAULT: '#3b82f6',
					foreground: '#ffffff',
				},
				secondary: {
					DEFAULT: '#141414',
					foreground: '#a1a1aa',
				},
				accent: {
					DEFAULT: '#3b82f6',
					foreground: '#ffffff',
				},
				destructive: {
					DEFAULT: '#ef4444',
					foreground: '#ffffff',
				},
				muted: {
					DEFAULT: '#1e1e1e',
					foreground: '#a1a1aa',
				},
				card: {
					DEFAULT: '#141414',
					foreground: '#e4e4e7',
				},
				popover: {
					DEFAULT: '#141414',
					foreground: '#e4e4e7',
				},
				input: '#141414',
				ring: '#3b82f6',
			},
			// Spacing System (8-point grid)
			spacing: {
				xs: '8px',
				sm: '16px',
				md: '24px',
				lg: '32px',
				xl: '48px',
				'2xl': '64px',
				'3xl': '96px',
				'4xl': '128px',
			},
			// Border Radius
			borderRadius: {
				sm: '8px',
				md: '12px',
				lg: '16px',
				xl: '24px',
				full: '9999px',
			},
			// Box Shadows (Glow Effects for Dark Mode)
			boxShadow: {
				'card': '0 0 0 1px rgba(255, 255, 255, 0.05), 0 4px 12px rgba(0, 0, 0, 0.5)',
				'card-hover': '0 0 0 1px rgba(255, 255, 255, 0.1), 0 8px 24px rgba(0, 0, 0, 0.6)',
				'accent-glow': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
				'focus-glow': '0 0 0 3px rgba(59, 130, 246, 0.4)',
			},
			// Typography
			fontSize: {
				'hero': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
				'heading': ['32px', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
				'subheading': ['24px', { lineHeight: '1.3' }],
				'body-large': ['18px', { lineHeight: '1.6' }],
				'body': ['16px', { lineHeight: '1.5' }],
				'small': ['14px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
				'tiny': ['12px', { lineHeight: '1.4', letterSpacing: '0.02em' }],
			},
			// Animation
			transitionDuration: {
				fast: '150ms',
				standard: '250ms',
				slow: '400ms',
				'glow-pulse': '2s',
			},
			transitionTimingFunction: {
				out: 'ease-out',
				sharp: 'cubic-bezier(0.4, 0.0, 0.2, 1)',
				smooth: 'ease-in-out',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)' },
					'50%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.7)' },
				},
				'scroll-indicator': {
					'0%, 100%': { transform: 'translateY(0)', opacity: '1' },
					'50%': { transform: 'translateY(8px)', opacity: '0.5' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
				'scroll-indicator': 'scroll-indicator 2s ease-in-out infinite',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
}