import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import OrdersClient from "@/app/(pages)/orders/OrdersClient";
import getOrdersByCurrentUser from "@/app/actions/getOrdersByCurrentUser";

type Props = {

};

const Orders = async (props: Props) => {
    const currentUser = await getCurrentUser()
    const orders = await getOrdersByCurrentUser()

    if(!currentUser){
        return (
            <ClientOnly>
                <EmptyState title={"Ooops"} subtitle={"You should be logged in to see orders"}/>
            </ClientOnly>
        )
    }

    if(!orders || orders.length < 1){
        return (
            <ClientOnly>
                <EmptyState title={"There is nothing here"} subtitle={"You don't have any orders yet"}/>
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <OrdersClient orders={orders}/>
        </ClientOnly>
    );
};

export default Orders;