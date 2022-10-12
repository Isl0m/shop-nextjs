import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import {
	useColorMode,
	useColorModeValue,
	IconButton,
	IconButtonProps,
} from '@chakra-ui/react'

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeSwitcher = (props: ColorModeSwitcherProps) => {
	const { toggleColorMode } = useColorMode()
	const text = useColorModeValue('dark', 'light')
	const hoverColor = useColorModeValue('teal.100', 'teal.400')
	const SwitchIcon = useColorModeValue(MoonIcon, SunIcon)

	return (
		<IconButton
			bgColor="transparent"
			size="md"
			fontSize="lg"
			variant="ghost"
			color="current"
			marginLeft="2"
			onClick={toggleColorMode}
			icon={<SwitchIcon />}
			aria-label={`Switch to ${text} mode`}
			_hover={{ bgColor: hoverColor }}
			_active={{}}
			{...props}
		/>
	)
}
