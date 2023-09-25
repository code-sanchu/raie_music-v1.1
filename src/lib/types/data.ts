type Image = {
	src: string;
	naturalDimensions: {
		width: number;
		height: number;
	};
};

export type Data = { Image: Image };
