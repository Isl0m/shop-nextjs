import {
	Box,
	Container,
	Flex,
	IconButton,
	Show,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { FC, PropsWithChildren, useState } from 'react'
import { ColorModeSwitcher } from '../ui/ColorModeSwitcher'
import NextChakraLink from '../next-chakra/NextChakraLink'
import { HamburgerIcon } from '@chakra-ui/icons'
import MobileMenu from './MobileMenu'
import Head from 'next/head'

const menuLinks = [
	{ name: 'Home', href: '/' },
	{ name: 'Products', href: '/products' },
	{ name: 'Categories', href: '/categories' },
]

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const headerBg = useColorModeValue('teal.200', 'teal.500')
	const borderColor = useColorModeValue('teal.300', 'teal.600')
	const [isMenu, setIsMenu] = useState<boolean>(false)
	const handleClickMenu = () => {
		setIsMenu(!isMenu)
	}
	return (
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>
			<Box
				as="header"
				py={2}
				bgColor={headerBg}
				borderBottom="1px"
				borderColor={borderColor}
			>
				<Container maxW="container.lg">
					<Flex justifyContent="space-between" alignItems="center">
						<Text fontSize="xl" as="h1">
							Online Shop
						</Text>
						<Show above="sm">
							<Flex as="nav" gap={4}>
								<NextChakraLink href="/">Home</NextChakraLink>
								<NextChakraLink href="/products">Products</NextChakraLink>
								<NextChakraLink href="/categories">Categories</NextChakraLink>
							</Flex>
						</Show>
						<Box>
							<ColorModeSwitcher />
							<Show below="sm">
								<IconButton
									aria-label="Show menu"
									icon={<HamburgerIcon />}
									onClick={handleClickMenu}
									bgColor="transparent"
									_active={{}}
								/>
							</Show>
						</Box>
					</Flex>
				</Container>
			</Box>
			{isMenu && <MobileMenu items={menuLinks} />}
			<Container maxW="container.lg" as="main" my={8}>
				{children}
			</Container>
		</>
	)
}

export default Layout
