import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";


// extending button props to get other attribues inside of our component like 'form', 'value', etc
export interface ButtonProps  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,HTMLButtonElement>{
	children: ReactNode;
	appearance: 'primary' | 'ghost';
}