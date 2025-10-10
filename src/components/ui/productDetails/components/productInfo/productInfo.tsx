import { ProductType } from "../../../../../types/products";

interface ProductInfoProps {
    data: ProductType,
}

export const ProductInfo = ({ data }: ProductInfoProps) => {
    return (
        <div className="product-details__info">
            <div>
                <h2>{data.title}</h2>
            </div>
            <div className="product-details__description">
                <p>{data.description}</p>
            </div>
            <div className="product-details__qr">
                <img src={data.meta.qrCode} alt="qrCode" />
            </div>
        </div>
    )
}