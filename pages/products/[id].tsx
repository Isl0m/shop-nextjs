import Product from '@/screens/products/Product'
import { ProductProps } from '@/screens/products/product.types'
import { ProductService } from '@/services/product.service'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
	id: string
}

const ProductPage = (props: ProductProps) => {
	return <Product {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await ProductService.getAll()

	const paths = data.products.map(product => ({
		params: { id: String(product.id) },
	}))

	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async context => {
	const { id } = context.params as IParams
	const { data: product } = await ProductService.getOne(id)
	return { props: { product } }
}

export default ProductPage
