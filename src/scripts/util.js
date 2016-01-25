let _ = require('underscore')

module.exports = {

  /**
   * return key-value object of form parameters from specified form element
   *
   * example:
   *
   *   <form>
   *    <input type="text" name="title" value="this is a title">
   *   </form>
   *
   *   -> {title: 'this is a title'}
   */
  serializeObject: function(formEl) {
    return _.reduce(formEl.elements, function(acc, element) {
      if (element.name) {
        acc[element.name] = element.value
      }
      return acc
    }, {})
  },

  /**
   * clear all values of input elements in specified form element
   */
  clearValues: function(formEl) {
    return _.forEach(formEl.elements, function(element) {
      if (element.name) {
        element.value = ''
      }
    })
  }

}
