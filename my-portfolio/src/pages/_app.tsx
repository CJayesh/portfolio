import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import { Fredoka } from 'next/font/google'

const font_heading = Fredoka({subsets: ['latin']})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>
            {`
                html {
                    font-family: ${font_heading.style.fontFamily}
                }
            `}
            </style>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    )
}
