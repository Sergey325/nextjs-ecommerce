import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import {redirect} from "next/navigation";
import ManageOrdersClient from "@/app/(pages)/admin/manageOrders/ManageOrdersClient";
import getOrders, {IOrdersParams} from "@/app/actions/getOrders";

type Props = {
    searchParams: IOrdersParams
}

const ManageOrders = async ({searchParams}: Props) => {
    const currentUser = await getCurrentUser()
    const orders = await getOrders(searchParams)

    if(!currentUser || currentUser?.role === "customer"){
        redirect("/")
    }

    return (
        <ClientOnly>
            <ManageOrdersClient orders={orders}/>
        </ClientOnly>
    );
};

export default ManageOrders;