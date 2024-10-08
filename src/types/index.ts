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