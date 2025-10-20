import { Suspense } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../shared/container/container";
import { ProductInfo } from "./components/productInfo/productInfo";
import { ProductImage } from "./components/productImage/productImage";
import { ProductStats } from "./components/productStats/productStats";
import { ProductReviews } from "./components/productReviews/productReviews.lazy";
import { useGetSingleProductQuery } from "../../../services/productsApi";
import { Spinner } from "../../reusable/spinner/spinner";
import "./productDetails.css";

const ProductNotFound = () => {
    return (<div>Product not found</div>)
}

export const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) return <ProductNotFound />

    const { data } = useGetSingleProductQuery(Number(id))

    return (
        <>
            {data ?
                <section className="product-details">
                    <Container>
                        <div className="product-details__wrapper">
                            <div className="product-details__top-block">
                                <ProductInfo data={data} />
                                <ProductImage data={data} />
                                <ProductStats data={data} />
                            </div>
                            <Suspense fallback={<Spinner />}>
                                <ProductReviews data={data} />
                            </Suspense>
                        </div>
                    </Container>
                </section> :
                <Spinner />}
        </>
    )
}