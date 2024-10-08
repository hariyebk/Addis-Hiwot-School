import {Announcments, AttendanceChart, CountChart, EventCalendar, FinanceChart, UserCard} from "@/components/index"


export default function AdminPage() {
    return (
        <main className="p-4 flex gap-4 max-md:flex-col md:flex-row">
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                {/* CARDS */}
                <div className="flex flex-wrap justify-between gap-4">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>
                {/* MIDDLE CHART */}
                <div className="flex gap-4 flex-col lg:flex-row">
                    {/* COUNT CHART */}
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    {/* ATTENDANCE CHART */}
                    <div className="w-full lg:w-2/3 h-[450px]">
                        <AttendanceChart />
                    </div>
                </div>
                {/* BOTTOM CHART */}
                <div className="w-full h-[500px]">
                    <FinanceChart />
                </div>  
            </div>
            {/* RIGHT */}
            <div className="w-full lg:w-1/3 flex flex-col gap-8">
                <EventCalendar />
                <Announcments />
            </div>
        </main>
    )
}
