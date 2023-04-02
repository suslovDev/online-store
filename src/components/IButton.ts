import { ReactNode } from "react";

export interface IButton {
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    type?: "submit" | 'button';
    variant?: "standart" | "buy" | "buy-large" | "download" | "remove" | "catalog " | "search";
    children?: ReactNode;
}

;