import Banner from '@/components/banner/banner'
import Nav from '@/components/header/navber'
import TopHeader from '@/components/header/top-header'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Alpona Jewlry</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <TopHeader />
        <Banner />
        <Nav />
        <h1 className="text-4xl font-bold">Alpona Jewlry</h1>
      </main>
    </>
  )
}
