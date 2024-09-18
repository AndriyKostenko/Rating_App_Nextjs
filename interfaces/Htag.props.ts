import { ReactNode } from 'react';


// making a type for the HtagProps
export interface HtagProps {
	tag: 'h1' | 'h2' | 'h3';
	children: ReactNode;
}