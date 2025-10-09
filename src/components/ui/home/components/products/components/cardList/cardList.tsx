import { ProductCard } from "./components/productCard/productCard";
import "./cardList.css";

export const CardList = () => {
    return (
        <ul className="card-list">
            <ProductCard />
        </ul>
    )
}