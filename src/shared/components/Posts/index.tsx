import React from 'react';
import Post from './components/Post';
import { PostWrapper } from './style';

const Posts = (): JSX.Element => {
	return (
		<PostWrapper>
			<Post />
		</PostWrapper>
	);
};

export default Posts;
