let d        = require('debug')('[V] todos-view'),
    ItemView = require('backbone.marionette').ItemView

module.exports = ItemView.extend({

  tagName: 'tr',

  template: require('../template/todo.html'),

  events: {
    'change .completed': 'onChangeCompleted',
    'click .title': 'onClickTitle',
    'blur .title-input': 'onBlurTitleInput',
    'click .due-date': 'onClickDueDate',
    'blur .due-date-input': 'onBlurDueDateInput'
  },

  initialize: function(opts) {
    d('#initialize')
    this.parentView = opts.parentView
    this.toggleVisibleByFilter()

    this.listenTo(this.model, 'change', this.toggleVisibleByFilter)
    this.listenTo(this.model, 'filter', this.toggleVisibleByFilter)
  },

  // --------------------------
  // event handlers
  // --------------------------
  onChangeCompleted: function() {
    d('#onChangeCompleted')
    this.model.set('completed', !this.model.get('completed'))
      .save()
  },

  onClickTitle: function(e) {
    d('#onClickTitle')
    let html = `<input type="text" class="title-input form-control" value="${ this.model.get('title') }">`
    this.$(e.target).html(html)
      .find('input').focus()
  },

  onBlurTitleInput: function(e) {
    d('#onBlurTitleInput')
    this.model.set('title', e.target.value)
    this.render()
  },

  onClickDueDate: function(e) {
    d('#onClickDueDate')
    let html =
          `<div style="position: relative">` +
          `  <input type="text" class="due-date-input form-control" value="${ this.model.get('dueDate') }">` +
          `</div>`

    this.$(e.target).html(html)
      // .find('input').focus()
      .find('input')
      .datetimepicker({
        format: 'YYYY-MM-DD',
        useCurrent: false
      }).focus()
  },

  onBlurDueDateInput: function(e) {
    d('#onBlurDueDateInput')
    this.model.set('dueDate', e.target.value)
    this.render()
  },

  toggleVisibleByFilter: function() {
    d('#toggleVisibleByFilter')
    let visible
    switch(this.parentView.filter) {
    case 'all':
      visible = true
      break
    case 'completed':
      visible = this.model.get('completed')
      break
    case 'active':
      visible = !this.model.get('completed')
      break
    default:
    }
    this.$el.toggle(visible)
  }

})
