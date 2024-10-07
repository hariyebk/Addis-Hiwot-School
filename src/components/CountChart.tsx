"use client"

import Image from 'next/image';
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Total',
        count: 106,
        fill: '#ffffff',
    },
    {
        name: 'Girls',
        count: 53,
        fill: '#FAE27C',
    },
    {
        name: 'Boys',
        count: 53,
        fill: '#C3EBFA',
    }
];

export default function CountChart() {
    return (
        <section className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold'> Students </h1>
                <Image src="/moreDark.png" alt='three-dots' width={20} height={20} className='object-cover' />
            </div>
            {/* GENDER ORIENTATION CHART */}
            <div className='w-full h-[75%] relative'>
                <ResponsiveContainer>
                    <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
                    <RadialBar
                        background
                        dataKey="count"
                    />
                    </RadialBarChart>
                </ResponsiveContainer>
                <Image src='/maleFemale.png' alt='gender-image' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' />
            </div>
            {/* BOTTOM */}
            <div className='flex justify-center gap-16'>
                <div className='flex flex-col gap-1.5'>
                    <div className='w-5 h-5 bg-sky rounded-full' />
                    <h2 className='font-bold'> 1,234 </h2>
                    <h2 className='text-xs text-gray-500'> Boys(55%) </h2>
                </div>
                <div className='flex flex-col gap-1.5'>
                    <div className='w-5 h-5 bg-yellow rounded-full' />
                    <h2 className='font-bold'> 730 </h2>
                    <h2 className='text-xs text-gray-500'> Girls(45%) </h2>
                </div>
            </div>
        </section>
    )
}
