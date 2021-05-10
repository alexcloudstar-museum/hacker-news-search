import React from 'react';
import Heading from '../Heading';
import SmallText from '../SmallText';
import Url from '../Url';
import { PostHeading, StyledPostWrapper } from './style';

const Post = (): JSX.Element => (
	<StyledPostWrapper>
		<PostHeading>
			<Heading />
			<Url />
		</PostHeading>
		<SmallText />
	</StyledPostWrapper>
);

export default Post;
