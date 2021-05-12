import React, { FC } from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h3`
	font-size: ${({ theme }) => theme.typography.sizes.md};
	color: ${({ theme }) => theme.palette.common.black};
	cursor: pointer;
`;

const Heading: FC = ({ children }): JSX.Element => (
	<StyledHeading>{children}</StyledHeading>
);

export default Heading;
