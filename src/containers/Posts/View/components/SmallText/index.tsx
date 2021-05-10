import React, { FC } from 'react';
import styled from 'styled-components';

const StyledSmallText = styled.p`
	font-size: ${({ theme }) => theme.typography.sizes.sm};
	color: ${({ theme }) => theme.palette.common.grey};
	cursor: pointer;
`;

const SmallText: FC = ({ children }): JSX.Element => (
	<StyledSmallText>{children}</StyledSmallText>
);

export default SmallText;
