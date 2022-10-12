import { Stack, useColorModeValue } from '@chakra-ui/react'
import MobileMenuItem from './MobileMenuItem'

export type MobileMenuItemProps = {
	name: string
	href: string
}

type Props = {
	items: MobileMenuItemProps[]
}

const MobileMenu = ({ items }: Props) => {
	const headerBg = useColorModeValue('teal.200', 'teal.500')

	return (
		<Stack as="nav" bgColor={headerBg}>
			{items.map(item => (
				<MobileMenuItem {...item} key={item.name} />
			))}
		</Stack>
	)
}

export default MobileMenu
