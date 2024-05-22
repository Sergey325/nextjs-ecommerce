"use client"

import {CldUploadWidget} from "next-cloudinary";
import Image from "next/image"
import {useCallback} from "react";
import toast from "react-hot-toast";
import {TbPhotoPlus} from "react-icons/tb";
import {IoMdClose} from "react-icons/io";

declare global {
    var cloudinary: any
}

const uploadPreset = "zdiv9oua"

type Props = {
    onChange: (value: Array<string>) => void
    value: Array<string>
};

const ImagesUpload = ({onChange, value}: Props) => {
    const handleUpload = useCallback((result: any) => {
        if (value.length > 9) {
            toast.error("You can't upload more than 10 images")
            return
        }
        onChange([...value, result.info.secure_url])
    }, [onChange])

    const handleDelete = useCallback((imageUrl: string) => {
        onChange(value.filter((i) => i !== imageUrl))
    }, [onChange])

    return (
        <div>
            <CldUploadWidget
                onUpload={handleUpload}
                uploadPreset={uploadPreset}
                options={{
                    maxFiles: 10,
                    resourceType: "image",
                    maxFileSize: 5500000,
                    multiple: true,
                    folder: "EcommerceNew"
                }}
            >
                {({open}) => {
                    return (
                        <>
                            <div
                                onClick={() => open?.()}
                                className="
                                relative
                                cursor-pointer
                                hover:opacity-70
                                transition
                                border-dashed border-2 border-slate-500
                                py-5 md:py-10
                                flex flex-col
                                justify-center items-center
                                gap-4
                                text-slate-500
                            "
                            >
                                <TbPhotoPlus className="size-[25px] md:size-[50px]"/>
                                <div className="font-semibold text-sm md:text-lg">
                                    Click to upload images
                                </div>
                            </div>
                            {value.length > 0 && (
                                <div className="flex flex-wrap gap-2 w-full h-full pt-4">
                                    {
                                        value.map(image => (
                                            <div key={image}
                                                 className="relative rounded-lg overflow-hidden border-slate-500 border-2">
                                                <Image
                                                    alt="Upload"
                                                    height={100} width={100} className="size-[80px] md:size-[100px] "
                                                    src={image}
                                                />
                                                <IoMdClose
                                                    className="absolute top-0 right-0 text-gray-400 hover:text-gray-500 bg-slate-800 transition cursor-pointer"
                                                    size={20}
                                                    onClick={() => handleDelete(image)}
                                                />
                                            </div>

                                        ))
                                    }
                                </div>
                            )}
                        </>
                    )
                }}
            </CldUploadWidget>
        </div>
    )
};

export default ImagesUpload;