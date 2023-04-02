type sizeType = "weight" | "value";
export interface IProductItem {
    barcode: string | number;
    brand: string;
    description: string;
    manufacturer: string;
    price: number;
    size: number;
    sizeType: sizeType;
    title: string;
    url: string;
    care: Array<string>;
}


