import { ICategory } from '@/services/category.service'
import { IProduct } from '@/services/product.service'

export type HomeProps = { products: IProduct[]; categories: ICategory[] }
