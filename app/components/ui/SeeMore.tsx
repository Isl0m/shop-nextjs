import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react'
import Link from 'next/link'
import { CSSProperties } from 'react'

type Props = {
	href: string
  style?: CSSProperties 
}

const SeeMore = ({ href,style }: Props) => {
	return (
		<Link href={href} style={style}>
			<a>
				<Button rightIcon={<ArrowForwardIcon />} colorScheme="teal">
					See More
				</Button>
			</a>
		</Link>
	)
}

export default SeeMore
