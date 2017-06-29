'use strict'
var should = require('should')
// const sinon = require('sinon')
const {addDescription, type} = require('../index.js')

describe('addDescription.js', function () {
  describe('course', () => {
    it('should add the type:course, userType:teachers', () => addDescription({ug1Name: 'edu.courses.DD.abcdef.20161.1.teachers'})._desc.should.deepEqual({type: type.course, userType: type.teachers}))
    it('should add the type assistants', () => addDescription({ug1Name: 'edu.courses.DD.abcdef.20161.1.assistants'})._desc.should.deepEqual({type: type.course, userType: type.assistants}))
    it('should add the type courseresponsibles', () => addDescription({ug1Name: 'edu.courses.DD.abcdef.20161.1.courseresponsible'})._desc.should.deepEqual({type: type.course, userType: type.courseresponsibles}))
    it('should add the type students', () => addDescription({ug1Name: 'ladok2.kurser.SD.2230.registrerade_20162.1'})._desc.should.deepEqual({type: type.course, userType: type.students}))
    it('should add the type omregistrerad', () => addDescription({ug1Name: 'ladok2.kurser.KD.1070.omregistrerade_20171'})._desc.should.deepEqual({type: type.course, userType: type.omregistrerade}))
    it('should add the type antagna', () => addDescription({ug1Name: 'ladok2.kurser.MG.212X.antagna_20162.1'})._desc.should.deepEqual({type: type.course, userType: type.antagna}))

    it('should add the type antagna', () => addDescription(
      { kthid: 'u24gd35w',
      ugClass: 'group',
      deleted: false,
      ug1Name: 'ladok2.kurser.LS.1532.registrerade_20171.1',
      name_sv: 'Registrerade på kursomgång 1 av kurs LS1532, 20171',
      member:  [ 'u1zcklld', 'u1d3t1mw', 'u1l2vcp1', 'u1lqegq8', 'u1r2pa85', 'u1txz16q', 'u171r5sf', 'u1gd3kzb', 'u15fykms', 'u1vmbc2e', 'u188phop', 'u1bxxj89', 'u1ryutld', 'u1drepc6', 'u1zco8zw', 'u1g2t3sy', 'u1sx85mu', 'u1x8358i', 'u1x4rztx', 'u1fnquxo', 'u1v6om2k', 'u1974wba']
    }
    )._desc.should.deepEqual({type: type.course, userType: type.students}))
  })

  it('should add the type unknown', () => addDescription({})._desc.should.deepEqual({type: type.unknown}))
  it('should add the type unknown', () => addDescription({ug1Name: ''})._desc.should.deepEqual({type: type.unknown}))
  it('should add the type unknown', () => addDescription({ug1Name: 'test'})._desc.should.deepEqual({type: type.unknown}))
  it('should add the type unknown', () => addDescription({ug1Name: 'ladok2.kurser.MJ.220X.antagna_20171'})._desc.should.deepEqual({type: type.unknown}))

  it('should add the type user', () => addDescription({ugClass: 'user'})._desc.should.deepEqual({type: type.user}))
})
