import React, { useState } from 'react';
import GlobalStyles from './Theme/globalStyles';
import { Header, SubHeader } from './containers';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Theme/theme';
import { BodyContent, PostItemType } from './containers';
import { PostContext } from './containers/Posts/Data/context/PostContext';

const App = (): JSX.Element => {
	const [postItems, setPostItems] = useState<PostItemType[]>([]);
	const [loading, setLoading] = useState(true);

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<PostContext.Provider
				value={{ postItems, setPostItems, loading, setLoading }}
			>
				<Header />
				<SubHeader />
				<BodyContent />
			</PostContext.Provider>
		</ThemeProvider>
	);
};

export default App;
