/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.tsx'],
	theme: {
		extend: {
			colors: {
				'gray-100': '#f2f2f2',
				'gray-200': '#d9d9d9',
				'gray-300': '#808080',
				'gray-400': '#333333',
				'gray-500': '#262626',
				'gray-600': '#1a1a1a',
				'gray-700': '#0d0d0d',
				'purple-200': '#8284fa',
				'purple-300': '#5e60ce',
				'blue-200': '#4ea8de',
				'blue-300': '#1e6f9f',
				'red-300': '#e25858',
			},
		},
	},
	plugins: [require('@tailwindcss/forms')],
};
