let _ = require('underscore')

module.exports = {

  serializeObject: function(formEl) {
    return _.reduce(formEl.elements, function(acc, element) {
      if (element.name) {
        acc[element.name] = element.value
      }
      return acc
    }, {})
  },

  clearValues: function(formEl) {
    return _.forEach(formEl.elements, function(element) {
      if (element.name) {
        element.value = ''
      }
    })
  }

}
