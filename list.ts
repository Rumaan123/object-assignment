//Assignment 4 :student list organizer

interface Student {
    name: string;
    isSenior: boolean;
    hasCompletedAssignments: boolean;
}

const students: Student[] = [
    { name: 'Rumaan', isSenior: true, hasCompletedAssignments: true },
    { name: 'Babar', isSenior: false, hasCompletedAssignments: true },
    { name: 'Kainat', isSenior: true, hasCompletedAssignments: false },
    { name: 'Dania', isSenior: true, hasCompletedAssignments: true },
    { name: 'Erum', isSenior: false, hasCompletedAssignments: false }
];

function findSeniorStudentsWithAssignments(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}

const seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log('Senior students with completed assignments:', seniorStudentsWithAssignments);

function removeIncompleteAssignmentStudents(students: Student[]): Student[] {
    return students.filter(student => student.isSenior && student.hasCompletedAssignments);
}

const updatedClassList = removeIncompleteAssignmentStudents(students);
console.log('Updated class list:', updatedClassList);
