export enum searchByTypePosts {
	all = 'all',
	stories = 'stories',
	comments = 'comments'
}

export enum searchByType {
	popularity = 'popularity',
	date = 'date'
}

export enum searchByTime {
	allTime = 'allTime',
	last24H = 'last24H',
	pastWeek = 'pastWeek',
	pastMonth = 'pastMonth',
	pastYear = 'pastYear',
	customRange = 'customRange'
}

interface SelectPropsType {
	classes?: string;
	searchBy: searchByTypePosts[] | searchByType[] | searchByTime[];
}

export default SelectPropsType;
