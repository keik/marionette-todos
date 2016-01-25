let d            = require('debug')('[C] todos'),
    config       = require('../config'),
    Collection   = require('backbone').Collection,
    Todo         = require('../model/todo')

let Todos = Collection.extend({

  model: Todo,

  url: `//${config.HOST}/todos`,

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
