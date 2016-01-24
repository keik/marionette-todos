let d               = require('debug')('[V] app-view'),
    LayoutView      = require('backbone.marionette').LayoutView,
    TodosView       = require('./todos-view'),
    NewTodoFormView = require('./new-todo-form-view'),
    Todos           = require('../collection/todos')

module.exports = LayoutView.extend({

  el: '#app',

  template: require('../template/app.html'),

  regions: {
    todos: '#todos',
    newTodoForm: '#new-todo-form'
  },

  initialize: function() {
    d('#initialize')
    this.render()

    let todos = Todos.getInstance()
    todos.fetch()

    let todosView = new TodosView({collection: todos})
    let newTodoFormView = new NewTodoFormView()
    this.getRegion('todos').show(todosView)
    this.getRegion('newTodoForm').show(newTodoFormView)
  }

})
