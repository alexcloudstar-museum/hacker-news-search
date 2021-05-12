import React from 'react';
import { Posts } from 'src/containers';

import { BodyContentWrapper } from './style';

const BodyContent = (): JSX.Element => {
	return (
		<BodyContentWrapper>
			<Posts />
		</BodyContentWrapper>
	);
};

export default BodyContent;
