import React, { useState } from 'react';
import { Posts } from 'src/containers';
import { PostContext } from 'src/containers/Posts/Data/context/PostContext';
import { PostItem } from 'src/containers/Posts/Data/types';
import { BodyContentWrapper } from './style';

const BodyContent = (): JSX.Element => {
	const [postItems, setPostItems] = useState<PostItem[]>([
		{
			by: 'John Doe',
			descendants: 0,
			id: 1,
			kids: [0, 1, 2],
			score: 0,
			time: 0,
			title: 'Lorem Ipsum',
			type: 'story',
			url: 'www.url.com'
		}
	]);

	return (
		<PostContext.Provider value={{ postItems, setPostItems }}>
			<BodyContentWrapper>
				<Posts />
			</BodyContentWrapper>
		</PostContext.Provider>
	);
};

export default BodyContent;
