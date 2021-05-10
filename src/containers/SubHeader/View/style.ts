import styled from 'styled-components';

import { Box } from '@material-ui/core';

export const SubHeaderWrapper = styled(Box)`
	background-color: ${({ theme }) => theme.palette.common.white};
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20px 20px;

	p {
		margin-right: 10px;
		margin-left: 3px;
	}
`;

export const SubHeaderCols = styled(Box)`
	p {
		font-size: ${({ theme }) => theme.typography.sizes.md};
	}
	display: flex;
	justify-content: center;
	align-items: center;
`;
