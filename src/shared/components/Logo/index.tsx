import React, { FC } from 'react';
import { LogoWrapper, StyledLogo } from './style';

const Logo: FC = (): JSX.Element => (
	<LogoWrapper>
		<StyledLogo>Hacker News Search</StyledLogo>
	</LogoWrapper>
);

export default Logo;
