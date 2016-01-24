let d        = require('debug')('[V] todos-view'),
    ItemView = require('backbone.marionette').ItemView

module.exports = ItemView.extend({

  tagName: 'tr',

  template: require('../template/todo.html'),

  events: {
    'change .completed': 'onChangeCompleted'
  },

  initialize: function() {
    d('#initialize')
  },

  onChangeCompleted: function() {
    d('#onChangeCompleted')
    this.model.set('completed', !this.model.get('completed'))
  }

})
