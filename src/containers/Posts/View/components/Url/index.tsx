import React, { FC } from 'react';
import styled from 'styled-components';

const StyledUrl = styled.span`
	font-size: ${({ theme }) => theme.typography.sizes.md};
	color: ${({ theme }) => theme.palette.common.grey};
	cursor: pointer;

	@media (max-width: ${({ theme }) => theme.mediaQuery.sm}) {
		display: none;
	}
`;

const Url: FC = ({ children }): JSX.Element => (
	<StyledUrl>{children}</StyledUrl>
);

export default Url;
