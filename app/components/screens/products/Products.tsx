import ProductCard from '@/ui/card/ProductCard'
import { Heading, SimpleGrid } from '@chakra-ui/react'
import { ProductsProps } from './product.types'

const Products = ({ products }: ProductsProps) => {
	return (
		<>
			<Heading>Products</Heading>
			<SimpleGrid columns={[1, 2, 3]} gap={4} my={4} as="section">
				{products &&
					products.map(item => <ProductCard {...item} key={item.id} />)}
			</SimpleGrid>
		</>
	)
}

export default Products
