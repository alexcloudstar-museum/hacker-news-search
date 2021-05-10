import React, { FC } from 'react';
import { PostItem } from 'src/containers/Posts/Data/types';
import Heading from '../Heading';
import SmallText from '../SmallText';
import Url from '../Url';
import { FlexWrapper, StyledPostWrapper } from './style';

const Post: FC<PostItem> = ({
	title,
	url,
	score,
	by,
	time,
	kids
}): JSX.Element => (
	<StyledPostWrapper>
		<FlexWrapper>
			<Heading>{title}</Heading>
			<Url>({url})</Url>
		</FlexWrapper>
		<FlexWrapper>
			<SmallText>{score} points</SmallText>
			<SmallText>{by}</SmallText>
			<SmallText>{time}</SmallText>
			<SmallText>{kids?.length} comments</SmallText>
		</FlexWrapper>
	</StyledPostWrapper>
);

export default Post;
