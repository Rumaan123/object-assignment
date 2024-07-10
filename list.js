//Assignment4 :student list organizer
var students = [
    { name: 'Rumaan', isSenior: true, hasCompletedAssignments: true },
    { name: 'Babar', isSenior: false, hasCompletedAssignments: true },
    { name: 'Kainat', isSenior: true, hasCompletedAssignments: false },
    { name: 'Dania', isSenior: true, hasCompletedAssignments: true },
    { name: 'Erum', isSenior: false, hasCompletedAssignments: false }
];
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log('Senior students with completed assignments:', seniorStudentsWithAssignments);
function removeIncompleteAssignmentStudents(students) {
    return students.filter(function (student) { return student.isSenior && student.hasCompletedAssignments; });
}
var updatedClassList = removeIncompleteAssignmentStudents(students);
console.log('Updated class list:', updatedClassList);
