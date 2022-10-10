import { IProduct } from '@/services/product.service'
import { formatCurrency } from '@/utils/format-currency'
import { Badge, Box } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'
import NextChakraImage from '../../next-chakra/NextChakraImage'
import Rating from '../Rating'

const ProductCard: FC<IProduct> = props => {
	const { id, title, thumbnail, price, rating, category, brand } = props
	return (
		<Link href={`/products/${id}`}>
			<Box
				maxW="sm"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
				_hover={{ shadow: 'xl', cursor: 'pointer' }}
				as="a"
			>
				<NextChakraImage h={48} src={thumbnail} alt={title} />

				<Box p="6">
					<Box display="flex" alignItems="baseline" gap={2}>
						<Badge borderRadius="full" px="2" colorScheme="teal">
							{category}
						</Badge>
						<Badge borderRadius="full" px="2" colorScheme="teal">
							{brand}
						</Badge>
					</Box>

					<Box
						mt="1"
						fontWeight="semibold"
						as="h4"
						lineHeight="tight"
						noOfLines={1}
					>
						{title}
					</Box>

					<Box>{formatCurrency(price)}</Box>

					<Rating rating={rating} />
				</Box>
			</Box>
		</Link>
	)
}

export default ProductCard
