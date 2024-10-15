"use client"

import Image from 'next/image';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Group A', value: 92, fill: "#C3EBFA" },
    { name: 'Group B', value: 8, fill: "#FAE27C" }
];

export default function Performance() {
    return (
        <section className='bg-white rounded-md p-4 h-80 relative'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-semibold'> Performance </h2>
                <Image src='/moreDark.png' alt='three dots' width={16} height={16} className='object-cover'/>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    fill="#8884d8"
                />
                </PieChart>
            </ResponsiveContainer>
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center gap-2'>
                <h1 className='text-3xl font-bold'> 9.2 </h1>
                <span className='text-xs text-gray-500'> Out of 10 </span>
            </div>
            <h2 className='font-medium absolute bottom-16 left-0 right-0 m-auto text-center'> 1st Semester - 2nd Semester </h2>
        </section>
    )
}