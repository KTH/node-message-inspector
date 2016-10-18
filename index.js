module.exports = {addType (msg) {
  const isTeacherRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bteachers\b/
  const isAssistantsRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bassistants\b/
  const isCourseResponsibleRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bcourseresponsibles\b/
  const clone = Object.create(msg)
  if (msg.ug1Name.match(isTeacherRegExp)) {

  }
  clone.type = 'EmilTestar'
  return clone
}}
