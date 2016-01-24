let d            = require('debug')('[C] todos'),
    Collection   = require('backbone').Collection,
    LocalStorage = require('backbone.localstorage')

let Todos = Collection.extend({

  localStorage: new LocalStorage('todos'),

  initialize: function() {
    d('#initialize')
  }

})

module.exports = {

  getInstance: function() {
    d('#getInstance')
    if (!this.instance)
      this.instance = new Todos()
    return this.instance
  }

}
