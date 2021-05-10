import styled from 'styled-components';

export const IconWithTextWrapper = styled.div`
	display: flex;
	color: ${({ theme }) => theme.palette.common.black};

	svg {
		margin-right: 7px;
	}
`;
