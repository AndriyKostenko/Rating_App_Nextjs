import styles from './Button.module.css';
import { ButtonProps } from "./Button.props";
import cn from "classnames";
import ButtonArrow from '../../public/arrow_button.svg';


export const Button = ({appearance, children, arrow = 'none', className, ...props} : ButtonProps): JSX.Element => {
  
	// use 'cn' from classnames library to conditionally apply classes
	return (
	<button className={cn(styles.button, className, {[styles.primary]: appearance == 'primary',[styles.ghost]: appearance == 'ghost'})} {...props}>
			{children}
			{arrow !== 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
				<ButtonArrow/>
			</span>}
	</button>
  );
};
