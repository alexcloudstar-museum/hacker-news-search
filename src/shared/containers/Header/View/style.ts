import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.palette.primary.main};
	padding: 25px 20px;
`;
