import {User} from "@prisma/client";
import useFavorite from "@/app/hooks/useFavorite";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";


type Props = {
    productId: string,
    currentUser?: User | null,
    size?: number
};

const HeartButton = ({productId, currentUser, size=28}: Props) => {
    const {hasFavorited, toggleFavorite} = useFavorite({productId, currentUser})

    return (
        <div
            onClick={toggleFavorite}
            className="
                relative
                hover:opacity-80
                transition
                cursor-pointer
            "
        >
            {
                !hasFavorited
                ?
                <MdFavoriteBorder
                    size={size}
                />
                :
                <MdFavorite
                    size={size}
                />
            }
        </div>
    );
};

export default HeartButton;