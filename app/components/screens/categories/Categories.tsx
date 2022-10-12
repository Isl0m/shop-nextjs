import CategoryCard from '@/ui/card/CategoryCard'
import Meta from '@/utils/meta/Meta'
import { Heading, SimpleGrid } from '@chakra-ui/react'
import { CategoriesProps } from './category.types'

const Categories = ({ categories }: CategoriesProps) => {
	return (
		<Meta title={`All categories`} description={`All categories our page`}>
			<Heading>Categories</Heading>
			<SimpleGrid columns={[1, 2, 3]} gap={4} my={4} as="section">
				{categories &&
					categories.map(item => <CategoryCard {...item} key={item.id} />)}
			</SimpleGrid>
		</Meta>
	)
}

export default Categories
