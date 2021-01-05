import React, { useState, useEffect } from "react";
import { makeDeferGetApiCall, miliSecToTime } from "../../../utils";
import Text from "../../atoms/Text";

const CommentCard = (props) => {
	const [comments, setComments] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const subscription = makeDeferGetApiCall(
			`${props.subUrl}/${props.id}.json`
		).subscribe((resp) => {
			setComments(resp);
			setLoading(false);
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [props, props.id, props.subUrl]);

	if (loading) {
		return <></>;
	}
	return comments && !comments.deleted ? (
		<div className={props.className}>
			<div>
				<Text label={`${comments.by} `} fontColor='gray' fontSize='sm' />
				<Text
					label={miliSecToTime(comments.time)}
					fontColor='gray'
					fontSize='sm'
				/>
			</div>
			<div>{comments.text}</div>
			<Text label='reply' fontColor='gray' fontSize='sm' />
			<br />
			<br />
			{Array.isArray(comments.kids) &&
				comments.kids.map((item, index) => (
					<CommentCard
						className='pad_left_20'
						key={index}
						subUrl={props.subUrl}
						id={item}
					/>
				))}
		</div>
	) : (
		<></>
	);
};

export default CommentCard;
