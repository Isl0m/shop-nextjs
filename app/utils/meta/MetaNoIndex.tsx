import Head from 'next/head'
import { FC } from 'react'

export const MetaNoIndex: FC<{ title?: string }> = ({ title = 'Error' }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta name="robots" content="noindex, nofollow" />
		</Head>
	)
}
