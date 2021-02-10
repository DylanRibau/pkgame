import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import { getGameChanges } from '../../lib/games'

const game = "renegade_platinum";
const fileName = "trainer_changes";

export async function getStaticProps() {
  const changes = getGameChanges(game, fileName);
  return {
    props: {
      changes
    }
  }
}

export default function RPTrainers({ changes }) {
  return (
    <Layout>
      <Head>
        <title>Trainer Info</title>
      </Head>

      WIP
      {console.log(changes)}
    </Layout>
  )
}
