export const truncateText = (str: string, slicingLength: number): string => {
	return str && str.length && str.slice(0, slicingLength) + '...';
};
