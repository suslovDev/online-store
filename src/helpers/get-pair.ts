import { IProductItem } from "../components/Product/IProductItem";
export type TItem = {
    manufacturer: string,
    count: number
};

export const getPair = (products: IProductItem[]): TItem[] => {
    const transformed: Array<TItem> = [];
    products.map(product => {
        let inTransformed = transformed.find(item => item.manufacturer === product.manufacturer);
        if (inTransformed) {
            inTransformed.count++;
        } else {
            transformed.push({ manufacturer: product.manufacturer, count: 1 })
        }
        return transformed;
    });
    return transformed;
}