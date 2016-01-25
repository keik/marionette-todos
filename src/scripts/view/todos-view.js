let d             = require('debug')('[V] todos-view'),
    CompositeView = require('backbone.marionette').CompositeView,
    TodoView      = require('./todo-view')

module.exports = CompositeView.extend({

  template: require('../template/todos.html'),

  filter: 'all',

  childView: TodoView,

  childViewOptions: function() {
    return {
      parentView: this
    }
  },

  childViewContainer: '#todo-items',

  events: {
    'click #show-all-button': 'onClickShowAllButton',
    'click #show-completed-button': 'onClickShowCompletedButton',
    'click #show-active-button': 'onClickShowActiveButton',
    'click #complete-all-button': 'onClickCompleteAll',
    'click #delete-completed-button': 'onClickDeleteCompleteButton'
  },

  initialize: function(opts) {
    d('#initialize')
  },

  onClickShowAllButton: function(e) {
    d('#onClickShowAllButton')
    this.$(e.target).addClass('active')
      .siblings().removeClass('active')
    this.filter = 'all'
    this.collection.each(function(todo) {
      todo.trigger('filter')
    })
  },

  onClickShowCompletedButton: function(e) {
    d('#onClickShowCompletedButton')
    this.$(e.target).addClass('active')
      .siblings().removeClass('active')
    this.filter = 'completed'
    this.collection.each(function(todo) {
      todo.trigger('filter')
    })
  },

  onClickShowActiveButton: function(e) {
    d('#onClickShowActiveButton')
    this.$(e.target).addClass('active')
      .siblings().removeClass('active')
    this.filter = 'active'
    this.collection.each(function(todo) {
      todo.trigger('filter')
    })
  },

  onClickCompleteAll: function(e) {
    d('#onClickCompleteAll')
    this.collection.forEach(function(todo) {
      todo.set('completed', true).save()
    })
  },

  onClickDeleteCompleteButton: function(e) {
    d('#onClickDeleteCompleteButton')
    this.collection.filter({completed: true})
      .forEach(function(todo) {
        todo.destroy()
      })
  }

})
