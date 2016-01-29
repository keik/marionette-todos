let d     = require('debug')('[M] todo'),
    _     = require('underscore'),
    Model = require('backbone').Model,
    Validation  = require('backbone-validation')

let Todo = Model.extend({

  validation: {
    title: {
      required: true
    }
  },

  defaults: {
    completed: false,
    title: null,
    dueDate: null
  },

  initialize: function() {
    d('#initialize')
  }

})

// enable to validate method on each models, without view
_.extend(Todo.prototype, Validation.mixin)

module.exports = Todo
