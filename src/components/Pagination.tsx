"use client"

import { useSearchParams } from "next/navigation"

export default function Pagination() {
    const searchParams = useSearchParams()
    const page = searchParams.get("page") || "1"
    const handlePreviousClick = () => {

    }

    const handleNextClick = () => {

    }

    return (
        <section className='w-full p-4 flex items-center justify-between text-gray-500'>
            <button onClick={handlePreviousClick} className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                Prev
            </button>
            <div className="flex items-center justify-center gap-2 text-sm">
                <button className="w-6 h-6 flex items-center justify-center rounded-sm bg-sky relative"> 1 </button>
                <button className="w-6 h-6 flex items-center justify-center rounded-sm"> 2 </button>
                <button className="w-6 h-6 flex items-center justify-center rounded-sm"> 3 </button>
                ...
                <button className="px-2 rounded-sm"> 10 </button>
            </div>
            <button onClick={handleNextClick} className="py-2 px-4 rounded-md bg-slate-200 text-xs font-semibold disabled:opacity-50 disabled:cursor-not-allowed">
                Next
            </button>
        </section>
    )
}
