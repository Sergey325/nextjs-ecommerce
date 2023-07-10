import getFavoriteProducts from "@/app/actions/getFavoriteProducts";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import getCurrentUser from "@/app/actions/getCurrentUser";
import FavoritesClient from "@/app/(pages)/favorites/FavoritesClient";

const Favorites = async () => {
    const favorites = await getFavoriteProducts()
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return (
            <ClientOnly>
                <EmptyState title={"Ooops"} subtitle={"You should be logged in to have favorites"}/>
            </ClientOnly>
        )
    }

    if(!favorites || favorites.length < 1){
        return (
            <ClientOnly>
                <EmptyState title={"There is nothing here"} subtitle={"Looks like you have no favorite products."}/>
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavoritesClient currentUser={currentUser} products={favorites}/>
        </ClientOnly>
    );
};

export default Favorites;