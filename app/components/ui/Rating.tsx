import { StarIcon } from '@chakra-ui/icons'
import { Box, Text } from '@chakra-ui/react'

type Props = { rating: number }

const Rating = ({ rating }: Props) => {
	return (
		<Box display="flex" mt="2" alignItems="center">
			{Array(5)
				.fill('')
				.map((_, i) =>
					i + 1 <= rating ? (
						<StarIcon color="yellow.500" key={i} />
					) : (
						<StarIcon color="gray.200" key={i} />
					)
				)}
			<Text as="span" ml="2" fontSize="sm">
				{rating}
			</Text>
		</Box>
	)
}

export default Rating
