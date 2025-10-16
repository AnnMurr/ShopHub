import { ProductType } from "../../../../../../../types/products";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { ButtonComponent } from "../../../../../../reusable/button/button";
import { formatPrice } from "../../../../../../../utils/formatPrice";
import { useDispatch } from "react-redux";
import { addItem } from "../../../../../../../redux/cartSlice";
import "./productCard.css";

interface ProductCardProps {
    data: ProductType
}

export const ProductCard = ({ data }: ProductCardProps) => {
    const dispatch = useDispatch();

    const addProductToCart = () => dispatch(addItem(data));

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
                    <div>
                        <Rating sx={{ color: "#000" }} size="small" name="read-only" value={data.rating} readOnly />
                        <div className="card__price">
                            <span>{formatPrice(data.price)}</span>
                        </div>
                    </div>
                </div>
            </Link>
            <div>
                <ButtonComponent handleClick={addProductToCart} type="button" text="Buy" />
            </div>
        </li >
    )
}