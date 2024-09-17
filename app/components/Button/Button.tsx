import styles from './Button.module.css';
import { ButtonProps } from "./Button.props";
import cn from "classnames";

export const Button = ({appearance, children, className, ...props} : ButtonProps): JSX.Element => {
  
	// use cn from classnames library to conditionally apply classes
	return (
	<button className={cn(styles.button, className, {
		[styles.primary]: appearance == 'primary',
		[styles.ghost]: appearance == 'ghost'})}
		{...props}
		>
			{children}
	</button>
  );
};
