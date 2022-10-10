import axios from 'axios'
import { IProduct } from './product.service'

export interface ICategory {
	id: number
	name: string
	imageSrc: string
}

export const CategoryService = {
	async getAll() {
		return axios.get<string[]>('/products/categories')
	},
	async getByName(name: string) {
		return axios.get<{ products: IProduct[] }>(`/products/category/${name}`)
	},
	async getAllWithImage() {
		const { data: categoryNames } = await this.getAll()

		return Promise.all(
			categoryNames.map(async (name, id) => {
				const { data } = await this.getByName(name)
				const productIdx = Math.floor(Math.random() * data.products.length)
				return {
					id,
					name,
					imageSrc: data.products[productIdx].thumbnail,
				} as ICategory
			})
		)
	},
}
