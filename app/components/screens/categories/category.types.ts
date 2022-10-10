import { ICategory } from '@/services/category.service'
import { IProduct } from '@/services/product.service'

export type CategoryProps = { products: IProduct[]; name: string }
export type CategoriesProps = { categories: ICategory[] }
