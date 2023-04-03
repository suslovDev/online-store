export interface IPrice {
    value: number;
    currency: "KZT" | "RUB";
    type?: "standart" | "small" | "large";
}