import Header from '@components/Header'
import Footer from '@components/Footer'
import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/red-heart.png" />
      </Head>

      <main>
        <Header title="Je t'aime!" />
        <p className="description">
            Romromromrom ❤️
        </p>
      </main>

      <Footer />
    </div>
  )
}
