import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { getGamePkmnChanges } from '../../lib/games'

export async function getStaticProps() {
  const pkmnChanges = getGamePkmnChanges("renegade_platinum")
  return {
    props: {
      pkmnChanges
    }
  }
}

export default function FirstPost({ pkmnChanges }) {
  return (
    <Layout>
      <Head>
        <title>Pokemon Changes</title>
      </Head>
      <h1>Pokemon Changes</h1>

      <div>
        {pkmnChanges.pkmn.map((pkmn) => (
          <div key={pkmn.dex_no}>
            {pkmn.name} - {pkmn.dex_no}
          </div>
        ))}
      </div>

      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  )
}
