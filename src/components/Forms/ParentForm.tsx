"use client"

import * as z from "zod"
import {useForm} from "react-hook-form"
import {zodResolver} from "@hookform/resolvers/zod"
import InputField from "../InputField"
import Image from "next/image"

interface Props {
    type: "create" | "update" | "delete",
    data?: {
        username: string,
        email: string,
        password: string,
        firstName: string,
        lastName: string,
        phone: string,
        address: string,
        bloodType: string,
        birthday: Date,
        sex: "male" | "female",
        img: File
    }
}

const schema = z.object({
    username: z.string().min(3, { message: 'Username must be at least 3 characters' }).max(20, {message: "Username must be less than 20 characters"}),
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(5, {message: "Password must be al least 5 characters long."}),
    firstName: z.string().min(1, {message: "First name is required!"}),
    lastName: z.string().min(1, {message: "Last name is required!"}),
    phone: z.string().min(1, {message: "Phone is required!"}),
    address: z.string().min(1, {message: "Address is required!"}),
    bloodType: z.string().min(1, {message: "Blood type is required!"}),
    birthday: z.date({message: "Birthday is required!"}),
    sex: z.enum(["male", "female"], {message: "Sex is required"}),
    img: z.instanceof(File, {message: "Image is required"})
});

export default function ParentForm({type, data} : Props){
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: zodResolver(schema)
    })

    const onSubmit = handleSubmit(data => {
        console.log(data)
    })

    return (
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <h1 className="text-xl font-semibold"> {type === "create" ? "Create a new Parent" : "Update Parent"} </h1>
            <span className="text-xs text-gray-400 font-medium">  Authentication Infromation </span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputField label="Username" register={register} name="username" defaultValue={data?.username} error={errors.username} />
                <InputField label="Email" type="email" register={register} name="email" defaultValue={data?.email} error={errors.email} />
                <InputField label="Password" type="password" register={register} name="password" defaultValue={data?.password} error={errors.password} />
            </div>
            <span className="text-xs text-gray-400 font-medium"> Prsonal Infromation </span>
            <div className="flex justify-between flex-wrap gap-4">
                <InputField label="First Name" register={register} name="firstName" defaultValue={data?.firstName} error={errors.firstName} />
                <InputField label="Last Name" register={register} name="lastName" defaultValue={data?.lastName} error={errors.lastName} />
                <InputField label="Phone" register={register} name="phone" defaultValue={data?.phone} error={errors.phone} />
                <InputField label="Address" register={register} name="address" defaultValue={data?.address} error={errors.address} />
                <InputField label="Blood Type" register={register} name="bloodType" defaultValue={data?.bloodType} error={errors.bloodType} />
                <InputField label="Birthday" type="date" register={register} name="birthday" defaultValue={data?.birthday} error={errors.birthday} />
                {/* SEX */}
                <div className="flex flex-col gap-4 w-full md:w-1/4">
                    <label className="max-sm:text-sm sm:text-base text-gray-500"> Sex </label>
                    <select className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full focus-visible:outline-none" {...register("sex")} defaultValue={data?.sex}>
                        <option value="male1"> Male </option>
                        <option value="female"> Female </option>
                    </select>
                    {errors.sex?.message && <p className="text-xs text-red-500"> {errors.sex?.message.toString()} </p>}
                </div>
                {/* FILE UPLOAD */}
                <div className="flex flex-col gap-4 w-full md:w-1/4 justify-center">
                    <label htmlFor="img" className="max-sm:text-sm sm:text-base text-gray-500 flex items-center gap-2 cursor-pointer"> 
                        <Image src="/upload.png" alt="upload-icon" width={28} height={28} className="object-cover" />
                        <span> Upload a photo</span>
                    </label>
                    <input type="file" id="img" {...register("img")} className="hidden" />
                    {errors.file?.message && <p className="text-xs text-red-500"> {errors.file?.message.toString()} </p>}
                </div>
            </div>
            <button type="submit" className="bg-blue-400 text-white p-2 rounded-md flex items-center justify-center"> {type === "create" ? "Create" : "Update" } </button>
        </form>
    )
}
