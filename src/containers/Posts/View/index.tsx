import React, { useCallback, useEffect, useMemo } from 'react';
import { fetchItem, getTopStories } from 'src/api';
import { usePostContext } from '../Data/context/PostContext';
import Post from './components/Post';
import { PostWrapper } from './style';

const Posts = (): JSX.Element => {
	const { postItems, setPostItems } = usePostContext();

	const fetchStories = useCallback(async () => {
		const items = await getTopStories();
		setPostItems(items);
	}, [setPostItems]);

	useMemo(() => {
		fetchStories();
	}, [fetchStories]);

	return (
		<PostWrapper>
			{postItems.map(
				({ by, descendants, id, kids, score, time, title, type, url }) => {
					return (
						<Post
							key={id}
							by={by}
							descendants={descendants}
							id={id}
							kids={kids}
							score={score}
							time={time}
							title={title}
							type={type}
							url={url}
						/>
					);
				}
			)}
		</PostWrapper>
	);
};

export default Posts;
