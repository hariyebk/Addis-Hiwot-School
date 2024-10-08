import { COLUMN } from "@/types"


interface TableProps {
    column: COLUMN[]
}

export default function Table({column} : TableProps) {
    return (
        <table className="w-full mt-4">
            <thead>  
                <tr className="text-left text-gray-500 text-sm">
                    {column.map((col) => {
                        return (
                            <th key={col.accessor} className="">
                                {col.header}
                            </th>
                        )
                    })}
                </tr>
            </thead>
        </table>
    )
}
