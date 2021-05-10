import styled from 'styled-components';

export const InputWrapper = styled.div`
	width: 50%;

	.Mui-focused label,
	.MuiFormLabel-root {
		color: ${({ theme }) => theme.palette.common.black} !important;
	}

	.MuiInput-underline:hover:not(.Mui-disabled):before,
	.MuiInput-underline:before,
	.MuiInput-underline:after {
		border-bottom: 1px solid ${({ theme }) => theme.palette.common.black} !important;
	}

	.MuiFormControl-root,
	.MuiInputBase-root {
		width: 100%;
	}
`;
