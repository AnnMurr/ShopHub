import Button from "@mui/material/Button";
import "./productCard.css";

export const ProductCard = () => {
    return (
        <li className="card">
            <div className="card__image-wrap">
                <img className="card__image" src="https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/1.webp" alt="laptop" />
            </div>
            <div className="card__details">
                <div className="card__title">
                    <h5>Title</h5>
                </div>
                <div className="card__price">
                    <span>price</span>
                </div>
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
            </div>
        </li>
    )
}