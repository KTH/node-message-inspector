const type = {
  user: 'USER',
  students: 'STUDENTS',
  teachers: 'TEACHERS',
  courseresponsibles: 'COURSERESPONSIBLES',
  assistants: 'ASSISTANTS',
  unknown: 'UNKNOWN'}

module.exports = {
  type,
  addType (msg) {
    const result = Object.assign({}, msg)
    if (result.ugClass === 'user') {
      result.type = 'USER'
      return result
    }

    if (!result.ug1Name) {
      return result
    }

    const isTeacherRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bteachers\b/
    const isAssistantsRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bassistants\b/
    const isCourseResponsibleRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bcourseresponsibles\b/
    const isStudentsRegExp = /ladok2\.kurser.\w{2}\.\w{4}.registrerade_\d{5}\.\d/
    // console.log(result)
    if (result.ug1Name.match(isTeacherRegExp)) {
      result.type = type.teachers
    } else if (result.ug1Name.match(isAssistantsRegExp)) {
      result.type = type.assistants
    } else if (result.ug1Name.match(isCourseResponsibleRegExp)) {
      result.type = type.courseresponsibles
    } else if (result.ug1Name.match(isStudentsRegExp)) {
      result.type = type.students
    } else {
      result.type = type.unknown
    }
    return result
  }}
