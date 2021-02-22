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
        <span className={utilStyles.bold}>General Changes:</span>
        <ul className={utilStyles.list_style}>
          <li>The Wild Pokémon in each area have been modified.</li>
          <li>The levels listed for an area are the minimum and maximum levels that you may encounter in that area.</li>
          <li>Please note that many Pokémon can only be encountered at one specific level. Only some have the range.</li>
          <li>Fishing rod encounters have fixed levels. The Old Rod is Lv. 10, the Good Rod is Lv. 25 and the Super Rod is Lv. 50.</li>
          <li>The Old Rod and Good Rod are obtainable from the same places as before. The Super Rod is obtainable in Snowpoint City.</li>
          <li>Honey trees now respond with an encounter straight away after applying Honey.</li>
          <li>Please note that the shiny rate for Pokémon is 1/512 unless you chose to use the normal rate patch.</li>
          <li>Some Pokémon are only found when using the Poké Radar (these are listed as Poké Radar). These Pokémon may show up when you enter the patches with the yellow sparkles (NOT the shiny sparkles, that's something else!)</li>
        </ul>
      </div>

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
                    {data.LevelRanges.map((range, index) => (
                      <span key={range.Id}>
                        <span key={range.Id + 'range'} className={utilStyles.sm_space}>{range.Range} ({range.Method}){index < data.LevelRanges.length - 1 && <span key={range.Id + ','}>,</span>}</span>
                      </span>
                    ))}
                  </span>
                </div>
              }
              {data.RoutePokemon !== null &&
                <div key={data.Id + 'RoutePokemonContainer'}>
                  {data.RoutePokemon.map((method) => (
                    <div key={method.Id + method.Method} className={[styles.flex, utilStyles.space_inbetween].join(" ")}>
                      <div key={method.Id + 'label'} className={styles.method_label}>{method.Method}</div>
                      <div key={method.Id + 'flex2'}>
                        {method.WildPokemon.map((pkmn, index) => (
                          <span key={pkmn.Id} className={utilStyles.sm_space}>
                            {pkmn.Pokemon} ({pkmn.EncounterRate}%)
                            {index < method.WildPokemon.length - 1 && <span key={pkmn.Id + ","}>,</span>}
                          </span>
                        ))}
                      </div>
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
