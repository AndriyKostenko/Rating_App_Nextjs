import { ParagraphTagProps } from "../interfaces/ParagraphTag.props";
import cn from "classnames";
import styles from "../styles/ParagraphTag.module.css"

export const ParagraphTag = ({ size, children, className, ...props }: ParagraphTagProps): JSX.Element => {
  return (
	<p  className={cn(styles.p, className, {
		[styles.small]: size == 'small',
		[styles.medium]: size == 'medium',
		[styles.large]: size == 'large',
		})} {...props}>
			{children}
	</p>
  );
};

export default ParagraphTag;