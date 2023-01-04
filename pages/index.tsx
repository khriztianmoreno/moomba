import Head from 'next/head'
import Image from 'next/image'

import Hero from '../features/landing/Hero'
import Menu from '../features/common/Menu'

function Home() {
  return (
    <>
      <Head>
        <title>Moomba | New Digital Platform Video</title>
        <meta name="description" content="New Digital Platform Video" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />

      </main>
    </>
  )
}

export default Home
