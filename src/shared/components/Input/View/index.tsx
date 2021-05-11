import React, { FC, useCallback, useMemo, useState } from 'react';
import { InputWrapper } from './style';

import { TextField } from '@material-ui/core';
import { useFetchPosts, usePostContext } from 'src/containers';

interface inputProps {
	state: string;
	onChange: (
		e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
	) => void;
}

const Input: FC<inputProps> = ({ state, onChange }): JSX.Element => {
	return (
		<>
			<InputWrapper>
				<TextField
					id="standard-basic"
					label="Search stories by title, url, or author"
					value={state}
					onChange={onChange}
				/>
			</InputWrapper>
		</>
	);
};

export default Input;
