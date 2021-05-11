import React, { FC } from 'react';
import { HeaderWrapper } from './style';

import { Logo, Search } from 'src/shared/components';

const Header: FC = (): JSX.Element => {
	return (
		<HeaderWrapper>
			<Logo />
			<Search />
		</HeaderWrapper>
	);
};

export default Header;
