import Home from '@/screens/home/Home'
import { HomeProps } from '@/screens/home/home.types'
import { CategoryService } from '@/services/category.service'
import { ProductService } from '@/services/product.service'
import type { GetStaticProps, NextPage } from 'next'

const HomePage: NextPage<HomeProps> = props => {
	return <Home {...props} />
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await ProductService.getAll(9)
	const categories = await CategoryService.getAllWithImage()

	return {
		props: { products: data.products, categories },
	}
}

export default HomePage
