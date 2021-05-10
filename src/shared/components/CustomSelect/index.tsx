import React, { ChangeEvent, FC, SetStateAction, useState } from 'react';
import SelectPropsType, {
	searchByTime,
	searchByType,
	searchByTypePosts
} from './SelectPropsType';
import { StyledSelect } from './style';

import { FormControl, MenuItem } from '@material-ui/core';
import { capitalizeFirstLetter } from 'src/utils';

const CustomSelect: FC<SelectPropsType> = ({
	classes,
	searchBy,
	defaultValue
}): JSX.Element => {
	const [value, setValue] = useState(defaultValue);
	const handleChange = (
		e: ChangeEvent<{
			name?: string;
			value: unknown;
		}>
	) => {
		const target = e.target.value as SetStateAction<
			searchByTypePosts | searchByType | searchByTime
		>;
		setValue(target);
	};

	return (
		<FormControl>
			<StyledSelect
				labelId="demo-simple-select-helper-label"
				id="demo-simple-select-helper"
				value={value}
				onChange={(e) => handleChange(e)}
			>
				{searchBy.map((search) => (
					<MenuItem value={search} key={search}>
						{capitalizeFirstLetter(search)}
					</MenuItem>
				))}
			</StyledSelect>
		</FormControl>
	);
};

export default CustomSelect;
