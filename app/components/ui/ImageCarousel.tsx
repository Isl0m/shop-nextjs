import { Carousel } from 'react-responsive-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import CircleIcon from '@/ui/CircleIcon'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Box, Image, ImageProps } from '@chakra-ui/react'

type Props = ImageProps & { images: string[] }

const ImageCarousel = ({ images, ...props }: Props) => {
	return (
		<Carousel
			infiniteLoop
			dynamicHeight
			showStatus={false}
			showThumbs={false}
			renderArrowPrev={(clickHandler, hasPrev) =>
				hasPrev && (
					<Box
						onClick={clickHandler}
						pos="absolute"
						top="calc(50% - 24px)"
						left={2}
						zIndex={1}
					>
						<ChevronLeftIcon
							onClick={clickHandler}
							bgColor="teal.200"
							borderRadius="full"
							w={12}
							h={12}
							p={2}
							_hover={{ bgColor: 'teal.300' }}
							cursor="pointer"
							transition="background-color 0.2s ease-in-out"
						/>
					</Box>
				)
			}
			renderArrowNext={(clickHandler, hasNext) =>
				hasNext && (
					<Box
						onClick={clickHandler}
						pos="absolute"
						top="calc(50% - 24px)"
						right={2}
						zIndex={1}
					>
						<ChevronRightIcon
							onClick={clickHandler}
							bgColor="teal.200"
							borderRadius="full"
							w={12}
							h={12}
							p={2}
							_hover={{ bgColor: 'teal.300' }}
							cursor="pointer"
							transition="background-color 0.2s ease-in-out"
						/>
					</Box>
				)
			}
			renderIndicator={(clickHandler, isSelected) => (
				<CircleIcon
					onClick={clickHandler}
					color={isSelected ? 'teal.300' : 'teal.200'}
					opacity={isSelected ? 1 : 0.75}
					cursor="pointer"
					boxSize="1.2em"
					_hover={{ color: 'teal.300' }}
					transition="color 0.2s ease-in-out"
				/>
			)}
		>
			{images.map((imgSrc, idx) => (
				<Image
					src={imgSrc}
					alt={imgSrc}
					key={idx}
					h={96}
					fit="contain"
					{...props}
				/>
			))}
		</Carousel>
	)
}

export default ImageCarousel
