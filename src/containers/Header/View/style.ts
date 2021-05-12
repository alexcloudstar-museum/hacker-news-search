import styled from 'styled-components';

export const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: ${({ theme }) => theme.palette.common.white};
	padding: 25px 20px;
	box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.6);

	@media (max-width: ${({ theme }) => theme.mediaQuery.sm}) {
		flex-direction: column;
		text-align: center;
	}
`;
