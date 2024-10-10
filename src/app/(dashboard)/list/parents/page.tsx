import { Pagination, Table, TableSearch } from "@/components";
import { parentsData, role } from "@/lib/data";
import { PARENT } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const columns = [
    {
        header: "Info", 
        accessor: "info"
    },
    {
        header: "Student Names", 
        accessor: "students",
        className: "hidden md:table-cell"
    },
    {
        header: "Phone", 
        accessor: "phone",
        className: "hidden lg:table-cell"
    },
    {
        header: "Address", 
        accessor: "address",
        className: "hidden lg:table-cell"
    },
    {
        header: "Actions", 
        accessor: "actions"
    },
]

export default function page(){

    const renderRow = (item: PARENT): ReactNode => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightPurple">
            <td className="max-sm:p-2 sm:p-4">
                <div className="flex flex-col gap-1">
                    <h3 className="font-semibold"> {item.name} </h3>
                    <span className="text-xs text-gray-500"> {item.email ? item.email : null} </span>
                </div>
            </td>
            <td className="hidden md:table-cell text-sm"> {item.students.join(", ")} </td>
            <td className="hidden lg:table-cell text-sm"> {item.phone} </td>
            <td className="hidden lg:table-cell text-sm"> {item.address} </td>
            <td> 
                <div className="flex items-center gap-2">
                    <Link href={`/list/parents/${item.id}`}> 
                        <button className="w-7 h-7 flex items-center justify-center rounded-full bg-sky">
                            <Image src="/edit.png" alt="view" width={16} height={16} className="object-cover" />
                        </button>
                    </Link>
                    {role === "admin" && <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple">
                            <Image src="/delete.png" alt="trash-icon" width={16} height={16} className="object-cover" />
                    </button>
                    }
                </div>
            </td>
        </tr>
    )

    return (
        <main className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
            <div className="flex items-center justify-between">
                <h1 className="hidden md:block text-lg font-semibold"> All Parents </h1>
                <div className="flex max-md:flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <TableSearch /> 
                    <div className="flex items-center gap-4 self-end">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow"> 
                            <Image src="/filter.png" alt="filter" width={14} height={14} className="object-cover" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow"> 
                            <Image src="/sort.png" alt="sort-icon" width={14} height={14} className="object-cover" />
                        </button>
                        {role === "admin" && <button className="w-8 h-8 flex items-center justify-center rounded-full bg-yellow"> 
                            <Image src="/plus.png" alt="add-icon" width={14} height={14} className="object-cover" />
                        </button>}
                    </div>
                </div>
            </div>
            <Table column={columns} renderRow={renderRow} data={parentsData} />
            <Pagination />
        </main>
    )
}
