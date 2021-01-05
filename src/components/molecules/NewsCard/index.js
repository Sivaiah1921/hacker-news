import React, { useState, useEffect } from "react";
import {
	getDomainName,
	miliSecToTime,
	makeDeferGetApiCall,
} from "../../../utils";

import Text from "../../atoms/Text";
import Link from "../../atoms/Link";
import NavigationLink from "../NavigationLink";

const NewsCard = ({ subUrl, index, type = "news" }) => {
	const [news, setNews] = useState();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const subscription = makeDeferGetApiCall(subUrl).subscribe((resp) => {
			setNews(resp);
			setLoading(false);
		});

		return () => {
			subscription.unsubscribe();
		};
	}, [subUrl]);

	if (loading) {
		return <></>;
	}

	return news ? (
		<table>
			<tbody>
				<tr>
					<td align='right'>
						{index && <Text label={`${index}.`} fontColor='gray' />}
					</td>
					<td>
						<Link
							rel='noopener noreferrer'
							target='_blank'
							href={news.url || ""}
							label={news.title}
						/>
						{news.url && (
							<Text
								fontColor='gray'
								fontSize='sm'
								label={` (${getDomainName(news.url)})`}
							/>
						)}
					</td>
				</tr>
				<tr>
					<td></td>
					<td>
						{(type === "news" || type === "newest") && (
							<Text
								fontSize='xs'
								fontColor='gray'
								label={`${news.score} Points by ${news.by}`}
							/>
						)}
						<Text
							fontSize='xs'
							fontColor='gray'
							label={` ${miliSecToTime(news.time || 0)}`}
						/>
						{type === "news" && (
							<>
								<Text fontSize='xs' fontColor='gray' label={` | hide | `} />
								<NavigationLink
									fontSize='xs'
									fontColor='gray'
									link={`/item?id=${news.id}`}
									label={`${news.kids ? news.kids.length : 0} comments`}
								/>
							</>
						)}
						{type === "newest" && (
							<Text
								fontSize='xs'
								fontColor='gray'
								label={` | hide | past | discuss`}
							/>
						)}
					</td>
				</tr>
				<tr style={{ height: 5 }}></tr>
			</tbody>
		</table>
	) : (
		<></>
	);
};

export default NewsCard;
