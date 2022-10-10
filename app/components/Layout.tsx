import { Box, Container, Flex, useColorModeValue } from '@chakra-ui/react'
import Image from 'next/image'
import { FC, PropsWithChildren } from 'react'
import { ColorModeSwitcher } from './ui/ColorModeSwitcher'
import NextChakraLink from './next-chakra/NextChakraLink'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	const headerBg = useColorModeValue('teal.200', 'teal.500')
	return (
		<>
			<Box as="header" py={2} bgColor={headerBg}>
				<Container maxW="container.lg">
					<Flex justifyContent="space-between" alignItems="center">
						<Image src="/vercel.svg" height={32} width={64} alt="logo" />
						<Flex as="nav" gap={4}>
							<NextChakraLink href="/">Home</NextChakraLink>
							<NextChakraLink href="/products">Products</NextChakraLink>
							<NextChakraLink href="/categories">Categories</NextChakraLink>
							<NextChakraLink href="/about">About</NextChakraLink>
						</Flex>
						<ColorModeSwitcher />
					</Flex>
				</Container>
			</Box>
			<Container maxW="container.lg" as="main" my={8}>
				{children}
			</Container>
		</>
	)
}

export default Layout
