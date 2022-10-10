import { formatCurrency } from '@/utils/format-currency'
import { Box, Flex, Text } from '@chakra-ui/react'

type Props = { price: number; discountPercentage: number }

const Price = ({ price, discountPercentage }: Props) => {
	return (
		<Box my={2}>
			<Flex gap={2}>
				<Text as="del" color="gray.500">
					{formatCurrency((100 * price) / (100 - discountPercentage))}
				</Text>
				<Text color="red.500">-{discountPercentage}%</Text>
			</Flex>
			<Text fontSize="2xl" fontWeight="bold" mt="-2">
				{formatCurrency(price)}
			</Text>
		</Box>
	)
}

export default Price
