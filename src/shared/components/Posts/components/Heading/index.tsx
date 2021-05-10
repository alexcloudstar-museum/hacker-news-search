import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.h3`
	font-size: ${({ theme }) => theme.typography.sizes.md};
	color: ${({ theme }) => theme.palette.common.black};
	cursor: pointer;
`;

const Heading = (): JSX.Element => <StyledHeading>Post Title</StyledHeading>;

export default Heading;
