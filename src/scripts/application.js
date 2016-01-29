let d           = require('debug')('application'),
    Application = require('backbone.marionette').Application,
    AppView     = require('./view/app-view')

module.exports = Application.extend({

  initialize: function() {
    d('initialize')
    this.appView = new AppView()
  }

})
