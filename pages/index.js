import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className="title">
          Renegade Platinum Documentation
        </h1>

        <div className={styles.grid}>
          <Link href="/renegade-platinum/rp-pkmn-changes">
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h3>Pokemon Changes &rarr;</h3>
              <p>View all pokemon changes in Renegade Platinum</p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
