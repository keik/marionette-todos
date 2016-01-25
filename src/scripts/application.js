let d           = require('debug')('application'),
    _           = require('underscore'),
    Application = require('backbone.marionette').Application,
    Model       = require('backbone').Model,
    Validation  = require('backbone-validation'),
    AppView     = require('./view/app-view')

// enable to validate method on each models, without view
_.extend(Model.prototype, Validation.mixin)

module.exports = Application.extend({

  initialize: function() {
    d('initialize')

    this.appView = new AppView()
  }

})
