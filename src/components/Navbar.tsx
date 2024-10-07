import Image from "next/image";


export default function Navbar() {
    return (
        <header className="flex items-center justify-between p-4">
            {/* SEARCH BAR */}
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full px-2.5 ring-[1.5px] ring-gray-30">
                <Image src="/search.png" alt="search-icon" width={14} height={14} className="object-cover"/>
                <input type="text" placeholder="Search ..." className="max-w-[200px] p-2 bg-transparent outline-none focus-visible:outline-none" />
            </div>
            {/* ICONS AND USER */}
            <div className="max-md:w-full flex items-center gap-6 max-md:justify-end">
                {/* Messages */}
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
                    <Image src="/message.png" alt="message-icon" width={20} height={20} className="object-cover" />
                </div>
                {/* Announcement */}
                <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
                    <Image src="/announcement.png" alt="message-icon" width={20} height={20} className="object-cover" />
                    <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white text-xs rounded-full">
                        2
                    </div>
                </div>
                {/* Username */}
                <div className="flex flex-col gap-1">
                    <span className="text-xs leading-3 font-medium"> Harun Bk </span>
                    <span className="text-[10px] text-gray-500 text-right"> Admin </span>
                </div>
                {/* Avatar */}
                <Image src="/avatar.png" alt="avatar" width={36} height={36} className="object-cover rounded-full" />
            </div>
        </header>
    )
}
