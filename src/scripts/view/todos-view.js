let d             = require('debug')('[V] todos-view'),
    CompositeView = require('backbone.marionette').CompositeView,
    TodoView      = require('./todo-view')

module.exports = CompositeView.extend({

  template: require('../template/todos.html'),

  childView: TodoView,

  childViewContainer: '#todo-items',

  events: {
    'click #complete-all-button': 'onClickCompleteAll',
    'click #delete-completed-button': 'onClickDeleteCompleteButton'
  },

  initialize: function(opts) {
    d('#initialize')
  },

  onClickCompleteAll: function(e) {
    d('#onClickCompleteAll')
    this.collection.forEach(function(todo) {
      todo.set('completed', true)
    })
    this.render()
  },

  onClickDeleteCompleteButton: function(e) {
    d('#onClickDeleteCompleteButton')
    this.collection.filter({completed: true})
      .forEach(function(todo) {
        todo.destroy()
      })
  }

})
