import type { AppProps } from 'next/app'
import { ThemeProvider, Global } from '@emotion/react'
import { Poppins } from '@next/font/google'

import theme from '../features/common/Theme/theme'
import globalStyle from '../features/common/Theme/GlobalStyles';

const poppins = Poppins({ weight: ['400', '500', '600', '700'], subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <div className={poppins.className}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
