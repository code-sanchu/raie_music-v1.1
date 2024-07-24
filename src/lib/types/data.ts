type ImgProps = {
	src: string;
	w: number;
};
type ImgPropsH = ImgProps & { h: number };

type ImgMeta = { img: ImgPropsH; sources: { [key: string]: ImgProps[] } };

type Image = {
	src: ImgMeta[];
	naturalDimensions: {
		width: number;
		height: number;
	};
	caption?: string;
};

export type Data = { Image: Image };

export type PersonalTestimony = {
	name: string,
	title: string | null,
	aboutHref: string | null,
	testimony: string
}

export type CompanyTestimony = {
	title: string,
	testimony: string
}