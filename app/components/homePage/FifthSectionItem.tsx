"use client"

import React, { useState, useEffect, useRef } from "react";

type Props = {
    src_gray: string;
    src_purple: string;
    lastOne?: boolean;
};

interface Position {
    x: number;
    y: number;
}

const FifthSectionItem = ({ src_gray, src_purple, lastOne }: Props) => {
    const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
    const divRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        console.log("eventWorking")
        const parentRect = divRef.current?.getBoundingClientRect();
        if (parentRect) {
            const offsetX = e.clientX - parentRect.left;
            const offsetY = e.clientY - parentRect.top;
            setPosition({ x: offsetX / 5, y: offsetY / 4 });
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                // @ts-ignore
                divRef?.current?.addEventListener("mousemove", handleMouseMove);
            } else {
                // @ts-ignore
                divRef?.current?.removeEventListener("mousemove", handleMouseMove);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            // @ts-ignore
            divRef?.current?.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div
            ref={divRef}
            className={`group relative flex justify-center items-center ${
                lastOne ? "py-6" : "py-10"
            } xl:py-15 2xl:py-20`}
        >
            <img
                src={src_gray}
                alt="Section5"
                className={`absolute ${
                    lastOne ? "w-[20%] md:w-[40%]" : "w-[40%]"
                } group-hover:opacity-30`}
            />
            <img
                src={src_purple}
                alt="Section5"
                className={`hidden lg:block ${
                    lastOne ? "w-[20%] md:w-[40%]" : "w-[40%]"
                } opacity-0 z-50 transition-transform absolute group-hover:opacity-100 translate-x-[50%] lg:translate-y-[20%] xl:translate-y-[10%] 2xl:translate-y-[30%] 3xl:translate-y-[10%]`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                }}
            />
        </div>
    );
};

export default FifthSectionItem;