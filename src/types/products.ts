interface MetaType {
    createdAt: string,
    updatedAt: string,
    barcode: string,
    qrCode: string,
}

export interface ReviewType {
    comment: string,
    date: string,
    rating: number,
    reviewerEmail: string,
    reviewerName: string,
}

export interface ProductType {
    availabilityStatus: string,
    brand: string,
    category: string,
    description: string,
    dimensions:
    { width: 15.14, height: 13.08, depth: 22.99 }
    discountPercentage: number,
    id: number,
    images: Array<string>,
    meta: MetaType,
    minimumOrderQuantity: number,
    price: number,
    rating: number,
    returnPolicy: string,
    reviews: Array<ReviewType>,
    shippingInformation: string,
    sku: string,
    stock: number,
    tags: Array<string>
    thumbnail: string,
    title: string,
    warrantyInformation: string,
    weight: number,
}

export interface ProductsDataType {
    limit: number,
    products: Array<ProductType>,
    skip: number,
    total: number,
}

export interface ProductQueryParams {
    sortBy?: string,
    order?: 'asc' | 'desc',
    category?: string,
    search?: string
}