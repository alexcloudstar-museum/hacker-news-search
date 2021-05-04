import React, { FC } from 'react';
import { IconWithTextWrapper } from './style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs } from '@fortawesome/free-solid-svg-icons';

const IconWithText: FC = (): JSX.Element => (
	<IconWithTextWrapper>
		<FontAwesomeIcon icon={faCogs} />
		<h5>Settings</h5>
	</IconWithTextWrapper>
);

export default IconWithText;
