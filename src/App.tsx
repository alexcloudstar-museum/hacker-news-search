import React, { useState } from 'react';
import GlobalStyles from './Theme/globalStyles';
import { Header, SubHeader } from './containers';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Theme/theme';
import { BodyContent, PostItemType } from './containers';
import { PostContext } from './containers/Posts/Data/context/PostContext';

const App = (): JSX.Element => {
	const [postItems, setPostItems] = useState<PostItemType[]>([
		{
			by: 'John Doe',
			descendants: 0,
			id: 1,
			kids: [0, 1, 2],
			score: 0,
			time: 0,
			title: 'Lorem Ipsum',
			type: 'story',
			url: 'www.url.com'
		}
	]);

	return (
		<ThemeProvider theme={defaultTheme}>
			<GlobalStyles />
			<PostContext.Provider value={{ postItems, setPostItems }}>
				<Header />
				<SubHeader />
				<BodyContent />
			</PostContext.Provider>
		</ThemeProvider>
	);
};

export default App;
