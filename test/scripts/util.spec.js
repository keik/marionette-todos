let assert = require('power-assert')

let util = require(process.cwd() + '/src/scripts/util')

describe('scripts/util.js', function() {

  describe('util', function() {
    it('should be object', function() {
      assert.equal(typeof util, 'object')
    })
  })

  describe('util.serializeObject', function() {
    it('should be function', function() {
      assert.equal(typeof util.serializeObject, 'function')
    })

    it('should return serialized object with inputed form', function() {
      let formEl = document.createElement('form')
      formEl.innerHTML =
        '<input type="text" name="p1" value="inputed">' +
        '<select name="p2">' +
        '  <option selected="selected">o1</option>' +
        '  <option>o2</option>' +
        '<input type="checkbox" name="p3" value="c3" checked="checked">'

      let serialized = util.serializeObject(formEl)
      assert.deepEqual(serialized, {p1: 'inputed', p2: 'o1', p3: 'c3'})
    })

    it('should return serialized object with NOT inputed form', function() {
      let formEl = document.createElement('form')
      formEl.innerHTML =
        '<input type="text" name="p1" value="">' +
        '<select name="p2">' +
        '  <option></option>' +
        '  <option>o1</option>' +
        '  <option>o2</option>' +
        '<input type="checkbox" name="p3" checked="checked">'

      let serialized = util.serializeObject(formEl)
      assert.deepEqual(serialized, {p1: '', p2: '', p3: ''})
    })
  })

  describe('util.clearValues', function() {
    it('should be function', function() {
      assert.equal(typeof util.clearValues, 'function')
    })

    it('should return form element that child inputs value are cleared', function() {
      let formEl = document.createElement('form')
      formEl.innerHTML =
        '<input type="text" name="p1" value="inputed">' +
        '<select name="p2">' +
        '  <option></option>' +
        '  <option selected="selected">o1</option>' +
        '  <option>o2</option>' +
        '<input type="checkbox" name="p3" value="c3" checked="checked">'

      // before clear
      let serialized_before = util.serializeObject(formEl)
      assert.deepEqual(serialized_before, {p1: 'inputed', p2: 'o1', p3: 'c3'})

      util.clearValues(formEl)

      // after clear
      let serialized_after = util.serializeObject(formEl)
      assert.deepEqual(serialized_after, {p1: '', p2: '', p3: ''})
    })
  })

})
