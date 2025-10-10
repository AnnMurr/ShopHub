import Button from "@mui/material/Button";
import "./productCard.css";
import { ProductType } from "../../../../../../../../../types/products";
import { Link } from "react-router-dom";

interface ProductCardProps {
    data: ProductType
}

export const ProductCard = ({ data }: ProductCardProps) => {
    return (
        <li className="card">
            <Link className="card__link" to={`/product/${data.id}`}>
                <div className="card__image-wrap">
                    <img className="card__image" src={data.images[0]} alt={data.title} />
                </div>
                <div className="card__details">
                    <div className="card__title">
                        <h5>{data.title}</h5>
                    </div>
                    <div className="card__price">
                        <span>{data.price}</span>
                    </div>
                </div>
            </Link>
            <div>
                <Button
                    sx={{
                        backgroundColor: '#000',
                        color: '#fff',
                        '&:hover': {
                            backgroundColor: '#333',
                        },
                    }} type="button" variant="contained" fullWidth disableElevation>
                    Buy
                </Button>
            </div>
        </li >
    )
}