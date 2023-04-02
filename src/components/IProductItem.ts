export interface IProductItem {
    url: string;
    title: string;
    sizeType: "weight" | "value";
    size: number;
    barcode: string | number;
    manufacturer: string;
    brand: string;
    description: string;
    price: number;
}

