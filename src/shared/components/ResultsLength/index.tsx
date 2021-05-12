import React from 'react';
import { usePostContext } from 'src/containers/Posts/Data/context/PostContext';

const ResultsLength = (): JSX.Element => {
	const { postItems } = usePostContext();

	return <div>{postItems.length} results</div>;
};

export default ResultsLength;
