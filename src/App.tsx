import React from 'react';
import GlobalStyles from './Theme/globalStyles';
import { Header, SubHeader } from './shared/containers/';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Theme/theme';

const App = (): JSX.Element => (
	<ThemeProvider theme={defaultTheme}>
		<GlobalStyles />
		<Header />
		<SubHeader />
	</ThemeProvider>
);

export default App;
