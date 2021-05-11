import React, { useMemo } from 'react';
import {} from 'src/api';
import { Loading } from 'src/shared/components';
import { useFetchPosts } from '..';
import { usePostContext } from '../Data/context/PostContext';

import Post from './components/Post';
import { PostWrapper } from './style';

const Posts = (): JSX.Element => {
	const { postItems, loading } = usePostContext();
	const { fetchStories } = useFetchPosts();

	useMemo(() => {
		fetchStories();
	}, [fetchStories]);

	return (
		<PostWrapper>
			<>
				{loading && <Loading />}
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
			</>
		</PostWrapper>
	);
};

export default Posts;
