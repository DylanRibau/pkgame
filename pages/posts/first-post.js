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
        {pkmnChanges.map((pkmn) => (
          <div key={pkmn.Dex_no}>
            <div>
              {pkmn.Name} - {pkmn.Dex_no}
            </div>
            {pkmn.Ability !== null &&
              <div>
                <div>
                  Ability Changes:
                </div>
                {pkmn.Ability.map((ability) => (
                  <div>
                    {ability.Edition} {ability.Status} {ability.Ability_1} / {ability.Ability_2}
                  </div>
                ))}
              </div>
            }
            {pkmn.Evolution !== null &&
              <div>
                <div>
                  Evolution:
                </div>
                {pkmn.Evolution.map((evolution) => (
                  <div>
                    {evolution}
                  </div>
                ))}
              </div>
            }
            {pkmn.Base_Stats !== null &&
              <div>
                <div>
                  Base Stats:
                </div>
              </div>
            }
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
