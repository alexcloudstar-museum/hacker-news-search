import { useCallback } from 'react';
import { getTopStories } from 'src/api';
import { usePostContext } from '../context/PostContext';

interface useFetchPostsType {
	fetchStories: () => Promise<void>;
}

const useFetchPosts = (): useFetchPostsType => {
	const { setPostItems, setLoading } = usePostContext();

	const fetchStories = useCallback(async () => {
		const items = await getTopStories();
		setPostItems(items);
		setLoading(false);
	}, [setLoading, setPostItems]);

	return { fetchStories };
};

export default useFetchPosts;
