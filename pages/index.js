import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'

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
            <a className={styles.card}>
              <h3>Pokemon Changes &rarr;</h3>
              <p>View each pokemons Ability, Type, Stats, Learnset, and more changes!</p>
            </a>
          </Link>

          <Link href="/renegade-platinum/rp-trainers">
            <a className={styles.card}>
              <h3>Trainers &rarr;</h3>
              <p>View all changed trainers and their rosters with detailed important trainer info!</p>
            </a>
          </Link>

          <Link href="/renegade-platinum/rp-wild-pkmn">
            <a className={styles.card}>
              <h3>Wild Pokemon &rarr;</h3>
              <p>View all changes with wild pokemon within each route and how to find them!</p>
            </a>
          </Link>

          <Link href="/renegade-platinum/rp-npc">
            <a className={styles.card}>
              <h3>NPC's &rarr;</h3>
              <p>View all new and modified NPC's along with where to find them!</p>
            </a>
          </Link>

          <Link href="/renegade-platinum/rp-evolution">
            <a className={styles.card}>
              <h3>Evolution Changes &rarr;</h3>
              <p>View all the changes to pokemon evolution methods and levels!</p>
            </a>
          </Link>

          <Link href="/renegade-platinum/rp-type">
            <a className={styles.card}>
              <h3>Type Changes &rarr;</h3>
              <p>View all the changes to pokemon types and the reasoning behind them!</p>
            </a>
          </Link>

          <Link href="/renegade-platinum/rp-trade">
            <a className={styles.card}>
              <h3>Trade Changes &rarr;</h3>
              <p>View all the changes to trade pokemon with detailed stats of them! </p>
            </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
