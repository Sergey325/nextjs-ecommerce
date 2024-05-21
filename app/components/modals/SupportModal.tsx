'use client'

import React, {useState} from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'
import Modal from "@/app/components/modals/Modal";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import toast from "react-hot-toast";
import useSupportModal from "@/app/hooks/useSupportModal";
import axios from "axios";
import DropDown from "@/app/components/DropDown/DropDown";

type Props = {
    currentUserEmail?: string | null
}

const SupportModal = ({currentUserEmail}: Props) => {
    const loginModal = useSupportModal();
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            topic: '',
            message: '',
            email: currentUserEmail || ""
        }
    })

    const topic = watch('topic')
    const message = watch('message')

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true,
        })
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if(!topic || !message) {
            toast.error("You didn't fill in all the blanks")
            return
        }

        setIsLoading(true)

        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/344aae01ca778a97e6ea92f5e4d5582a', data)
            .catch(error =>
            {
                console.error(error)
                toast.error(error)
            });

        toast.success("Sent, we'll get back to you by e-mail")
        reset()
        setIsLoading(false)
    }

    const options = [
        { value: "Account Access and Password Reset", label: "Account Access and Password Reset", onSelected: function() { setCustomValue("topic", this.value) }},
        { value: "Shipping and Delivery Assistance", label: "Shipping and Delivery Assistance", onSelected: function() { setCustomValue("topic", this.value) }},
        { value: "Report a Problem or Bug", label: "Report a Problem or Bug", onSelected: function() { setCustomValue("topic", this.value) }},
        { value: "Other Support or Assistance", label: "Other Support or Assistance", onSelected: function() { setCustomValue("topic", this.value) }},
    ]

    const bodyContent = (
        <div className="flex flex-col gap-4">

            <Heading
                title="Experiencing an issue?"
                subtitle="Describe it below, and our support team will assist you shortly"
                center
            />

            <hr className="border-slate-500"/>
            <DropDown
                placeholder="Choose the topic"
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
                childStyle={"bg-[#18212f] hover:bg-slate-700 text-md drop-shadow-xl z-20"}
                options={options}
            />

            <textarea
                id="description"
                disabled={isLoading}
                required
                value={message}
                className="
                    outline-0
                    p-4
                    font-light text-gray-300
                    bg-slate-800
                    border-2 border-slate-700 rounded-md
                    min-h-[200px] md:min-h-[100px] max-h-[350px]
                    overflow-y-auto
                "
                placeholder="Provide details about the issue you faced"
                onChange={e => setCustomValue('message', e.target.value)}
            />
            <hr className="border-slate-500"/>
            <Input
                id="email"
                label="Your email"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Support"
            actionLabel="Submit"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
};

export default SupportModal;