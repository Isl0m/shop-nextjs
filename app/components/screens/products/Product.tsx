import ImageCarousel from '@/ui/ImageCarousel'
import Price from '@/ui/Price'
import Rating from '@/ui/Rating'
import Meta from '@/utils/meta/Meta'
import { Badge, Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { ProductProps } from './product.types'

const Product = ({ product }: ProductProps) => {
	const {
		title,
		description,
		category,
		brand,
		price,
		discountPercentage,
		rating,
		images,
	} = product
	return (
		<Meta title={`${title} product`} description={`${title} product page`}>
			<SimpleGrid columns={[1, 2]} gap={4} mt={4}>
				<ImageCarousel images={images} />
				<Box as="section">
					<Heading>{title}</Heading>
					<Text>{description}</Text>
					<Price price={price} discountPercentage={discountPercentage} />

					<Box display="flex" alignItems="baseline" gap={2}>
						<Badge borderRadius="full" px="2" colorScheme="teal">
							{category}
						</Badge>
						<Badge borderRadius="full" px="2" colorScheme="teal">
							{brand}
						</Badge>
					</Box>
					<Rating rating={rating} />
				</Box>
			</SimpleGrid>
		</Meta>
	)
}

export default Product
