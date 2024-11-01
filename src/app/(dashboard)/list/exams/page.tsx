import { FormModal, Pagination, Table, TableSearch } from "@/components";
import { examsData, role } from "@/lib/data";
import { EXAM } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const columns = [
    {
        header: "Subject", 
        accessor: "subject"
    },
    {
        header: "Class", 
        accessor: "class",
        className: "hidden md:table-cell"
    },
    {
        header: "Teacher", 
        accessor: "teacher",
        className: "hidden md:table-cell pl-10"
    },
    {
        header: "Date", 
        accessor: "date",
        className: "hidden lg:table-cell"
    },
    {
        header: "Actions", 
        accessor: "actions"
    },
]

export default function page(){

    const renderRow = (item: EXAM): ReactNode => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightPurple">
            <td className="max-sm:p-2 sm:p-4 max-w-[90px]">
                <h3 className="font-semibold"> {item.subject} </h3>
            </td>
            <td className="hidden md:table-cell text-sm"> {item.class} </td>
            <td className="hidden md:table-cell text-sm pl-10"> {item.teacher} </td>
            <td className="hidden lg:table-cell text-sm"> {item.date} </td>
            <td> 
                <div className="flex items-center gap-2">
                    <Link href={`/list/exams/${item.id}`}> 
                        <FormModal table="exam" type="update" data={examsData} />
                    </Link>
                    {role === "admin" &&  <FormModal table="exam" type="delete" id={item.id} />}
                </div>
            </td>
        </tr>
    )

    return (
        <main className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold"> All Exams </h1>
                <div className="flex max-md:flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch /> 
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow"> 
                            <Image src="/filter.png" alt="filter" width={14} height={14} className="object-cover" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow"> 
                            <Image src="/sort.png" alt="sort-icon" width={14} height={14} className="object-cover" />
                        </button>
                        {role === "admin" &&  <FormModal table="exam" type="create" />}
                    </div>
                </div>
            </div>
            <Table column={columns} renderRow={renderRow} data={examsData} />
            <Pagination />
        </main>
    )
}
