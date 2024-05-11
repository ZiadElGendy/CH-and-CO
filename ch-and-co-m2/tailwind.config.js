/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				farahgreen: {
					'50': '#f7f8f8',
					'100': '#eef0f0',
					'200': '#d9dede',
					'300': '#b0bcbc',
					'400': '#90a0a0',
					'500': '#728585',
					'600': '#5c6c6d',
					'700': '#4b5959',
					'800': '#414b4b',
					'900': '#394141',
					'950': '#262b2b',
				},
				farahgray: {
					'50': '#f6f6f6',
					'100': '#e7e7e7',
					'200': '#d1d1d1',
					'300': '#b0b0b0',
					'400': '#888888',
					'500': '#707070',
					'600': '#5d5d5d',
					'700': '#4f4f4f',
					'800': '#454545',
					'900': '#3d3d3d',
					'950': '#262626',
				},
				farahorange: {
					'50': '#fcf8f0',
					'100': '#f9efdb',
					'200': '#f1dcb7',
					'300': '#e4b975',
					'400': '#dea359',
					'500': '#d68939',
					'600': '#c8732e',
					'700': '#a65a28',
					'800': '#854827',
					'900': '#6c3d22',
					'950': '#3a1d10',
				},
				accept: {
					'50': '#f4f7ee',
					'100': '#e7eed9',
					'200': '#d2deb8',
					'300': '#b4c98d',
					'400': '#9fb873',
					'500': '#7a974b',
					'600': '#5e7739',
					'700': '#4a5c2f',
					'800': '#3d4b29',
					'900': '#354126',
					'950': '#1a2211',
				},
				reject: {
					'50': '#fef3f2',
					'100': '#fde5e3',
					'200': '#fcd0cc',
					'300': '#f9afa8',
					'400': '#f38176',
					'500': '#ea5e51',
					'600': '#d63a2c',
					'700': '#b42d21',
					'800': '#95291f',
					'900': '#7c2820',
					'950': '#43110c',
				},
				
			},
			fontFamily: {
				'karla': ['Karla', 'sans-serif'],
			},
		},
	},
	plugins: [],
};