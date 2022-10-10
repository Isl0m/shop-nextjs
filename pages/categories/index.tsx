import Categories from '@/screens/categories/Categories'
import { CategoriesProps } from '@/screens/categories/category.types'
import { CategoryService } from '@/services/category.service'
import type { GetStaticProps, NextPage } from 'next'

const CategoriesPage: NextPage<CategoriesProps> = props => {
	return <Categories {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	const categories = await CategoryService.getAllWithImage()

	return {
		props: { categories },
	}
}

export default CategoriesPage
