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