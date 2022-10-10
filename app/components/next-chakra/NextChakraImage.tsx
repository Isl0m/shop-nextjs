import { Box, BoxProps as ChakraBoxProps } from '@chakra-ui/react'
import NextImage from 'next/image'

type Props = ChakraBoxProps & {
	src: string
	alt: string
}

const NextChakraImage = (props: Props) => {
	const { src, alt, ...rest } = props
	return (
		<Box pos="relative" {...rest}>
			<NextImage objectFit="cover" layout="fill" src={src} alt={alt} />
		</Box>
	)
}
export default NextChakraImage
