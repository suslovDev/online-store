import { ReactNode } from "react";

export interface IButton {
    onClick: React.MouseEventHandler<HTMLButtonElement>
    variant?: "standart" | "buy" | "download" | "remove" | "catalog " | "search";
    children?: ReactNode;
}

;