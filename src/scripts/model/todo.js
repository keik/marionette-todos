let d     = require('debug')('[M] todo'),
    Model = require('backbone').Model

module.exports = Model.extend({

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
