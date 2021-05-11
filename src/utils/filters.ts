import { PostItemType } from 'src/containers';

export const filterByDate = (posts: PostItemType[]): PostItemType[] => {
	const sortedPosts = posts.slice(0).sort((a, b) => {
		return new Date(b.time).valueOf() - new Date(a.time).valueOf();
	});

	return sortedPosts;
};

export const filterByScore = (posts: PostItemType[]): PostItemType[] => {
	const sortedPosts = posts.slice(0).sort((a, b) => {
		return b.score - a.score;
	});

	return sortedPosts;
};
