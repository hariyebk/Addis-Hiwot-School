import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form"

interface Props {
    label: string,
    type?: string,
    register: any
    name: string,
    defaultValue?: string | Date ,
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined,
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

export default function InputField({label, type="text", register, name, defaultValue, error, inputProps} : Props){
    return (
        <div className="flex flex-col gap-4 w-full md:w-1/4">
            <label className="max-sm:text-sm sm:text-base text-gray-500"> {label} </label>
            <input type={type} defaultValue={defaultValue} {...register(name)} className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full focus-visible:outline-none" {...inputProps}/>
            {error?.message && <p className="text-xs text-red-500"> {error?.message.toString()} </p>}
        </div>
    )
}
