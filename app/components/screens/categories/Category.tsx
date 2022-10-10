import ProductCard from '@/ui/card/ProductCard'
import { capitalize } from '@/utils/capitalize'
import {  Heading, SimpleGrid } from '@chakra-ui/react'
import { CategoryProps } from './category.types'

const Category = ({ name,products }: CategoryProps) => {
	return (
		<>
		<Heading>{capitalize(name)} Category</Heading>
			<SimpleGrid columns={[1, 2, 3]} gap={4} my={4} as="section">
				{products &&
					products.map(item => <ProductCard {...item} key={item.id} />)}
			</SimpleGrid>
		</>
	)
}

export default Category
