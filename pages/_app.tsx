import type { AppProps } from 'next/app'
import { ThemeProvider } from '@emotion/react'
import { Poppins } from '@next/font/google'

import theme from '../features/common/Theme/Styles'
import '../styles/globals.css'

const poppins = Poppins({ weight: ['400', '500', '600', '700'], })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
