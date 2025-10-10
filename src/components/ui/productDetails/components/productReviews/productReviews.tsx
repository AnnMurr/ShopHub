import { ProductType } from "../../../../../types/products";
import { CommentBlock } from "./components/commentBlock/commentBlock";

interface ProductReviewsProps {
    data: ProductType,
}

export const ProductReviews = ({ data }: ProductReviewsProps) => {
    return (
        <div className="product-details__commets">
            <div className="product-details__commets-title">
                <h2>{data.title} reviews</h2>
            </div>
            {data.reviews.map((info, i) => (
                <CommentBlock key={i} data={info} />
            ))}
        </div>
    )
}