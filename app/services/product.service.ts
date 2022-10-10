import axios from 'axios'

export interface IProduct {
	id: number
	title: string
	description: string
	price: number
	discountPercentage: number
	rating: number
	stock: number
	brand: string
	category: string
	thumbnail: string
	images: string[]
}

export const ProductService = {
	async getAll(limit?: number) {
		return axios.get<{ products: IProduct[] }>('/products', {
			params: { limit: limit || 30 },
		})
	},
	async getOne(id: string) {
		return axios.get<IProduct>(`/products/${id}`)
	},
}
