import { createContext, useContext } from 'react';
import { PostItemType } from '../types';

export type PostContextType = {
	postItems: PostItemType[];
	setPostItems: (params: any) => void;
};

export const PostContext = createContext<PostContextType>({
	postItems: [
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
	],
	// eslint-disable-next-line @typescript-eslint/no-empty-function
	setPostItems: (params: any) => {}
});

export const usePostContext = () => useContext(PostContext);
