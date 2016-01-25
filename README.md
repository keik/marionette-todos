# marionette-todos

an example app with following stacks

* [backbone](https://github.com/jashkenas/backbone)
* [backbone.marionette](https://github.com/marionettejs/backbone.marionette)
* [backbone.validation](https://github.com/thedersen/backbone.validation)
* [backbone.localstorage](https://github.com/jeromegn/Backbone.localStorage)
* [jstify](https://github.com/zertosh/jstify)


## develop

```
% make watch
```

for

* running developing server with [budo](https://github.com/mattdesl/budo), which browserify scripts automatically (default port: 9966)
* running RESTful API server with [json-server](https://github.com/typicode/json-server), which store data to `db.json` (default port: 3000)
* watching changes of *.less and compile src/bundle.css


you can run each task above separately with

* `make run-dev-server`
* `make run-json-server`
* `make watch-less`

for more details, see `Makefile`


## build

```
% make build
```

output `bundle.js` / `bundle.css` into `dist` directory


## profile

you can specify profile such like `NODE_ENV=prod`

depending on profile value, some value are replaced according to `config.js`
