import { useState } from "react";
import { ProductCard } from "./components/productCard/productCard";
import { useGetProductsQuery } from "../../../../../../../services/productsApi";
import { PaginationBar } from "./components/pagination/pagination";
import { Spinner } from "../../../../../../reusable/spinner/spinner";
import "./cardList.css";

export const CardList = () => {
    const { data, isLoading, isError } = useGetProductsQuery();
    const [currentPage, setCurrentPage] = useState<number>(1);

    if (isLoading) return <Spinner />;
    if (isError) return <p>Failed to load products</p>;
    if (!data?.products?.length) return <p>No products found</p>;
    
    const pageSize = 12;
    const pageCount = Math.ceil(data.products.length / pageSize);

    const lastIndex = currentPage * pageSize;
    const firstIndex = lastIndex - pageSize;
    const pageProducts = data.products.slice(firstIndex, lastIndex);

    const handlePageChange = (e: React.ChangeEvent<unknown>, page: number): void => {
        setCurrentPage(page);
    }

    return (
        <>
            <ul className="card-list">
                {pageProducts?.map((item) => (
                    <ProductCard key={item.id} data={item} />
                ))}
            </ul>
            <PaginationBar
                handlePageChange={handlePageChange}
                count={pageCount}
                currentPage={currentPage} />
        </>
    )
}