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
	allTime = 'all time',
	last24H = 'last 24h',
	pastWeek = 'past week',
	pastMonth = 'past month',
	pastYear = 'past year',
	customRange = 'custom range'
}

interface SelectPropsType {
	classes?: string;
	searchBy: searchByTypePosts[] | searchByType[] | searchByTime[];
	defaultValue: searchByTypePosts | searchByType | searchByTime;
}

export default SelectPropsType;