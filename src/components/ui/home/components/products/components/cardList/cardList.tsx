import { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { ProductCard } from "./components/productCard/productCard";
import { useGetProductsQuery } from "../../../../../../../services/productsApi";
import { AppDispatch } from "../../../../../../../redux/store";
import { setProducts } from "../../../../../../../redux/productsSlice";
import "./cardList.css";

export const CardList = () => {
    const { data, isLoading } = useGetProductsQuery();
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        data?.products && dispatch(setProducts(data.products))
    }, [data]);

    return (
        <ul className="card-list">
            {data?.products.map((item) => (
                <ProductCard key={item.id} data={item} />
            ))}
        </ul>
    )
}