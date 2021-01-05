import React, { useState, useEffect } from "react";
import CommentsContainer from "../components/organisms/CommentsContainer";
import { useLocation } from "react-router-dom";
import { ITEM_BASE_URL, makeDeferGetApiCall } from "../../src/utils";

/**
 * render The Comments component
 */
const Comments = () => {
	const [loading, setLoading] = useState(true);
	const [commentsIds, setCommentsIdArray] = useState();
	const location = useLocation();
	const storyId = Number(new URLSearchParams(location.search).get("id"));

	useEffect(() => {
		const subscription = makeDeferGetApiCall(
			`${ITEM_BASE_URL}/${storyId}.json`
		).subscribe((resp) => {
			setCommentsIdArray(resp); //will get teh detail of that story
			setLoading(false);
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [storyId]);

	return (
		<>
			{!loading && commentsIds && (
				<CommentsContainer subUrl={ITEM_BASE_URL} commentsArray={commentsIds} />
			)}
		</>
	);
};

export default Comments;
