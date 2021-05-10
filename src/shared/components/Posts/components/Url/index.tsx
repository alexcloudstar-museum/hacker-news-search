import React from 'react';
import styled from 'styled-components';

const StyledUrl = styled.span`
	font-size: ${({ theme }) => theme.typography.sizes.md};
	color: ${({ theme }) => theme.palette.common.grey};
	cursor: pointer;
`;

const Url = (): JSX.Element => <StyledUrl>(www.google.com)</StyledUrl>;

export default Url;
