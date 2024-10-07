import { menuItems } from "@/constants/index"
import { role } from "@/lib/data"
import Image from "next/image"
import Link from "next/link"

export default function Menu() {
    return (
        <nav className="mt-3 pt-3 pb-4 lg:pl-2">
            {menuItems.map((element) => {
                return (
                    <div key={element.title}>
                        <span className="hidden lg:block text-gray-400 font-light my-4 pl-3"> {element.title} </span>
                        {element.items.map((item, index) => {
                            if(item.visible.includes(role)){
                                return (
                                    <Link href={item.href} key={index} className="flex items-center max-lg:justify-center lg:justify-start gap-4 text-gray-500 py-2 pl-4 rounded-md hover:bg-lightSky">
                                        <Image src={item.icon} alt="" width={20} height={20} className="object-cover"/>
                                        <span className="hidden lg:block truncate"> {item.label} </span>
                                    </Link>
                                )
                            }
                        })}
                    </div>
                )
            })}
        </nav>
    )
}
