watch:
	@make -j run-dev-server watch-less

run-dev-server: node_modules
	@node_modules/.bin/budo src/scripts/main.js:src/bundle.js -- \
	-t [ babelify --presets es2015 ] \
	-t [ jstify --noMinify ] \

watch-less: node_modules
	@node_modules/.bin/watchf 'src/styles/**/*less' -c 'make css'

css: node_modules
	@node_modules/.bin/lessc src/styles/main.less src/bundle.css

lint: node_modules
	@node_modules/.bin/eslint src/scripts/**/*.js
