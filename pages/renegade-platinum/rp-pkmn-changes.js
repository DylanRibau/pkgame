import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/rp-pkmn-changes.module.scss'
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
      <h1 className={styles.page_title}>Pokemon Changes</h1>

      <div>
        {pkmnChanges.map((pkmn) => (
          <div key={pkmn.Dex_no} className={styles.pkmn_container}>
            <div key={pkmn.name + pkmn.Dex_no} className={styles.pkmn_tag}>
              <span>{pkmn.Name}</span> {pkmn.Dex_no}
              <div key={pkmn.Dex_no + 'TitleLine'} className={styles.seperator}></div>
            </div>
            {pkmn.Ability !== null &&
              <div key={pkmn.Dex_no + 'AbilityContainer'} className={styles.pkmn_ability_container}>
                <div key={pkmn.Dex_no + 'AbilityHeader'}>
                  Ability Changes:
                </div>
                {pkmn.Ability.map((ability) => (
                  <div key={pkmn.Dex_no + ability.Status + ability.Edition + 'Ability'}>
                    {ability.Edition} {ability.Status} {ability.Ability_1} / {ability.Ability_2}
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'AbilityLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Evolution !== null &&
              <div key={pkmn.Dex_no + 'EvolutionContainer'}>
                <div key={pkmn.Dex_no + 'EvolutionHeader'}>
                  Evolution:
                </div>
                {pkmn.Evolution.map((evolution) => (
                  <div key={pkmn.Dex_no + evolution}>
                    {evolution}
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'EvolutionLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Base_Stats !== null &&
              <div key={pkmn.Dex_no + 'BaseStatsContainer'}>
                <div key={pkmn.Dex_no + 'BaseStatsHeader'}>
                  Base Stats:
                </div>
                {pkmn.Base_Stats.map((bs) => (
                  <div key={pkmn.Dex_no + bs.Status + bs.Form + 'BaseStats'}>
                    {bs.Status} {bs.Form}    HP: {bs.HP} / Atk: {bs.Atk} / SAtk: {bs.SAtk} / Def: {bs.Def} / SDef: {bs.SDef} / Spd: {bs.Spd} / BST: {bs.BST}
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'BaseStatsLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Evs !== null &&
              <div key={pkmn.Dex_no + 'EvsContainer'}>
                <div key={pkmn.Dex_no + 'EvsHeader'}>
                  Ev's:
                </div>
                {pkmn.Evs.map((ev) => (
                  <div key={pkmn.Dex_no + ev.Status + 'Ev'}>
                    {ev.Status}    {ev.Amount} {ev.Stat}
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'EvsLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Type !== null &&
              <div key={pkmn.Dex_no + 'TypeContainer'}>
                <div key={pkmn.Dex_no + 'TypeHeader'}>
                  Type:
                </div>
                {pkmn.Type.map((type) => (
                  <div key={pkmn.Dex_no + type.Status + 'Type'}>
                    {type.Status}  {type.Type_1} {type.Type_2 !== null ? <span> / {type.Type_2}</span>:''}
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'TypeLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Moves !== null &&
              <div key={pkmn.Dex_no + 'MoveContainer'}>
                <div key={pkmn.Dex_no + 'MoveHeader'}>
                  Now Compatible With:
                </div>
                <ul key={pkmn.Dex_no + 'MoveList'}>
                  {pkmn.Moves.map((move) => (
                    <li key={pkmn.Dex_no + move}>
                      {move}
                    </li>
                  ))}
                </ul>
                <div key={pkmn.Dex_no + 'MovesLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Held_Items !== null &&
              <div key={pkmn.Dex_no + 'HeldItemsContainer'}>
                <div key={pkmn.Dex_no + 'HeldItemsHeader'}>
                  Held Items:
                </div>
                <ul key={pkmn.Dex_no + 'HeldItemsList'}>
                  {pkmn.Held_Items.map((item) => (
                    <li key={pkmn.Dex_no + item}>
                      {item}
                    </li>
                  ))}
                </ul>
                <div key={pkmn.Dex_no + 'HeldItemLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Level_Up !== null &&
              <div key={pkmn.Dex_no + 'LevelUpContainer'}>
                  {pkmn.Level_Up.map((lvlup) => (
                    <div key={pkmn.Dex_no + lvlup.Form + 'Container'}>
                      <div key={pkmn.Dex_no + lvlup.Form + 'lvlup'}>
                        {lvlup.Form} Learnset:
                      </div>
                      <ul key={pkmn.Dex_no + lvlup.Form + 'learnset'}>
                        {lvlup.Learnset.map((move) => (
                          <li key={pkmn.Dex_no + move.Level + move.Move}>
                            {move.Level} - {move.Move}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
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
