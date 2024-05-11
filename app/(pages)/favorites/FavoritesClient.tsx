import {Product, User} from "@prisma/client";
import ProductCard from "@/app/(pages)/store/components/ProductCard";
import Container from "@/app/components/Container";
import Heading from "@/app/components/Heading";

type Props = {
    products: Product[]
    currentUser: User | null
};

const FavoritesClient = ({products, currentUser}: Props) => {
    return (
        <Container>
            <div className="px-5 md:px-20 mt-10 text-lg">
                <Heading
                    title="Favorites"
                    subtitle="List of products you have favorited!"
                />
                <div className="
                    mt-10
                    grid grid-cols-1
                    md:grid-cols-2
                    lg:grid-cols-3
                    xl:grid-cols-4
                    2xl:grid-cols-5
                    gap-8
                    "
                >
                    {products.map((product, index) => {
                        return (
                            <ProductCard
                                key={product.id + index}
                                data={product}
                                currentUser={currentUser}
                            />
                        )
                    })}
                </div>
            </div>

        </Container>

    )
};

export default FavoritesClient;