import axios from 'axios';
import { PostItemType } from 'src/containers';

export const fetchTopStories = async (): Promise<number[]> => {
	const res = await axios.get(
		'https://hacker-news.firebaseio.com/v0/topstories.json'
	);

	return res.data;
};

export const fetchItem = async (id: number): Promise<PostItemType> => {
	const res = await axios.get(
		`https://hacker-news.firebaseio.com/v0/item/${id}.json`
	);

	return res.data;
};

export const getTopStories = async (): Promise<PostItemType[]> => {
	const topstories = await fetchTopStories();
	const items = await Promise.all(
		topstories.slice(0, 100).map((id) => fetchItem(id))
	);

	return items.filter(Boolean);
};
