import React, { FC } from 'react';
import { HeaderWrapper } from './style';

import { IconWithText, Logo, Search } from 'src/shared/components';

const Header: FC = (): JSX.Element => {
	return (
		<HeaderWrapper>
			<Logo />
			<Search />
			<IconWithText />
		</HeaderWrapper>
	);
};

export default Header;
