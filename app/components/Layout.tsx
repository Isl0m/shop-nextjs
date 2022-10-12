import {
	Box,
	Button,
	Container,
	Flex,
	IconButton,
	Show,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react'
import { FC, PropsWithChildren, useState } from 'react'
import { ColorModeSwitcher } from './ui/ColorModeSwitcher'
import NextChakraLink from './next-chakra/NextChakraLink'
import { HamburgerIcon } from '@chakra-ui/icons'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const headerBg = useColorModeValue('teal.200', 'teal.500')
	const borderColor = useColorModeValue('teal.300', 'teal.600')
	const [isMenu, setIsMenu] = useState<boolean>(false)
	const handleClickMenu = () => {
		setIsMenu(!isMenu)
	}
	return (
		<>
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
								<NextChakraLink href="/about">About</NextChakraLink>
							</Flex>
						</Show>
						<Box>
							<ColorModeSwitcher  />
							<Show below="sm">
								<IconButton
									aria-label="Show menu"
									icon={<HamburgerIcon />}
									onClick={handleClickMenu}
									bgColor="transparent"
								/>
							</Show>
						</Box>
					</Flex>
				</Container>
			</Box>
			{isMenu && (
				<Stack as="nav" bgColor={headerBg}>
					<NextChakraLink href="/">
						<Button
							variant="teal"
							w="full"
							textAlign="center"
							borderBottom="1px"
							borderColor={borderColor}
							borderRadius="none"
							fontWeight="base"
						>
							Home
						</Button>
					</NextChakraLink>
					<NextChakraLink href="/products">
						<Button
							variant="teal"
							w="full"
							textAlign="center"
							borderBottom="1px"
							borderColor={borderColor}
							borderRadius="none"
							fontWeight="base"
						>
							Products
						</Button>
					</NextChakraLink>
					<NextChakraLink href="/categories">
						<Button
							variant="teal"
							w="full"
							textAlign="center"
							borderBottom="1px"
							borderColor={borderColor}
							borderRadius="none"
							fontWeight="base"
						>
							Categories
						</Button>
					</NextChakraLink>
					<NextChakraLink href="/about">
						<Button
							variant="teal"
							w="full"
							textAlign="center"
							borderBottom="1px"
							borderColor={borderColor}
							borderRadius="none"
							fontWeight="base"
						>
							About
						</Button>
					</NextChakraLink>
				</Stack>
			)}
			<Container maxW="container.lg" as="main" my={8}>
				{children}
			</Container>
		</>
	)
}

export default Layout
