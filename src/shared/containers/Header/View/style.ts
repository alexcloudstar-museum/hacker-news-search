import styled from 'styled-components';

export const HeaderWrapper = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.palette.common.white};
	padding: 25px 20px;
	box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.6);
`;
