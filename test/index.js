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
  it('should add the type assistants', () => messageInspector.addType({ug1Name: 'edu.courses.DD.abcdef.20161.1.assistants'}).type.should.equal('ASSISTANTS'))
  it('should add the type courseresponsibles', () => messageInspector.addType({ug1Name: 'edu.courses.DD.abcdef.20161.1.courseresponsibles'}).type.should.equal('COURSERESPONSIBLES'))
  it('should add the type students', () => messageInspector.addType({ug1Name: 'ladok2.kurser.SD.2230.registrerade_20162.1'}).type.should.equal('STUDENTS'))
  it('should add the type user', () => messageInspector.addType({ugClass: 'user'}).type.should.equal('USER'))
})
