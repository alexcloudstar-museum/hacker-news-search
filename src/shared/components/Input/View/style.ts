import styled from 'styled-components';

export const InputWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;

	@media (min-width: ${({ theme }) => theme.mediaQuery.md}) {
		justify-content: flex-end;
	}

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
		/* width: 50%; */
	}
`;
