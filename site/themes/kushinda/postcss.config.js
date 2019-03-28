const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')

module.exports = {
	plugins: [
		purgecss({
			content: ['themes/kushinda/layouts/**/*.html', 'themes/kushinda/layouts/**/*.svg', 'themes/kushinda/layouts/**/*.js']
		}),
		autoprefixer({
			browsers: [
				"last 2 versions",
				"Explorer >= 8",
			]
		})
	]
}