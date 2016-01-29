let jsdom = require('jsdom').jsdom

global.document = jsdom('<html><head><script></script></head><body></body></html>', {
  FetchExternalResources   : ['script'],
  ProcessExternalResources : ['script'],
  MutationEvents           : '2.0',
  QuerySelector            : false
})

global.window = global.document.defaultView
global.navigator = global.window.navigator
global.location = global.window.location

// run each tests
require('./scripts/util.spec.js')
require('./scripts/model/todo.spec.js')
require('./scripts/collection/todos.spec.js')
