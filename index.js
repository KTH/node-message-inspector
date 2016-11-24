const type = {
  user: 'USER',
  course: 'COURSE',
  students: 'STUDENTS',
  teachers: 'TEACHERS',
  courseresponsibles: 'COURSERESPONSIBLES',
  assistants: 'ASSISTANTS',
  unknown: 'UNKNOWN'}

module.exports = {
  type,
  addDescription (msg) {
    const result = Object.assign({}, msg)
    if (result.ugClass === 'user') {
      result._desc = {type: type.user}
      return result
    }

    if (!result.ug1Name) {
      result._desc = {type: type.unkown}
      return result
    }

    const isTeacherRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bteachers\b/
    const isAssistantsRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bassistants\b/
    const isCourseResponsibleRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bcourseresponsibles\b/
    const isStudentsRegExp = /ladok2\.kurser.\w{2}\.\w{4}.registrerade_\d{5}\.\d/
    // console.log(result)
    if (result.ug1Name.match(isTeacherRegExp)) {
      result._desc = {type: type.course, userType: type.teachers}
    } else if (result.ug1Name.match(isAssistantsRegExp)) {
      result._desc = {type: type.course, userType: type.assistants}
    } else if (result.ug1Name.match(isCourseResponsibleRegExp)) {
      result._desc = {type: type.course, userType: type.courseresponsibles}
    } else if (result.ug1Name.match(isStudentsRegExp)) {
      result._desc = {type: type.course, userType: type.students}
    } else {
      result._desc = {type: type.unknown}
    }
    return result
  }}
