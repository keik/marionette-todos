DIST    = dist

build: node_modules clean lint $(DIST)/bundle.js $(DIST)/bundle.css

watch:
	@make -j run-dev-server run-json-server watch-less

run-dev-server: node_modules
	@node_modules/.bin/budo src/scripts/main.js:src/bundle.js -- -t [ envify --NODE_ENV dev ]

run-json-server: node_modules
	@node_modules/.bin/json-server --watch db.json

watch-less: node_modules css
	@node_modules/.bin/watchf 'src/styles/**/*less' -c 'make css'

lint: node_modules
	@node_modules/.bin/eslint src/scripts/**/*.js

####

$(DIST)/bundle.css: node_modules $(DIST)
	@node_modules/.bin/lessc src/styles/main.less $@

$(DIST)/bundle.js: node_modules $(DIST)
	@NODE_ENV="prod" node_modules/.bin/browserify src/scripts/main.js -t [ envify --NODE_ENV prod ] | \
	node_modules/.bin/uglifyjs --comments /license\|copyright/img -o $@

css: node_modules
	@node_modules/.bin/lessc src/styles/main.less src/bundle.css

$(DIST): node_modules
	@node_modules/.bin/mkdirp $(DIST)

clean: node_modules
	@node_modules/.bin/rimraf $(DIST)

node_modules: package.json
	@npm i

.PHONY: build watch run-dev-server run-json-server watch-less css lint clean
