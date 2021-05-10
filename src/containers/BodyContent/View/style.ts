import styled from 'styled-components';

import { Box } from '@material-ui/core';

export const BodyContentWrapper = styled(Box)`
	padding: 40px 25px 0 25px;
	background-color: ${({ theme }) => theme.palette.common.white};
`;
