"use client";

import { RatingProps } from "../interfaces/Rating.props";
import cn from "classnames";
import styles from "../styles/Rating.module.css";
import { useEffect, useState, KeyboardEvent } from "react";
import StarIcon from "../public/star.svg";


export const Rating = ({isEditable = false, rating, setRating, ...props}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
	
	useEffect(() => {
		constructRating(rating);
	}, [rating]);

	
	// function to construct the rating
	const constructRating = (currentRating: number) => {
		// mapping through the array and applying the styles to according to the current index of element but not more than the current rating
		const updatedArray = ratingArray.map((r: JSX.Element, index: number) => {
			return (
				<span className={cn(styles.star, {
						[styles.filled]: index < currentRating,
						[styles.editable]: isEditable})}
						onMouseEnter={() => changeDisplay(index + 1)}
						onMouseLeave={() => changeDisplay(rating)}
						onClick={() => onClick(index + 1)}>  
						<StarIcon 
							tabIndex={isEditable ? 0 : -1}
							onKeyDown={(event: KeyboardEvent<SVGElement>) => isEditable && handleSpace(index + 1, event)}
						/>
				</span>
			)
		});
		setRatingArray(updatedArray); 
	}

	// function to change the display of the rating on hover
	const changeDisplay = (index: number) => {
		if (!isEditable) {
			return;
		}
		constructRating(index);

	}

	// function to set the rating on click
	const onClick = (index: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(index);
	}

	// function to handle the space key press event
	const handleSpace = (index: number, event: KeyboardEvent<SVGElement>) => {
		if (event.code != 'Enter' || !setRating) {
			return;
		}
		setRating(index);
	}

	return (
		<div {...props}>
			{ratingArray.map((rating, index) => (<span key={index}>{rating}</span>))}
		</div>
  );
};

export default Rating;