import React, {useMemo, useState} from "react";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Input from "@/app/components/inputs/Input";
import DropDown from "@/app/components/DropDown/DropDown";
import CheckBox from "@/app/components/inputs/CheckBox";
import ImagesUpload from "@/app/(pages)/admin/manageProducts/components/ImagesUpload";
import {categories} from "@/app/(pages)/store/components/Categories";
import {toast} from "react-hot-toast";
import axios from "axios";
import Button from "@/app/components/Button";
import {Product} from "@prisma/client";
import {useRouter} from "next/navigation";

type Props = {
    product?: Product
    resetSelectedProduct: () => void;
}

const AddProduct = ({product = {
    id: "",
    title: "",
    description: "",
    manufacturer: "",
    price: 1,
    category: "",
    images: [],
    sale: 0,
    immediatelyAvailable: false,
    properties: []
}, resetSelectedProduct}: Props) => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        watch,
        setValue,
        reset
    } = useForm<FieldValues>({
        defaultValues: product
    })

    const category = watch('category')
    const description = watch('description')
    const immediatelyAvailable = watch('immediatelyAvailable')
    const images = watch('images')

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        });
    };

    const productProperties = useMemo(() => {
        if (!product?.properties.length) {
            const categoryProperties = categories.find(item => item.label === category)?.properties
            setCustomValue("properties", categoryProperties?.map(p => ({...p, value: ""})))
            return categoryProperties
        }
        return null
    }, [category])

    const options = [
        { value: "Processors", label: "Processors", onSelected: function() { setCustomValue("category", this.value)}},
        { value: "Motherboards", label: "Motherboards", onSelected: function() { setCustomValue("category", this.value) }},
        { value: "GPUs", label: "GPUs", onSelected: function() { setCustomValue("category", this.value) }},
        { value: "RAM", label: "RAM", onSelected: function() { setCustomValue("category", this.value) }},
        { value: "Hard Drives", label: "Hard Drives", onSelected: function() { setCustomValue("category", this.value) }},
        { value: "CPU Coolers", label: "CPU Coolers", onSelected: function() { setCustomValue("category", this.value) }},
        { value: "Cases", label: "Cases", onSelected: function() { setCustomValue("category", this.value) }},
        { value: "PSUs", label: "PSUs", onSelected: function() { setCustomValue("category", this.value) }},
    ]

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (!category){
            toast.error("Choose category")
            return
        }
        if (images.length < 1){
            toast.error("You haven't selected a single picture")
            return
        }
        if (productProperties && data.properties.length < productProperties.filter(property => property.title !== "description").length){
            toast.error("You haven't filled in all the properties")
            return
        }

        const editedData = {
            ...data,
            images: product?.images.length ? images : images.reverse(),
            price: parseFloat(data.price),
            sale: parseFloat(data.sale)
        };

        setIsLoading(true)

        axios.post("/api/products", editedData)
            .then(() => {
                toast.success(product?.id ? "Product updated!" : "Product created!")
                reset({
                    title: "",
                    description: "",
                    manufacturer: "",
                    price: 1,
                    category: "",
                    immediatelyAvailable: false,
                    images: [],
                    sale: 0,

                })
                resetSelectedProduct()
                router.refresh()
            })
            .catch(() => {
                toast.error("Something went wrong")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className="text-xl text-center md:text-3xl pt-4 px-5 text-gray-400">
            Product Creation
            <hr className="border-gray-700 w-full mt-2"/>
            <p className="text-base sm:text-lg text-left py-2">Basic information</p>
            <div className="flex flex-col gap-4 text-xs md:text-base xl:text-lg">
                <div className="flex gap-3 sm:gap-5 items-stretch">
                    <Input
                        id="title"
                        label='Title'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input
                        id="manufacturer"
                        label='Manufacturer'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                </div>
                <textarea
                    id="description"
                    disabled={isLoading}
                    required
                    value={description}
                    className="
                        w-full
                        outline-0
                        p-2
                        font-light text-gray-300
                        bg-slate-800
                        border-2 border-slate-700 rounded-md
                        max-h-[200px] min-h-[45px]
                        overflow-y-auto
                    "
                    placeholder="Write a product description (optional)"
                    onChange={e => setCustomValue('description', e.target.value)}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                    <DropDown
                        placeholder="Choose category"
                        mainStyles="
                            hover:shadow-none
                            min-w-[180px]
                            bg-slate-800
                            border-2 border-slate-700 rounded-md
                            text-gray-400
                            bg-slate-800
                            px-1
                            z-10
                        "
                        initialOption={options.find(option => option.value === category)}
                        childStyle={"bg-gray-900 hover:bg-gray-700 font-medium min-w-[150px] text-nowrap"}
                        options={options}
                    />
                    <Input
                        id="price"
                        label='Price'
                        type="number"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <Input
                        id="sale"
                        type="number"
                        label='Discount in %'
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <div className="my-auto text-base md:text-xl">
                        <CheckBox
                            label="Immediately available"
                            onChange={(isChecked) => setCustomValue("immediatelyAvailable", isChecked)}
                            colorOnChecked="text-gray-400"
                            initialValue={immediatelyAvailable}
                        />
                    </div>
                </div>
                <ImagesUpload onChange={value => setCustomValue('images', value)} value={images}/>
                <hr className="border-gray-700 w-full -mb-2"/>
                <p className="text-lg text-left ">Properties</p>
                {
                    <div className="flex gap-4 justify-center flex-wrap">
                        {(product.properties.length ? product.properties : productProperties)?.map((property: any, index) => (
                            property?.title !== "description" && (
                                <div key={property?.title} className="w-full sm:w-[48.5%]">
                                    <Input
                                        id={`properties.${index}.value`}
                                        label={property?.title}
                                        register={register}
                                        disabled={isLoading}
                                        type={property?.title.includes(" (mm)") || property?.title.includes(" (dB)") ? "number" : "text"}
                                        errors={errors}
                                        placeholder={property?.value.toString()}
                                        required
                                    />
                                </div>
                            )
                        ))}
                    </div>
                }
                <hr className="border-gray-700 w-full -mb-2"/>
                <p className="text-lg text-left ">Product page description</p>
                {
                    <div className="flex gap-4 justify-center flex-wrap">
                        {(product.properties.length ? product.properties : productProperties)?.map((property: any, index) => (
                            property?.title === "description" &&
                            <div key={property?.title + index} className="w-full sm:w-[48.5%]">
                                <Input
                                    id={`properties.${index}.value`}
                                    label={"Description"}
                                    register={register}
                                    disabled={isLoading}
                                    errors={errors}
                                    placeholder={property?.value.toString()}
                                    required
                                />
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div className="pt-5">
                <Button label={product?.id ? "Update product" : "Create product"} onClick={handleSubmit(onSubmit)} gradient/>
            </div>
        </div>
    );
};

export default AddProduct;