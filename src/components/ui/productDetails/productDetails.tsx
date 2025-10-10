import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Container } from "../../shared/container/container";
import { ProductType } from "../../../types/products";
import { ProductInfo } from "./components/productInfo/productInfo";
import { ProductImage } from "./components/productImage/productImage";
import { ProductStats } from "./components/productStats/productStats";
import { ProductReviews } from "./components/productReviews/productReviews";
import "./productDetails.css";

const ProductNotFound = () => {
    return (<div>Product not found</div>)
}

export const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();

    if (!id) return <ProductNotFound />

    const productData: ProductType | undefined = useSelector((state: RootState) =>
        state.products.products?.filter(item => item.id === +id)[0]);

    return (
        <>
            {productData &&
                <section className="product-details">
                    <Container>
                        <div className="product-details__wrapper">
                            <div className="product-details__top-block">
                                <ProductInfo data={productData} />
                                <ProductImage data={productData} />
                                <ProductStats data={productData} />
                            </div>
                            <ProductReviews data={productData} />
                        </div>
                    </Container>
                </section>}
        </>
    )
}