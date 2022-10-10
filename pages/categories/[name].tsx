import Category from '@/screens/categories/Category'
import { CategoryProps } from '@/screens/categories/category.types'
import { CategoryService } from '@/services/category.service'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ParsedUrlQuery } from 'querystring'

interface IParams extends ParsedUrlQuery {
	name: string
}

const CategoryPage = (props: CategoryProps) => {
	return <Category {...props} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const { data } = await CategoryService.getAll()

	const paths = data.map(category => ({
		params: { name: String(category) },
	}))

	return {
		paths,
		fallback: 'blocking',
	}
}

export const getStaticProps: GetStaticProps = async context => {
	const { name } = context.params as IParams
	const { data } = await CategoryService.getByName(name)
	return { props: { products: data.products, name } }
}

export default CategoryPage
