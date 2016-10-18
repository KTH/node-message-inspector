module.exports = {
  addType (msg) {
    const isTeacherRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bteachers\b/
    const isAssistantsRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bassistants\b/
    const isCourseResponsibleRegExp = /edu\.courses\.\w{2}\.\w{6}\.\d{5}\.\d\.\bcourseresponsibles\b/
    const result = JSON.parse(JSON.stringify(msg))
    // console.log(result)
    if (result.ug1Name.match(isTeacherRegExp)) {
      result.type = 'TEACHERS'
    } else if (result.ug1Name.match(isAssistantsRegExp)) {
      result.type = 'ASSISTANTS'
    } else if (result.ug1Name.match(isCourseResponsibleRegExp)) {
      result.type = 'COURSERESPONSIBLES'
    } else {
      result.type = 'UNKNOWN'
    }
    return result
  }}
