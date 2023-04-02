export interface IAccordeon extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    title: string;
    children?: React.ReactNode;
}
