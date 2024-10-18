"use client"

import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"

interface Props {
    type: "create" | "update",
    data?: any
}

const schema = z.object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters' }).max(20, {message: "Username must be less than 20 characters"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(5, {message: "Password must be al least 5 characters long."}),
    firstName: z.string().min(1, {message: "First name is required!"}),
    lastName: z.string().min(1, {message: "Last name is required!"}),
    phone: z.string().min(1, {message: "Phone is required!"}),
    address: z.string().min(1, {message: "Address is required!"}),
    birthday: z.date({message: "Birthday is required!"}),
    sex: z.enum(["male", "female"], {message: "Sex is required"}),
    img: z.instanceof(File, {message: "Image is required"})
});

export default function TeacherForm({type, data} : Props){
    const {register, handleSubmit} = useForm({
        resolver: zodResolver(schema)
    })
    return (
        <form className="flex flex-col gap-6">
            <h1 className="text-xl font-semibold"> Create a new Teacher </h1>
            <span className="text-xs text-gray-400 font-medium">  Authentication Infromation </span>
            <input type="text" {...register("username")} className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm" />
            <span className="text-xs text-gray-400 font-medium"> Prsonal Infromation </span>
        </form>
    )
}
