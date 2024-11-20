import type { Config } from 'tailwindcss';

// const config: Config = {
//     darkMode: ['class'],
//     content: [
//         './pages/**/*.{js,ts,jsx,tsx,mdx}',
//         './components/**/*.{js,ts,jsx,tsx,mdx}',
//         './app/**/*.{js,ts,jsx,tsx,mdx}',
//     ],
//     theme: {
//     	extend: {
//     		colors: {
//     			background: 'hsl(var(--background))',
//     			foreground: 'hsl(var(--foreground))',
//     			card: {
//     				DEFAULT: 'hsl(var(--card))',
//     				foreground: 'hsl(var(--card-foreground))'
//     			},
//     			popover: {
//     				DEFAULT: 'hsl(var(--popover))',
//     				foreground: 'hsl(var(--popover-foreground))'
//     			},
//     			primary: {
//     				DEFAULT: 'hsl(var(--primary))',
//     				foreground: 'hsl(var(--primary-foreground))'
//     			},
//     			secondary: {
//     				DEFAULT: 'hsl(var(--secondary))',
//     				foreground: 'hsl(var(--secondary-foreground))'
//     			},
//     			muted: {
//     				DEFAULT: 'hsl(var(--muted))',
//     				foreground: 'hsl(var(--muted-foreground))'
//     			},
//     			accent: {
//     				DEFAULT: 'hsl(var(--accent))',
//     				foreground: 'hsl(var(--accent-foreground))'
//     			},
//     			destructive: {
//     				DEFAULT: 'hsl(var(--destructive))',
//     				foreground: 'hsl(var(--destructive-foreground))'
//     			},
//     			border: 'hsl(var(--border))',
//     			input: 'hsl(var(--input))',
//     			ring: 'hsl(var(--ring))',
//     			chart: {
//     				'1': 'hsl(var(--chart-1))',
//     				'2': 'hsl(var(--chart-2))',
//     				'3': 'hsl(var(--chart-3))',
//     				'4': 'hsl(var(--chart-4))',
//     				'5': 'hsl(var(--chart-5))'
//     			}
//     		},
//     		borderRadius: {
//     			lg: 'var(--radius)',
//     			md: 'calc(var(--radius) - 2px)',
//     			sm: 'calc(var(--radius) - 4px)'
//     		}
//     	}
//     },
//     plugins: [require("tailwindcss-animate")],
// };

const config: Config = {
	content: [
	  "./components/**/*.{js,ts,jsx,tsx,mdx}",
	  "./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
	  extend: {
		backgroundImage: {
		  "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
		  "gradient-conic":
			"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
		},
		fontFamily: {
		  Rampart: ["Raleway", "cursive"],
		},
		height: {
		  "128": "35rem",
		  "132": "43rem",
		},
		width: {
		  "128": "35rem",
		  "132": "43rem",
		},
		animation: {
		  marquee: "marquee 50s linear infinite",
		  marquee2: "marquee2 50s linear infinite",
		},
		keyframes: {
		  marquee: {
			"0%": { transform: "translateX(0%)" },
			"100%": { transform: "translateX(-100%)" },
		  },
		  marquee2: {
			"0%": { transform: "translateX(100%)" },
			"100%": { transform: "translateX(0%)" },
		  },
		},
	  },
	  screens: {
		sm: "480px",
		md: "768px",
		lg: "976px",
		lg2: "1024px",
		xl2: "1280px",
		xl: "1440px",
		xl3: "1800px",
	  },
	  container: {
		center: true,
	  },
	},
	plugins: [],
  };
  
export default config;
