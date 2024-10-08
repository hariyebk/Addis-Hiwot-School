import Menu from "@/components/Menu"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

interface Props {
    children: React.ReactNode
}

export default function DashboardLayout({children} : Props) {
    return (
        <div className="h-full flex">
            <div className="w-[14%] md:w-[8%] lg:w-[16%] shadow-lg">
                <Link href="/" className="flex items-center justify-center gap-2 lg:pr-8 pt-4"> 
                    <Image src="/logo.png" alt="logo" width={32} height={32} className="object-contain" />
                    <span className="hidden lg:block font-semibold pr-0.5 pt-1"> Addis Hiwot </span>
                </Link>
                <Menu />
            </div>
            <div className="w-[86%] md:w-[92%] lg:w-[84%] bg-[#f7f8fa] overflow-y-scroll flex flex-col">
                <Navbar />
                {children}
            </div>
        </div>
    )
}
