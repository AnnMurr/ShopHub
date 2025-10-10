import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import { ProductType } from "../../../../../types/products";

interface ProductStatsProps {
    data: ProductType,
}

export const ProductStats = ({ data }: ProductStatsProps) => {
    return (
        <div className="product-details__stats">
            <div className="product-details__price">
                <span>{data.price}</span>
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
            <Button
                sx={{
                    mt: "70px",
                    backgroundColor: '#000',
                    color: '#fff',
                    '&:hover': {
                        backgroundColor: '#333',
                    },
                }} type="button" variant="contained" fullWidth disableElevation>
                Buy
            </Button>
        </div>
    )
}