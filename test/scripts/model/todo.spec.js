let assert = require('power-assert')

let Todo = require(process.cwd() + '/src/scripts/model/todo')

describe('scripts/model.js', function() {

  describe('Todo', function() {
    it('should be function', function() {
      assert.equal(typeof Todo, 'function')
    })
  })

})
