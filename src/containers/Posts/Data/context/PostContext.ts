/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';
import { PostItemType } from '../types';

export type PostContextType = {
	postItems: PostItemType[];
	setPostItems: (params: PostItemType[]) => void;
	loading: boolean;
	setLoading: (params: boolean) => void;
};

export const PostContext = createContext<PostContextType>({
	postItems: [],

	setPostItems: (params: PostItemType[]) => {},
	loading: true,
	setLoading: (params: boolean) => {}
});

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const usePostContext = () => useContext(PostContext);
