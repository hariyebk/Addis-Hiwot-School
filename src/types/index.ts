export type COLUMN = {
    header: string,
    accessor: string,
    className?: string
}

export type TEACHER = {
    id: number,
    teacherId: string,
    name: string,
    email?: string,
    photo: string,
    phone: string,
    subjects: string[],
    classes: string[],
    address: string
}

export type STUDENT = {
    id: number,
    studentId: string,
    name: string,
    email?: string,
    photo: string,
    phone?: string,
    grade: number,
    class: string,
    address: string,
}

export type PARENT = {
    id: 1,
    name: string,
    students: string[],
    email?: string,
    phone: string,
    address: string
}

export type SUBJECT = {
    id: number,
    name: string,
    teachers: string[],
}

export type CLASS = {
    id: number,
    name: string,
    capacity: number,
    grade: number,
    supervisor: string
}

export type LESSON = {
    id: number,
    subject: string,
    class: string,
    teacher: string,
}

export type EXAM = {
    id: number,
    subject: string,
    class: string,
    teacher: string,
    date: string,
}

export type ASSIGNMENT = {
    id: 1,
    subject: string,
    class: string,
    teacher: string,
    dueDate: string,
}

export type RESULT = {
    id: number,
    subject: string,
    class: string,
    teacher: string,
    student: string,
    date: string,
    type: string,
    score: number,
}

export type EVENT = {
    id: number,
    title: string,
    class: string,
    date: string,
    startTime: string,
    endTime: string,
}