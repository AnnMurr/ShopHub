import Rating from "@mui/material/Rating";
import { ProductType } from "../../../../../types/products";
import { ButtonComponent } from "../../../../reusable/button/button";
import { formatPrice } from "../../../../../utils/formatPrice";

interface ProductStatsProps {
    data: ProductType,
}

export const ProductStats = ({ data }: ProductStatsProps) => {
    return (
        <div className="product-details__stats">
            <div className="product-details__price">
                <span>{formatPrice(data.price)}</span>
            </div>
            <div className="product-details__rating">
                <div className="product-details__rating-text">
                    <span>
                        Rating
                    </span>
                </div>
                <Rating
                    sx={{
                        color: "#000"
                    }}
                    size="small"
                    name="half-rating"
                    defaultValue={data.rating}
                    precision={0.5} />
            </div>
            <div className="product-details__reviews-quantity">
                <span>{data.reviews.length} reviews</span>
            </div>
            <div className="product-details__button">
                <ButtonComponent type="button" text="Buy" />
            </div>
        </div>
    )
}