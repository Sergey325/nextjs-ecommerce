"use client"

import {useRouter} from "next/navigation";
import Heading from "@/app/components/Heading";
import Button from "@/app/components/Button";

type Props = {
    title?: string
    subtitle?: string
    showReset?: boolean
};

const EmptyState = ({
    title = "No exact matches",
    subtitle = "Try changing or removing some of your filters",
    showReset
}: Props) => {
    const router = useRouter()

    return (
        <div
            className="
                h-[60vh]
                flex flex-col
                justify-center items-center
                gap-2

            "
        >
            <Heading
                center
                title={title}
                subtitle={subtitle}
            />
            <div className="w-48 mt-4">
                {showReset && (
                    <Button
                        outline
                        label="Remove all filters"
                        onClick={() => router.push('/')}
                    />
                )}
            </div>
        </div>
    );
};

export default EmptyState;