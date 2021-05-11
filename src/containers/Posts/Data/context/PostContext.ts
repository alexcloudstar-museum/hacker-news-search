/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useContext } from 'react';
import { PostItemType } from '../types';

export type PostContextType = {
	postItems: PostItemType[];
	setPostItems: (params: any) => void;
	loading: boolean;
	setLoading: (params: any) => void;
};

export const PostContext = createContext<PostContextType>({
	postItems: [],

	setPostItems: (params: any) => {},
	loading: true,
	setLoading: (params: any) => {}
});

export const usePostContext = () => useContext(PostContext);
