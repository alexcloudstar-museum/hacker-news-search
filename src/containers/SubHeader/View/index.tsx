import React from 'react';
import { CustomSelect, ResultsLength } from 'src/shared/components';
import {
	searchByTypePosts,
	searchByType,
	searchByTime
} from 'src/shared/components/CustomSelect/SelectPropsType';
import { SubHeaderCols, SubHeaderWrapper } from './style';

const SubHeader = (): JSX.Element => {
	return (
		<SubHeaderWrapper>
			<SubHeaderCols>
				<p>Search</p>
				<CustomSelect
					searchBy={[searchByTypePosts.stories]}
					defaultValue={searchByTypePosts.stories}
				/>
				<p>by</p>
				<CustomSelect
					searchBy={[searchByType.popularity, searchByType.date]}
					defaultValue={searchByType.popularity}
				/>
				<p>by</p>
				<CustomSelect
					searchBy={[
						searchByTime.allTime,
						searchByTime.last24H,
						searchByTime.pastWeek,
						searchByTime.pastMonth,
						searchByTime.pastYear,
						searchByTime.customRange
					]}
					defaultValue={searchByTime.allTime}
				/>
			</SubHeaderCols>
			<SubHeaderCols>
				<ResultsLength />
			</SubHeaderCols>
		</SubHeaderWrapper>
	);
};

export default SubHeader;
