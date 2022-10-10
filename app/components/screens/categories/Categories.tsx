import CategoryCard from '@/ui/card/CategoryCard'
import { Heading, SimpleGrid } from '@chakra-ui/react'
import { CategoriesProps } from './category.types'

const Categories = ({ categories }: CategoriesProps) => {
	return (
		<>
			<Heading>Categories</Heading>
			<SimpleGrid columns={[1, 2, 3]} gap={4} my={4} as="section">
				{categories &&
					categories.map(item => <CategoryCard {...item} key={item.id} />)}
			</SimpleGrid>
		</>
	)
}

export default Categories
