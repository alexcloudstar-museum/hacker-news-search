import styled from 'styled-components';

export const IconWithTextWrapper = styled.div`
	display: flex;
	color: ${({ theme }) => theme.palette.common.white};

	svg {
		margin-right: 7px;
	}
`;
