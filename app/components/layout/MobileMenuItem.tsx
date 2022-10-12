import { Button, useColorModeValue } from '@chakra-ui/react'
import NextChakraLink from '../next-chakra/NextChakraLink'
import { MobileMenuItemProps } from './MobileMenu'

const MobileMenuItem = ({ name, href }: MobileMenuItemProps) => {
	const borderColor = useColorModeValue('teal.300', 'teal.600')
	return (
		<NextChakraLink href={href}>
			<Button
				variant="teal"
				w="full"
				textAlign="center"
				borderBottom="1px"
				borderColor={borderColor}
				borderRadius="none"
				fontWeight="base"
			>
				{name}
			</Button>
		</NextChakraLink>
	)
}

export default MobileMenuItem
