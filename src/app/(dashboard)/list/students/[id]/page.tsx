import { Announcments, BigCalendar, FormModal, Performance } from "@/components"
import Image from "next/image"
import Link from "next/link"


interface Props {
    params: {
        id: string
    }
}

export default function page({params: {id}} : Props){

    return (
        <main className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
        {/* LEFT */}
        <div className="w-full xl:w-2/3">
            <div className="flex flex-col lg:flex-row gap-4">
                {/* USER INFO CARD */}
                <div className="bg-sky py-6 px-4 rounded-md flex-1 flex gap-4">
                    <div className="w-1/3 xl:w-1/2">
                        <Image src="/graduate.png" alt="student profile photo" width={144} height={144} className="object-cover w-36 h-36 rounded-full" />
                    </div>
                    <div className="w-2/3 flex flex-col justify-between gap-4">
                        <div className="flex items-center gap-4">
                            <h2 className="text-xl font-semibold"> Abel Beyene </h2>
                            <FormModal table="student" type="update" data={
                                {
                                    id: 1,
                                    teacherId: "1234567890",
                                    username: "abel_beyene",
                                    password: "password",
                                    firstName: "Abel",
                                    lastName: "Beyene",
                                    email: "abel@beyene.com",
                                    bloodType: "A+",
                                    photo: "/graduate.png",
                                    phone: "1234567890",
                                    birthdate: "2000-07-12",
                                    address: "bole, Addis Ababa, Ethiopia",
                                }
                            } />
                        </div>
                        <p className="text-sm text-gray-500"> Lorem ipsum dolor sit amet, consectetur adipiscing elit </p>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium">
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/blood.png" alt="blood-icon" width={14} height={14} className="object-cover" />
                                <span> A+ </span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/date.png" alt="date-icon" width={14} height={14} className="object-cover" />
                                <span> January 2020 </span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/mail.png" alt="mail-icon" width={14} height={14} className="object-cover" />
                                <span> abel@beyene.com </span>
                            </div>
                            <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                                <Image src="/phone.png" alt="phone-icon" width={14} height={14} className="object-cover" />
                                <span> +251942237570 </span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* SMALL CARDS */}
                <div className="flex-1 flex flex-wrap gap-4 justify-between">
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
                        <Image src="/singleAttendance.png" alt="attendance-icon" width={24} height={24} className="object-cover w-6 h-6" />
                        <div>
                            <h2 className="text-xl font-semibold"> 90% </h2>
                            <span className="text-sm text-gray-400"> Attendance </span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
                        <Image src="/singleBranch.png" alt="branch-icon" width={24} height={24} className="object-cover w-6 h-6" />
                        <div>
                            <h2 className="text-xl font-semibold"> 12th </h2>
                            <span className="text-sm text-gray-400"> Grade </span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
                        <Image src="/singleLesson.png" alt="attendance-icon" width={24} height={24} className="object-cover w-6 h-6" />
                        <div>
                            <h2 className="text-xl font-semibold"> 18 </h2>
                            <span className="text-sm text-gray-400"> Lessons </span>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] lg:w-[45%] 2xl:w-[48%]">
                        <Image src="/singleClass.png" alt="class-icon" width={24} height={24} className="object-cover w-6 h-6" />
                        <div>
                            <h2 className="text-xl font-semibold"> 12A </h2>
                            <span className="text-sm text-gray-400"> Class </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white mt-4 rounded-md p-4 h-[800px]">
                <h1 className=""> Students's Schedule</h1>
                <BigCalendar />
            </div>
        </div>
        {/* RIGHT */}
        <div className="w-full xl:w-1/3 flex flex-col gap-4">
            <div className="bg-white p-4 rounded-md"> 
                <h1 className="text-xl font-semibold"> Shortcuts </h1>
                <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
                    <Link href={`/`} className="p-3 rounded-md bg-lightYellow"> Students's lessons </Link>
                    <Link href={`/`} className="p-3 rounded-md bg-lightSky"> Students's teachers </Link>
                    <Link href={`/`} className="p-3 rounded-md bg-lightPurple"> Students's results </Link>
                    <Link href={`/`} className="p-3 rounded-md bg-pink-50"> Students's exams </Link>
                    <Link href={`/`} className="p-3 rounded-md bg-lightSky"> Students's assignments </Link>
                </div>
            </div>
            <Performance />
            <Announcments />
        </div>
    </main>
    )
}
