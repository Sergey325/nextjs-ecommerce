'use client'

import axios from 'axios'
import {AiFillGithub} from "react-icons/ai";
import {FcGoogle} from "react-icons/fc";
import {useCallback, useState} from "react";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "@/app/components/modals/Modal";
import Heading from "@/app/components/Heading";
import Input from "@/app/components/inputs/Input";
import toast from "react-hot-toast";
import Button from "@/app/components/Button";
import {signIn} from "next-auth/react";
import useLoginModal from "@/app/hooks/useLoginModal";
import {useRouter} from "next/navigation";

const RegisterModal = () => {
    const router = useRouter()
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: ""
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)

        axios.post('/api/register', data)
            .then(() => {
                toast.success("Account created!")
                signIn('credentials',{
                    ...data,
                    redirect: false,
                })
                    .then((callback) => {

                        if(callback?.ok) {
                            toast.success("Logged in")
                            router.refresh()
                        }

                        if(callback?.error){
                            toast.error(callback.error)
                        }
                    })
                registerModal.onClose()
            })
            .catch(() => {
                toast.error("Something went wrong.")
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const toggle = useCallback(() => {
        registerModal.onClose()
        loginModal.onOpen()
    }, [registerModal, loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Welcome to Pc Store"
                subtitle="Create an account"
                center={true}
            />
            <Input
                id="email"
                label='Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="name"
                label='Name'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id="password"
                type="password"
                label='Password'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />
            <Button
                outline
                label="Continue with Github"
                icon={AiFillGithub}
                onClick={() => signIn('github')}
            />
            <div className="text-gray-400 text-center mt-4 font-light">
                <div className="justify-center flex flex-row items-center gap-2">
                    <div>
                        Already have an account?
                    </div>
                    <div
                        onClick={toggle}
                        className="text-gray-300 cursor-pointer hover:underline"
                    >
                        Log in
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <Modal
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Register"
            actionLabel="Continue"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default RegisterModal;