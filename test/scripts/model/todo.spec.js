let assert = require('power-assert')

let Todo = require(process.cwd() + '/src/scripts/model/todo')

describe('scripts/model.js', function() {

  describe('Todo', function() {
    it('should be function', function() {
      assert.equal(typeof Todo, 'function')
    })
  })

  describe('todo.validate', function() {
    it('should return error object when `title` is empty', function() {
      let todo = new Todo()
      let err = todo.validate()
      assert.equal(typeof err.title, 'string')
    })

    it('should return null when `title` is filled', function() {
      let todo = new Todo({title: 'foo'})
      let err = todo.validate()
      assert.equal(err, null)
    })
  })

})
