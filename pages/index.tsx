import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { FiGithub } from "react-icons/fi";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
	<>
	  <Head>
		<title>Dennis Abrams | Portfolio</title>
		<meta charSet="UTF-8" />
		<meta name="keywords" content="dennis abrams, dennis, abrams, portfolio, website" />
		<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
		<meta name="author" content="Dennis Abrams" />
		<meta name="page-topic" content="Programmieren,Software,Projekte,IT" />
		<meta name="description" content="Willkommen auf der Webseite von Dennis Abrams. Hier erstelle ich ein Portfolio über mich und dokumentiere Projekte, die ich in meiner Lebenslaufbahn absolviert habe. Schau doch gerne mal vorbei!" />
		<meta name="expires" content="0" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta name="theme-color" content="#232323" />
		<meta name="msapplication-TileColor" content="#232323" />
		{/* Open Graph*/}
		<meta property="og:url" content="https://dennis-abrams.com" />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content="Dennis Abrams | Portfolio" />
		<meta property="og:keywords" content="dennis abrams, dennis, abrams, portfolio, website" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:title" content="Welcome to dennis abrams's website!" />
		<meta property="og:description" content="On my website I create a portfolio about myself and document projects that I have completed in my career 👨‍💻. Feel free to take a look!" />
		<meta property="og:image" content="https://dennis-abrams.com/open-graph-dummy.png" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta property="twitter:domain" content="dennis-abrams.com" />
		<meta property="twitter:url" content="https://dennis-abrams.com" />
		<meta name="twitter:title" content="Welcome to dennis abrams's website!" />
		<meta name="twitter:description" content="On my website I create a portfolio about myself and document projects that I have completed in my career 👨‍💻. Feel free to take a look!" />
		<meta name="twitter:image" content="https://dennis-abrams.com/open-graph-dummy.png" />

		<link rel="icon" href="/favicon.ico" />
	  </Head>
	  <div className='h-screen grid place-items-center'>
	  <a href="https://github.com/dennisabrams/my-website" target="_blank" className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" rel="noreferrer">
		<h5 className="mb-2 text-5xl font-bold tracking-tight text-gray-900 dark:text-white">Welcome!<br/><br/><FiGithub /></h5>
		<p className="pt-5 text-lg font-normal text-gray-700 dark:text-gray-400">Here I create my website which is currently under construction. Any changes can be found on my GitHub account under the repository: <mark className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">dennisabrams/my-website</mark>.</p>

		<h6 className="pt-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Languages & Technologies</h6>
		<p className="pt-2 text-lg font-normal text-gray-700 dark:text-gray-400">React, Next.js, TypeScript, Tailwind CSS</p>
		<h6 className="pt-5 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Utilitys</h6>
		<p className="pt-2 text-lg font-normal text-gray-700 dark:text-gray-400">Yarn, ESLint, Prettier, Husky, React Icons</p>
	  </a>
	  </div>
	</>
  )
}
