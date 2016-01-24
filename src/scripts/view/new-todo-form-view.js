let d          = require('debug')('[V] new-todo-form-view'),
    util       = require('../util'),
    ItemView   = require('backbone.marionette').ItemView,
    Todos      = require('../collection/todos'),
    Todo       = require('../model/todo'),
    Validation = require('backbone-validation')

module.exports = ItemView.extend({

  template: require('../template/new-todo-form.html'),

  events: {
    'submit form': 'onSubmitForm'
  },

  initialize: function(opts) {
    d('#initialize')
  },

  onSubmitForm: function(e) {
    d('#onSubmitForm')
    e.preventDefault()

    let form = e.target,
        todo = new Todo(util.serializeObject(form))

    Validation.bind(this, {
      model: todo,
      valid: function(view, attr) {
        d('#valid', view, attr)
        util.clearValues(form)
      },
      invalid: function(view, attr, err) {
        d('#invalid', view, attr, err)
        view.$(`[name=${attr}]`).parent().toggleClass('has-error', true)
      }
    })

    let todos = Todos.getInstance()
    todos.create(todo, {wait: true})
  }

})
