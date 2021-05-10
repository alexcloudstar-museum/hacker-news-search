import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const StyledPostWrapper = styled(Box)`
	h3 {
		margin-right: 5px;
	}
`;
export const FlexWrapper = styled(Box)`
	display: flex;

	p {
		margin: 10px 10px 0 0;
		position: relative;
		&:not(:last-child) {
			&:after {
				content: '';
				display: block;
				width: 1px;
				height: 100%;
				position: absolute;
				top: 50%;
				right: -5px;
				background-color: ${({ theme }) => theme.palette.common.grey};
				transform: translateY(-50%);
			}
		}
	}
`;
