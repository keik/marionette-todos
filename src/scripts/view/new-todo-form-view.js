let d          = require('debug')('[V] new-todo-form-view'),
    _          = require('underscore'),
    util       = require('../util'),
    ItemView   = require('backbone.marionette').ItemView,
    Todos      = require('../collection/todos'),
    Todo       = require('../model/todo')

module.exports = ItemView.extend({

  template: require('../template/new-todo-form.html'),

  events: {
    'submit form': 'onSubmitForm',
    'keyup form': 'onKeyupForm'
  },

  initialize: function(opts) {
    d('#initialize')
    this.model = new Todo()
  },

  onSubmitForm: function(e) {
    d('#onSubmitForm')
    e.preventDefault()
    let form = e.currentTarget,
        todos = Todos.getInstance()

    this.model.set(util.serializeObject(form))
    if (!this.validateInputs()) {
      todos.create(this.model.clone())
      util.clearValues(form)
    }
  },

  onKeyupForm: function(e) {
    d('#onKeyupForm')
    if (e.keyCode === 13 /* enter */)
      return

    let form = e.currentTarget
    this.model.set(util.serializeObject(form))
    this.validateInputs()
  },

  /**
   * validate model and add / remove `has-error` class to input element
   * @returns {Object} error
   */
  validateInputs: function() {
    d('#validateInputs')
    let err = this.model.validate()
    this.$('form').children('.has-error').removeClass('has-error')
    _.forEach(err, function(v, k) {
      this.$(`[name=${k}]`).parent().addClass('has-error')
    }, this)
    return err
  }

})
