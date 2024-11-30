import type { Config } from 'tailwindcss';
const {
	default: flattenColorPalette,
  } = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	borderRadius: {
		'md': '6px',
		'lg': '8px',
		'xl' : '12px',
  		'4xl': '45px',
  		full: '9999px'
  	},
  	extend: {
  		fontFamily: {
  			sans: ['DM Sans', 'sans-serif']
  		},
  		colors: {
  			night: '#000',
  			brown: '#1F1101',
  			mistorg: '#894B03',
  			peachorg: '#FFF7F7',
  			fadeorg: '#FFC07D',
  			darkorg: '#FF8800',
  			cream: '#F5F5F5',
  			gravel: '#4E4E4E',
  			iridium: '#3F3F3F',
  			orange: '#FFA947',
  			peach: '#FFE0BD',
  			platinum: '#E6E6E6',
  			ghost: '#CDCDCD',
  			grandis: '#FFC989',
  			porcelain: '#F1F1F1',
  			ironside: '#636363',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'caret-blink': {
  				'0%,70%,100%': {
  					opacity: '1'
  				},
  				'20%,50%': {
  					opacity: '0'
  				}
  			},
  			'open-sidebar': {
  				from: {
  					width: '60px'
  				},
  				to: {
  					width: '300px'
  				}
  			},
  			'close-sidebar': {
  				from: {
  					width: '300px'
  				},
  				to: {
  					width: '60px'
  				}
  			},
  			'fade-in': {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			'border-beam': {
  				'100%': {
  					'offset-distance': '100%'
  				}
  			},
  			shine: {
  				'0%': {
  					'background-position': '0% 0%'
  				},
  				'50%': {
  					'background-position': '100% 100%'
  				},
  				to: {
  					'background-position': '0% 0%'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'caret-blink': 'caret-blink 1.25s ease-out infinite',
  			'open-sidebar': 'open-sidebar 0.2s ease-out',
  			'close-sidebar': 'close-sidebar 0.2s ease-out',
  			'fade-in': 'fade-in 0.2s ease-out',
  			'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
  			shine: 'shine var(--duration) infinite linear'
  		},
  		backgroundImage: {
  			'theme-gradient': 'linear-gradient(to right, theme("colors.slate.50"), theme("colors.orange"))'
  		}
  	}
  },
  plugins: [require('tailwindcss-animate'), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }

export default config;
