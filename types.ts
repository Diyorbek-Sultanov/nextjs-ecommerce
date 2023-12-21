export interface IBillboard {
	id: string
	label: string
	imageUrl: string
}

export interface ICategory {
	id: string
	name: string
	billboardId: string
	billboard: IBillboard
}

export interface IProductResponse {
	data: IProduct[]
	metaData: {
		hasNextPage: boolean
		totalPages: number[]
	}
}

export interface IProduct {
	id: string
	storeId: string
	categoryId: string
	sizeId: string
	colorId: string
	name: string
	price: string
	isFeatured: boolean
	isArchived: boolean
	createdAt: string
	updatedAt: string
	images: Image[]
	category: Category
	color: IColor
	size: ISize
}

export interface Image {
	id: string
	productId: string
	url: string
	createdAt: string
	updatedAt: string
}

export interface Category {
	id: string
	storeId: string
	billboardId: string
	name: string
	createdAt: string
	updatedAt: string
}

export interface IColor {
	id: string
	storeId: string
	name: string
	value: string
	createdAt: string
	updatedAt: string
}

export interface ISize {
	id: string
	storeId: string
	name: string
	value: string
	createdAt: string
	updatedAt: string
}
