ifdef SystemRoot
	fixPath = $(subst /,\,$1)
else
	fixPath = $1
endif

DIST    = dist

build: node_modules clean lint $(call fixPath,$(DIST)/bundle.js) $(call fixPath,$(DIST)/bundle.css)

watch:
	@make -j run-dev-server run-json-server watch-less

run-dev-server: node_modules
	@$(call fixPath,node_modules/.bin/budo src/scripts/main.js:src/bundle.js) -- -t [ envify --NODE_ENV dev ]

run-json-server: node_modules
	@$(call fixPath,node_modules/.bin/json-server --watch db.json)

watch-less: node_modules css
	@$(call fixPath,node_modules/.bin/watchf 'src/styles/**/*less' -c 'make css')

lint: node_modules
	@$(call fixPath,node_modules/.bin/eslint src/scripts/**/*.js)

####

$(call fixPath,$(DIST)/bundle.css): node_modules $(DIST)
	@$(call fixPath,node_modules/.bin/lessc src/styles/main.less) $@

$(call fixPath,$(DIST)/bundle.js): node_modules $(DIST)
	@$(call fixPath,node_modules/.bin/browserify src/scripts/main.js -t [ envify --NODE_ENV prod ]) | \
	$(call fixPath,node_modules/.bin/uglifyjs) --comments "/license\|copyright/img" -o $@

css: node_modules
	@$(call fixPath,node_modules/.bin/lessc src/styles/main.less src/bundle.css)

$(DIST): node_modules
	@$(call fixPath,node_modules/.bin/mkdirp) $(DIST)

clean: node_modules
	@$(call fixPath,node_modules/.bin/rimraf) $(DIST)

node_modules: package.json
	@npm i

.PHONY: build watch run-dev-server run-json-server watch-less css lint clean
