import React, { FC, useState } from 'react';
import { usePostContext, useFetchPosts } from 'src/containers';
import Input from '../Input/View';

const Search: FC = (): JSX.Element => {
	const [state, setState] = useState('');
	const { postItems, setPostItems } = usePostContext();
	const { fetchStories } = useFetchPosts();

	const filteredList = () => {
		const filteredList = postItems.filter((post) => {
			return post.title.toLowerCase().includes(state.toLowerCase());
		});

		state.length > 0 ? setPostItems(filteredList) : fetchStories();
	};

	const onChange = (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => {
		setState(e.currentTarget.value);
		filteredList();
	};

	return (
		<>
			<Input state={state} onChange={onChange} />
		</>
	);
};

export default Search;
