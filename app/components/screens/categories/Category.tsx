import ProductCard from '@/ui/card/ProductCard'
import { capitalize } from '@/utils/capitalize'
import Meta from '@/utils/meta/Meta'
import { Heading, SimpleGrid } from '@chakra-ui/react'
import { CategoryProps } from './category.types'

const Category = ({ name, products }: CategoryProps) => {
	return (
		<Meta
			title={`${capitalize(name)} category`}
			description={`${name} category products`}
		>
			<Heading>{capitalize(name)} Category</Heading>
			<SimpleGrid columns={[1, 2, 3]} gap={4} my={4} as="section">
				{products &&
					products.map(item => <ProductCard {...item} key={item.id} />)}
			</SimpleGrid>
		</Meta>
	)
}

export default Category
