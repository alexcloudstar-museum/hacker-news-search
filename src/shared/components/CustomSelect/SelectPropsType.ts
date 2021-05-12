export enum searchByTypePosts {
	stories = 'stories'
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
	pastYear = 'past year'
}

interface SelectPropsType {
	classes?: string;
	searchBy: searchByTypePosts[] | searchByType[] | searchByTime[];
	defaultValue: searchByTypePosts | searchByType | searchByTime;
}

export default SelectPropsType;
