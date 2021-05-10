import { DefaultTheme } from 'styled-components';
export const defaultTheme: DefaultTheme = {
	typography: {
		sizes: {
			xs: '14px',
			sm: '16px',
			md: '18px',
			lg: '24px',
			xl: '32px'
		}
	},
	palette: {
		common: {
			black: '#222831',
			white: '#ffffff',
			grey: '#3f4652'
		},
		primary: {
			main: '#914bb4',
			contrastText: '#ffffff'
		},
		secondary: {
			main: '#6eb44b',
			contrastText: '#ffffff'
		}
	}
};
