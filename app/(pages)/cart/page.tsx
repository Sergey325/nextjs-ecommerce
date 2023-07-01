import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import CartClient from "@/app/(pages)/cart/CartClient";

const CartPage = async () => {
    const currentUser = await getCurrentUser()

    if(!currentUser){
        return (
            <ClientOnly>
                <EmptyState title={"Ooops"} subtitle={"You should be logged in to have a cart"}/>
            </ClientOnly>
        )
    }

    if(currentUser.cart.length < 1){
        return (
            <ClientOnly>
                <EmptyState title={"There is nothing here"} subtitle={"You have not added any items to your cart yet"}/>
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <CartClient currentUser={currentUser}/>
        </ClientOnly>
    );
};

export default CartPage;