import Image from "next/image"

interface Props {
    type?: string
}

export default function UserCard({type} : Props) {
    return (
        <div className="rounded-2xl odd:bg-purple even:bg-yellow p-4 flex-1 min-w-[130px]">
            <div className="flex items-center justify-between">
                <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-600"> 2024/16 </span>
                <Image src="/more.png" alt="three-dots" width={20} height={20} className="object-cover" />
            </div>
            <h2 className="text-2xl font-semibold my-4"> 1234 </h2>
            <h2 className="capitalize text-sm font-medium text-gray-500"> {type}s </h2>
        </div>
    )
}
