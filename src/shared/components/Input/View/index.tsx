import React, { FC } from 'react';
import { InputWrapper } from './style';

import { TextField } from '@material-ui/core';

const Input: FC = (): JSX.Element => (
	<InputWrapper>
		<TextField
			id="standard-basic"
			label="Search stories by title, url, or author"
		/>
	</InputWrapper>
);

export default Input;
