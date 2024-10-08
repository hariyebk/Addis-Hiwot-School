"use client"

import Image from "next/image";

export default function TableSearch() {
    return (
        <section className='w-full md:w-fit'>
            <div className="flex items-center gap-2 text-xs rounded-full px-2.5 ring-[1.5px] ring-gray-30">
                <Image src="/search.png" alt="search-icon" width={14} height={14} className="object-cover"/>
                <input type="text" placeholder="Search ..." className="max-w-[200px] p-2 bg-transparent outline-none focus-visible:outline-none" />
            </div>
        </section>
    )
}
