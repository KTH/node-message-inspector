'use strict'
var should = require('should')
// const sinon = require('sinon')
const {addDescription, type} = require('../index.js')

describe('addDescription.js', function () {
  beforeEach(function () {
    // convertTo2dArray = require('../../../convertTo2dArray')
  })
  describe('course', () => {
    it('should add the type:course, userType:teachers', () => addDescription({ug1Name: 'edu.courses.DD.abcdef.20161.1.teachers'})._desc.should.deepEqual({type: type.course, userType: type.teachers}))
    it('should add the type assistants', () => addDescription({ug1Name: 'edu.courses.DD.abcdef.20161.1.assistants'})._desc.should.deepEqual({type: type.course, userType: type.assistants}))
    it('should add the type courseresponsibles', () => addDescription({ug1Name: 'edu.courses.DD.abcdef.20161.1.courseresponsibles'})._desc.should.deepEqual({type: type.course, userType: type.courseresponsibles}))
    it('should add the type students', () => addDescription({ug1Name: 'ladok2.kurser.SD.2230.registrerade_20162.1'})._desc.should.deepEqual({type: type.course, userType: type.students}))
  })

  it('should add the type unknown', () => addDescription({})._desc.should.deepEqual({type: type.unknown}))
  it('should add the type unknown', () => addDescription({ug1Name: ''})._desc.should.deepEqual({type: type.unknown}))
  it('should add the type unknown', () => addDescription({ug1Name: 'test'})._desc.should.deepEqual({type: type.unknown}))

  it('should add the type user', () => addDescription({ugClass: 'user'})._desc.should.deepEqual({type: type.user}))
})
