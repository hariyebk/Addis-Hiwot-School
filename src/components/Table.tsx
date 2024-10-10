import { COLUMN } from "@/types"
import { ReactNode } from "react"

interface TableProps {
    column: COLUMN[],
    renderRow: (item: any, index?: number) => ReactNode
    data: any[]
}

export default function Table({column, renderRow, data} : TableProps) {
    return (
        <table className="w-full mt-7">
            <thead>  
                <tr className="text-left text-gray-500 text-sm">
                    {column.map((col) => {
                        return (
                            <th key={col.accessor} className={col.className}>
                                {col.header}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody className="mt-3">
                {data.map((item, index) => renderRow(item, index))}
            </tbody>
        </table>
    )
}
