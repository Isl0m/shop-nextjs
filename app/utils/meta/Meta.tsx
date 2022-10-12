import Head from 'next/head'
import { useRouter } from 'next/router'
import { FC } from 'react'

import { onlyText } from '../clearText'

import { MetaNoIndex } from './MetaNoIndex'
import { ISeo } from './meta.interface'

const siteName = 'Online Shop'

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
	const { asPath } = useRouter()
	const currentUrl = `${process.env.APP_URL}${asPath}`

	return (
		<>
			{description ? (
				<Head>
					<title itemProp="headline">{title}</title>
					<meta name="title" content={siteName} />
					<meta
						itemProp="description"
						name="description"
						content={onlyText(description, 152)}
					/>

					<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
					<link rel="apple-touch-icon" href="/apple-touch-icon.png" />

					{/*<!-- Open Graph / Facebook -->*/}
					<meta property="og:type" content="website" />
					<meta property="og:title" content={title} />
					<meta property="og:site_name" content={siteName} />
					<meta property="og:url" content={currentUrl} />
					<meta
						property="og:description"
						content={onlyText(description, 197)}
					/>
					<meta property="og:locale" content="en" />
					<meta property="og:image" content="/chopping-cart.svg" />

					{/* <!-- Twitter --> */}
					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content={currentUrl} />
					<meta property="twitter:title" content={siteName} />
					<meta
						property="twitter:description"
						content={onlyText(description, 197)}
					/>
					<meta property="twitter:image" content="/chopping-cart.svg" />

					<link rel="canonical" href={currentUrl} />
				</Head>
			) : (
				<MetaNoIndex title={title} />
			)}

			{children}
		</>
	)
}

export default Meta
