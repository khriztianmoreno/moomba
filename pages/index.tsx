import Head from 'next/head'
import Image from 'next/image'

import Hero from '../features/landing/Hero'
import Brands from '../features/landing/Brands'

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
        <Brands />
      </main>
    </>
  )
}

export default Home
