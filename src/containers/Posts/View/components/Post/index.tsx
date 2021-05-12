import React, { FC } from 'react';
import { PostItemType } from 'src/containers/Posts/Data/types';
import { truncateText } from 'src/utils/truncateText';
import Heading from '../Heading';
import SmallText from '../SmallText';
import Url from '../Url';
import { FlexWrapper, StyledPostWrapper } from './style';

const Post: FC<PostItemType> = ({
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
			<Url>({truncateText(url, 50)})</Url>
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
