import CategoryCard from '@/ui/card/CategoryCard'
import ProductCard from '@/ui/card/ProductCard'
import SeeMore from '@/ui/SeeMore'
import Meta from '@/utils/meta/Meta'
import { Heading, SimpleGrid } from '@chakra-ui/react'
import { HomeProps } from './home.types'

const Home = ({ categories, products }: HomeProps) => {
	return (
		<Meta
			title="Online Shop"
			description="Online Shop for buying with categories and products"
		>
			<Heading>Categories</Heading>
			<SimpleGrid columns={[1, 2, 3]} gap={4} my={4} as="section">
				{categories &&
					categories
						.slice(0, 6)
						.map(item => <CategoryCard {...item} key={item.id} />)}
			</SimpleGrid>
			<SeeMore href={'/categories'} />
			<Heading mt={8}>Products</Heading>
			<SimpleGrid columns={[1, 2, 3]} gap={4} my={4} as="section">
				{products &&
					products.map(item => <ProductCard {...item} key={item.id} />)}
			</SimpleGrid>
			<SeeMore href={'/products'} />
		</Meta>
	)
}

export default Home
