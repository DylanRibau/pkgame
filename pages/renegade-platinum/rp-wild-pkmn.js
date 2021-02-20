import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/rp-wild-pokemon-changes.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import { getGameChanges } from '../../lib/games'

const game = "renegade_platinum";
const fileName = "wild_pokemon_changes";

export async function getStaticProps() {
  const changes = getGameChanges(game, fileName);
  return {
    props: {
      changes
    }
  }
}

export default function RPWildPokemon({ changes }){
  return (
    <Layout>
      <Head>
        <title>Wild Pokemon</title>
      </Head>

      <h1 className={utilStyles.page_title}>Wild Pokemon</h1>

      <div className={utilStyles.text}>
        <div>
          {changes.map((data) =>(
            <div key={data.Id} className={utilStyles.content_container}>
              <div key={data.Id + 'title'} className={[utilStyles.section_tag, utilStyles.heading2x1, styles.title_colour].join(" ")}>
                {data.Route}
                <div key={data.Id + 'seperator'} className={styles.seperator}/>
              </div>
              {data.LevelRanges !== null &&
                <div key={data.Id + 'LvlsContainer'} className={utilStyles.text}>
                  Levels:
                  <span key={data.Id + 'LvlsRanges'}>
                    {data.LevelRanges.map((range) => (
                      <span key={range.Id}>
                        {range.Range} ({range.Method})
                      </span>
                    ))}
                  </span>
                </div>
              }
              {data.RoutePokemon !== null &&
                <div key={data.Id + 'RoutePokemonContainer'}>
                  {data.RoutePokemon.map((method) => (
                    <div key={method.Id + method.Method}>
                      {}
                    </div>
                  ))}
                </div>
              }
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
