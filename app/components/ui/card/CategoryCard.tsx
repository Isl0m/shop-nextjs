import { ICategory } from '@/services/category.service'
import { capitalize } from '@/utils/capitalize'
import { Box, Heading } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'
import NextImage from 'next/image'

const CategoryCard: FC<ICategory> = props => {
	const { id, name, imageSrc } = props
	return (
		<Link href={`/categories/${name}`}>
			<Box
				maxW="sm"
				pos="relative"
				borderWidth="1px"
				borderRadius="lg"
				overflow="hidden"
				_hover={{ shadow: 'xl', cursor: 'pointer' }}
				as="a"
				h={64}
			>
				<NextImage objectFit="cover" layout="fill" src={imageSrc} alt={name} />

				<Box
					pos="absolute"
					bottom={0}
					right={0}
					w="full"
					bg="blackAlpha.300"
					backdropFilter="blur(10px)"
					borderTopRadius="base"
					p="2"
					textAlign="center"
				>
					<Heading
						mt="1"
						fontWeight="semibold"
						as="h4"
						size="lg"
						lineHeight="tight"
						noOfLines={1}
						color="white"
					>
						{capitalize(name)}
					</Heading>
				</Box>
			</Box>
		</Link>
	)
}

export default CategoryCard
