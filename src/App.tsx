import React from 'react';
import GlobalStyles from './Theme/globalStyles';
import { Header, SubHeader } from './containers';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Theme/theme';
import { BodyContent } from './containers';

const App = (): JSX.Element => (
	<ThemeProvider theme={defaultTheme}>
		<GlobalStyles />
		<Header />
		<SubHeader />
		<BodyContent />
	</ThemeProvider>
);

export default App;
