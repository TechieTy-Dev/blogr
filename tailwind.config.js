/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				cta: "hsl(356, 100%, 66%)",
				hovercta: "hsl(355, 100%, 74%)",
				heading: "hsl(208, 49%, 24%)",
				text: " hsl(0, 0%, 100%)",
				footertext: "hsl(240, 2%, 79%)",
				body: " hsl(207, 13%, 34%)",
				footerbg: "hsl(240, 10%, 16%)",
				ctabg:
					"linear-gradient(to right, hsl(356, 100%, 66%), hsl(355,100%, 74%))",
			},
		},
	},
	plugins: [],
};
