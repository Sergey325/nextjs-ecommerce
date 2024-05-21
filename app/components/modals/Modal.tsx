"use client"

import React, {useCallback, useEffect, useRef, useState} from 'react';
import {IoMdClose} from "react-icons/io";
import Button from "@/app/components/Button";
import useClickOutside from "@/app/hooks/useClickOutside";

type Props = {
    isOpen?: boolean
    onClose: () => void
    onSubmit: () => void
    title?: string
    body?: React.ReactElement
    footer?: React.ReactElement
    actionLabel: string
    disabled?: boolean
    secondaryAction?: () => void
    secondaryActionLabel?: string
};

const Modal = ({
   isOpen,
   onClose,
   onSubmit,
   title,
   body,
   footer,
   actionLabel,
   disabled,
   secondaryAction,
   secondaryActionLabel
}: Props) => {
    const [showModal, setShowModal] = useState(isOpen)
    const modalRef = useRef(null)
    useClickOutside({ ref: modalRef, onClickOutside: () => handleClose() })

    useEffect(() => {
        setShowModal(isOpen)
    }, [isOpen])

    useEffect(() => {
        if (showModal) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [showModal]);

    const handleClose = useCallback(() => {
        if (disabled) return

        setShowModal(false)
        setTimeout(() => {
            onClose()
        }, 300)
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if(disabled)return

        onSubmit()
    }, [disabled, onSubmit])

    const handleSecondaryAction = useCallback(() => {
        if(disabled || !secondaryAction) return

        secondaryAction()
    }, [disabled, secondaryAction])

    if(!isOpen) return null

    return (
        <>
            <div
                className="
                    justify-center
                    items-center
                    flex
                    overflow-hidden
                    fixed
                    inset-0
                    z-50
                    outline-none
                    focus:outline-none
                    bg-neutral-800/70
                "
            >
                <div className="
                    relative
                    w-full md:w-4/6 lg:w-3/6 xl:w-2/5
                    my-6 mx-auto
                    h-full lg:h-auto md:h-auto
                    "
                     ref={modalRef}
                >
                    {/*  CONTENT  */}
                    <div  className={`
                        translate
                        duration-300
                        h-full
                        ${showModal ? "translate-y-0" : "translate-y-full"}
                        ${showModal ? "opacity-100" : "opacity-0"}
                       
                    `}>
                        <div className="
                            translate
                            h-full lg:h-auto md:h-auto
                            border-0
                            rounded-lg
                            shadow-lg
                            relative
                            flex flex-col
                            w-full
                            bg-slate-900
                            text-gray-400
                            outline-none focud:outline-none
                        ">

                            {/*  HEADER  */}
                            <div className="
                                flex items-center justify-center
                                p-6
                                rounded-t
                                relative
                                border-b-[1px]
                            ">
                                <div className="text-lg font-semibold">
                                    {title}
                                </div>
                                <button
                                    onClick={handleClose}
                                    className="p-1 border-0 hover:opacity-70 transition absolute right-9"
                                >
                                    <IoMdClose size={18}/>
                                </button>

                            </div>

                            {/*  BODY  */}
                            <div className="relative p-6 flex-auto">
                                {body}
                            </div>

                            {/*  FOOTER  */}
                            <div className="flex flex-col gap-2 p-6">
                                <div className="flex flex-row items-center gap-4 w-full">
                                    {secondaryActionLabel && (
                                        <Button
                                            label={secondaryActionLabel || ''}
                                            disabled={disabled}
                                            onClick={handleSecondaryAction}
                                            outline
                                        />
                                    )}
                                    <Button
                                        label={actionLabel}
                                        disabled={disabled}
                                        onClick={handleSubmit}
                                    />
                                </div>
                                {footer}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;