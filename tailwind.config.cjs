/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#ED1E27',
				'primary-dark': '#C11921',
				'dark-slate': "#1a1a1a",
			},
			keyframes: {
				wiggle: {
				  '0%, 100%': { transform: 'translate(-10px, 0)' },
				  '50%': { transform: 'translate(10px, 0)' },
				}
			}
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		base: false
	}
}
