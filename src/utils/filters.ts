import DateTime from 'luxon/src/datetime.js';
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

export const filterByDay = (posts: PostItemType[]): PostItemType[] => {
	const sortedPosts = posts.filter((post) => {
		const lastDay = DateTime.local().plus({ day: -1 });

		return DateTime.fromSeconds(post.time).ts - lastDay.ts > 0;
	});

	return sortedPosts;
};

export const pastWeek = (posts: PostItemType[]): PostItemType[] => {
	const sortedPosts = posts.filter((post) => {
		const lastDay = DateTime.local().plus({ week: -1 });

		return DateTime.fromSeconds(post.time).ts - lastDay.ts > 0;
	});

	return sortedPosts;
};

export const pastMonth = (posts: PostItemType[]): PostItemType[] => {
	const sortedPosts = posts.filter((post) => {
		const lastDay = DateTime.local().plus({ month: -1 });

		return DateTime.fromSeconds(post.time).ts - lastDay.ts > 0;
	});

	return sortedPosts;
};

export const pastYear = (posts: PostItemType[]): PostItemType[] => {
	const sortedPosts = posts.filter((post) => {
		const lastDay = DateTime.local().plus({ year: -1 });

		return DateTime.fromSeconds(post.time).ts - lastDay.ts > 0;
	});

	return sortedPosts;
};
