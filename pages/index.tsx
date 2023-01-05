import Head from 'next/head'

import Hero from '../features/landing/Hero'
import Brands from '../features/landing/Brands'
import SectionOne from '../features/landing/SectionOne'
import SectionTwo from '../features/landing/SectionTwo'
import SectionThree from '../features/landing/SectionThree'

function Home() {
  const seo = {
    title: 'Moomba | New Digital Platform Video',
    description: 'New Digital Platform Video',
    url: 'https://moomba.vercel.app/',
    image: '/social_media.png',
  }
  return (
    <>
      <Head>
        <title>Moomba | New Digital Platform Video</title>
        <meta name="description" content="New Digital Platform Video" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="image" content={seo.image} />

        <meta property="og:type" content={'website'} />
        <meta property="og:url" content={seo.url} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:image" content={seo.image} />

        <meta name="twitter:dnt" content="on" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@moomba" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        <meta name="twitter:image" content={seo.image} />

        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <main>
        <Hero />
        <Brands />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionOne />
      </main>
    </>
  )
}

export default Home
