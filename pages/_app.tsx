import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Layout from '@/layout/Layout'
import axios from 'axios'
import Head from 'next/head'

export const API_SERVER_URL = `${process.env.APP_SERVER_URL}`

axios.defaults.baseURL = API_SERVER_URL
axios.defaults.headers.common['Content-Type'] = 'application/json'

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ChakraProvider>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
				<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ChakraProvider>
	)
}

export default MyApp
