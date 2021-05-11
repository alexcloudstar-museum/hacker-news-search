import React, { FC, useCallback, useMemo, useState } from 'react';
import { InputWrapper } from './style';

import { TextField } from '@material-ui/core';
import { useFetchPosts, usePostContext } from 'src/containers';

const Input: FC = (): JSX.Element => {
	const [value, setValue] = useState('');
	const { postItems, setPostItems } = usePostContext();
	const { fetchStories } = useFetchPosts();

	const filteredList = () => {
		const initialPosts = postItems.slice(0);
		const filteredList = postItems.filter((post) => {
			return post.title.toLowerCase().includes(value.toLowerCase());
		});

		value.length > 0 ? setPostItems(filteredList) : fetchStories();
	};

	const onChange = (e) => {
		setValue(e.currentTarget.value);
		filteredList();
	};

	return (
		<>
			<InputWrapper>
				<TextField
					id="standard-basic"
					label="Search stories by title, url, or author"
					value={value}
					onChange={onChange}
				/>
			</InputWrapper>
		</>
	);
};

export default Input;
