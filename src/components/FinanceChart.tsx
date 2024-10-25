'use client'

import Image from "next/image"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400
    },
    {
        name: 'Feb',
        income: 3000,
        expense: 1398
    },
    {
        name: 'Mar',
        income: 2000,
        expense: 9800
    },
    {
        name: 'Apr',
        income: 2780,
        expense: 3908
    },
    {
        name: 'May',
        income: 1890,
        expense: 4800
    },
    {
        name: 'Jun',
        income: 2390,
        expense: 3800
    },
    {
        name: 'Jul',
        income: 3490,
        expense: 4300
    },
    {
        name: 'Aug',
        income: 8000,
        expense: 4300
    },
    {
        name: 'Sep',
        income: 5000,
        expense: 4300
    },
    {
        name: 'Oct',
        income: 3490,
        expense: 4300
    },
    {
        name: 'Nov',
        income: 3490,
        expense: 4300
    },
    {
        name: 'Dec',
        income: 4500,
        expense: 4300
    },
];

export default function FinanceChart() {
    return (
        <section className='bg-white rounded-xl w-full h-full p-4'>
            {/* TITLE */}
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold'> Finance </h1>
                <Image src="/moreDark.png" alt='three-dots' width={20} height={20} className='object-cover' />
            </div>
            {/* FINANCE CHART */}
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" stroke='#ddd' />
                <XAxis dataKey="name" axisLine={false} tick={{fill: "#6b7280"}} tickMargin={7} />
                <YAxis axisLine={false} tick={{fill: "#6b7280"}} tickMargin={10} />
                <Tooltip />
                <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: "10px", paddingBottom: "30px"}} />
                <Line type="monotone" dataKey="income" stroke='#FAE27C' strokeWidth={5}  />
                <Line type="monotone" dataKey="expense" stroke='#C3EBFA' strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
            {/* BOTTOM */}
            <div className="">
            </div>
        </section>  
    )
}
