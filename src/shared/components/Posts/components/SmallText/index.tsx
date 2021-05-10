import React from 'react';
import styled from 'styled-components';

const StyledSmallText = styled.p`
	font-size: ${({ theme }) => theme.typography.sizes.sm};
	color: ${({ theme }) => theme.palette.common.grey};
	cursor: pointer;
`;

const SmallText = (): JSX.Element => (
	<StyledSmallText>4103 points</StyledSmallText>
);

export default SmallText;
