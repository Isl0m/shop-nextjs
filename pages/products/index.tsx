import Products from '@/screens/products/Products'
import { ProductsProps } from '@/screens/products/product.types'
import { ProductService } from '@/services/product.service'
import type { GetStaticProps, NextPage } from 'next'

const ProductsPage: NextPage<ProductsProps> = props => {
	return <Products {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await ProductService.getAll()
	return {
		props: { products: data.products },
	}
}

export default ProductsPage
