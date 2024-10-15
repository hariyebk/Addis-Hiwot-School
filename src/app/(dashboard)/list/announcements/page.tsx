import { Pagination, Table, TableSearch } from "@/components";
import { announcementsData, role } from "@/lib/data";
import { ANNOUNCEMENT } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

const columns = [
    {
        header: "Title", 
        accessor: "title"
    },
    {
        header: "Class", 
        accessor: "class",
        className: "hidden md:table-cell"
    },
    {
        header: "Date", 
        accessor: "date",
        className: "hidden md:table-cell"
    },
    {
        header: "Actions", 
        accessor: "actions"
    },
]

export default function page(){

    const renderRow = (item: ANNOUNCEMENT): ReactNode => (
        <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lightPurple">
            <td className="max-sm:p-2 sm:p-4 max-w-[80px]">
                <h3 className="font-semibold"> {item.title} </h3>
            </td>
            <td className="hidden md:table-cell text-sm"> {item.class} </td>
            <td className="hidden md:table-cell text-sm"> {item.date} </td>
            <td> 
                <div className="flex items-center gap-2">
                    <Link href={`/list/announcements/${item.id}`}> 
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
                <h1 className="hidden md:block text-lg font-semibold"> All Announcements </h1>
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
            <Table column={columns} renderRow={renderRow} data={announcementsData} />
            <Pagination />
        </main>
    )
}
