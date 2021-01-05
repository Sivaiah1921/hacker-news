import React from "react";
import "./style.scss";

import NewsCard from "../../molecules/NewsCard";
import CommentCard from "../../molecules/CommentCard";

const CommentsContainer = (props) => {
	return (
		<div className='comments-container-wrapper'>
			<NewsCard subUrl={`${props.subUrl}/${props.commentsArray.id}.json`} />
			<textarea name='text' rows={6} cols={60}></textarea>
			<br />
			<input type='submit' value='Add comment' style={{ margin: "1px" }} />
			<div style={{ height: 10 }} />

			{Array.isArray(props.commentsArray.kids) &&
				props.commentsArray.kids.map((item, key) => (
					<CommentCard key={key} id={item} subUrl={props.subUrl} />
				))}
			<div style={{ height: 10 }} />
		</div>
	);
};
export default CommentsContainer;
