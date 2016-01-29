let assert = require('power-assert')

let Todos = require(process.cwd() + '/src/scripts/collection/todos')

describe('scripts/collection/todos', function() {

  describe('Todos', function() {
    it('should be object', function() {
      assert.equal(typeof Todos, 'object')
    })
  })

  describe('Todos.getInstance', function() {
    it('Todo.getInstance should be function', function() {
      assert.equal(typeof Todos.getInstance, 'function')
    })

    it('should be singleton object', function() {
      let todos1 = Todos.getInstance()
      let todos2 = Todos.getInstance()
      assert.ok(todos1 === todos2)
    })
  })

})
