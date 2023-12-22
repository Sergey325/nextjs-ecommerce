import {useEffect} from "react";

type Props = {
    ref: React.MutableRefObject<HTMLDivElement | null>,
    onClickOutside: () => void,
}

const useClickOutside = ({ref, onClickOutside}: Props) => {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside]);
}

export default useClickOutside;