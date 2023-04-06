export interface ICarelist {
    selected: number | null;
    id: number;
    title: string;
    children: React.ReactNode;
}