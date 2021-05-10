import React from 'react';
import { Post } from 'src/shared/components';
import { BodyContentWrapper } from './style';

const BodyContent = (): JSX.Element => {
	return (
		<BodyContentWrapper>
			<Post />
		</BodyContentWrapper>
	);
};

export default BodyContent;
