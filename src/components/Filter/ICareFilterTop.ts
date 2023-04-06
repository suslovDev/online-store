type IItem = {
    id: number;
    heading: string;
    links: Array<string>;
}
export interface ICareFilterTop {
    selected: number | null;
    list: IItem[];
    onSelect: (id: number) => void;
}
