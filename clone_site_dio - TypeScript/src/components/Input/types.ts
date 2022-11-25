export interface IInput extends React.InputHTMLAttributes<HTMLInputElement>{
    leftIcon ?: React.ReactNode;
    name ?: string; 
    placeholder ?: string;
    type ?: string;
}