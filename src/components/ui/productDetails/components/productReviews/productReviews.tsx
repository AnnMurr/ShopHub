import { ProductType } from "../../../../../types/products";
import { CommentBlock } from "./components/commentBlock/commentBlock";

interface ProductReviewsProps {
    data: ProductType,
}

const ProductReviews = ({ data }: ProductReviewsProps) => {
    return (
        <div className="product-details__comments">
            <div className="product-details__comments-title">
                <h2>{data.title} reviews</h2>
            </div>
            {data.reviews.map((info, i) => (
                <CommentBlock key={i} data={info} />
            ))}
        </div>
    )
}

export default ProductReviews;