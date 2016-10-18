'use strict'
var should = require('should')
// const sinon = require('sinon')
let messageInspector = require('../index.js')

describe('addType.js', function () {
  beforeEach(function () {
    // convertTo2dArray = require('../../../convertTo2dArray')
  })

  it('should add the type unknown', () => messageInspector.addType({ug1Name: 'test'}).type.should.equal('UNKNOWN'))
  it('should add the type teacher', () => messageInspector.addType({ug1Name: 'edu.courses.DD.abcdef.20161.1.teachers'}).type.should.equal('TEACHERS'))
})
