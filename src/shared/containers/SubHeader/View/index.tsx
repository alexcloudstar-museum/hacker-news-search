import React from 'react';
import { CustomSelect } from 'src/shared/components';
import { searchByTypePosts } from 'src/shared/components/CustomSelect/SelectPropsType';
import { SubHeaderWrapper } from './style';

const SubHeader = (): JSX.Element => {
	return (
		<SubHeaderWrapper>
			<p>Search</p>
			<CustomSelect
				searchBy={[
					searchByTypePosts.all,
					searchByTypePosts.stories,
					searchByTypePosts.comments
				]}
			/>
		</SubHeaderWrapper>
	);
};

export default SubHeader;
