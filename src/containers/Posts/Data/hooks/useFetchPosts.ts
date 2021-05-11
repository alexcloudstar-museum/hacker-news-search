import { useCallback } from 'react';
import { getTopStories } from 'src/api';
import { usePostContext } from '../context/PostContext';

interface useFetchPostsType {
	fetchStories: () => Promise<void>;
}

const useFetchPosts = (): useFetchPostsType => {
	const { setPostItems } = usePostContext();

	const fetchStories = useCallback(async () => {
		const items = await getTopStories();
		setPostItems(items);
	}, [setPostItems]);

	return { fetchStories };
};

export default useFetchPosts;
