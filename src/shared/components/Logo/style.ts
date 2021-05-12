import styled from 'styled-components';

export const LogoWrapper = styled.div`
	width: 100%;
`;

export const StyledLogo = styled.h1`
	font-size: ${({ theme }) => theme.typography.sizes.lg};
	text-transform: uppercase;
	color: ${({ theme }) => theme.palette.common.black};
`;
