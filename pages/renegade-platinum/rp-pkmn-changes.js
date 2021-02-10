import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/rp-pkmn-changes.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import { getGameChanges } from '../../lib/games'

const game = "renegade_platinum";
const fileName = "pokemon_changes";

export async function getStaticProps() {
  const pkmnChanges = getGameChanges(game, fileName);
  return {
    props: {
      pkmnChanges
    }
  }
}

export default function RPPkmnChanges({ pkmnChanges }) {
  return (
    <Layout>
      <Head>
        <title>Pokemon Changes</title>
      </Head>
      <h1 className={[utilStyles.heading2x1, styles.page_title].join(" ")}>Pokemon Changes</h1>

      <div>
        {pkmnChanges.map((pkmn) => (
          <div key={pkmn.Dex_no} className={utilStyles.content_container}>
            <div key={pkmn.name + pkmn.Dex_no} className={styles.pkmn_tag}>
              <span className={utilStyles.heading2x1}>{pkmn.Name}</span> {pkmn.Dex_no}
              <div key={pkmn.Dex_no + 'TitleLine'} className={styles.seperator}></div>
            </div>
            {pkmn.Ability !== null &&
              <div key={pkmn.Dex_no + 'AbilityContainer'}>
                <div key={pkmn.Dex_no + 'AbilityHeader'} className={styles.sub_heading}>
                  Ability Changes
                </div>
                {pkmn.Ability.map((ability) => (
                  <div key={pkmn.Dex_no + ability.Status + ability.Edition + 'Ability'}>
                    <span className={styles.text_label}>{ability.Edition} {ability.Status}</span> <span className={styles.text}>{ability.Ability_1} / {ability.Ability_2}</span>
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'AbilityLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Evolution !== null &&
              <div key={pkmn.Dex_no + 'EvolutionContainer'}>
                <div key={pkmn.Dex_no + 'EvolutionHeader'} className={styles.sub_heading}>
                  Evolution
                </div>
                {pkmn.Evolution.map((evolution) => (
                  <div key={pkmn.Dex_no + evolution} className={styles.text}>
                    {evolution}
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'EvolutionLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Base_Stats !== null &&
              <div key={pkmn.Dex_no + 'BaseStatsContainer'}>
                <div key={pkmn.Dex_no + 'BaseStatsHeader'} className={styles.sub_heading}>
                  Base Stats
                </div>
                {pkmn.Base_Stats.map((bs) => (
                  <div key={pkmn.Dex_no + bs.Status + bs.Form + 'BaseStats'}>
                    <span className={styles.text_label}> {bs.Status} {bs.Form}</span>
                    <span className={styles.text}>       HP:</span>
                    <span className={styles.text_value}> {bs.HP}</span>
                    <span className={styles.text}>       / Atk:</span>
                    <span className={styles.text_value}> {bs.Atk}</span>
                    <span className={styles.text}>       / SAtk:</span>
                    <span className={styles.text_value}> {bs.SAtk}</span>
                    <span className={styles.text}>       / Def:</span>
                    <span className={styles.text_value}> {bs.Def}</span>
                    <span className={styles.text}>       / SDef:</span>
                    <span className={styles.text_value}> {bs.SDef}</span>
                    <span className={styles.text}>       / Spd:</span>
                    <span className={styles.text_value}> {bs.Spd}</span>
                    <span className={styles.text}>       / BST:</span>
                    <span className={styles.text_value}> {bs.BST}</span>
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'BaseStatsLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Evs !== null &&
              <div key={pkmn.Dex_no + 'EvsContainer'}>
                <div key={pkmn.Dex_no + 'EvsHeader'} className={styles.sub_heading}>
                  Ev's
                </div>
                {pkmn.Evs.map((ev) => (
                  <div key={pkmn.Dex_no + ev.Status + 'Ev'}>
                    <span className={styles.text_label}>{ev.Status} </span>
                    <span className={styles.text}>{ev.Amount} {ev.Stat}</span>
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'EvsLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Type !== null &&
              <div key={pkmn.Dex_no + 'TypeContainer'}>
                <div key={pkmn.Dex_no + 'TypeHeader'} className={styles.sub_heading}>
                  Type
                </div>
                {pkmn.Type.map((type) => (
                  <div key={pkmn.Dex_no + type.Status + 'Type'}>
                    <span className={styles.text_label}>{type.Status}</span> <span className={styles.text}>{type.Type_1} {type.Type_2 !== null ? <span> / {type.Type_2}</span>:''}</span>
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'TypeLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Moves !== null &&
              <div key={pkmn.Dex_no + 'MoveContainer'}>
                <div key={pkmn.Dex_no + 'MoveHeader'} className={styles.sub_heading}>
                  Now Compatible With
                </div>
                <ul key={pkmn.Dex_no + 'MoveList'} className={styles.list}>
                  {pkmn.Moves.map((move) => (
                    <li key={pkmn.Dex_no + move} className={styles.list_item}>
                      {move}
                    </li>
                  ))}
                </ul>
                <div key={pkmn.Dex_no + 'MovesLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Held_Items !== null &&
              <div key={pkmn.Dex_no + 'HeldItemsContainer'}>
                <div key={pkmn.Dex_no + 'HeldItemsHeader'} className={styles.sub_heading}>
                  Held Items
                </div>
                <ul key={pkmn.Dex_no + 'HeldItemsList'} className={styles.list}>
                  {pkmn.Held_Items.map((item) => (
                    <li key={pkmn.Dex_no + item} className={styles.list_item}>
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
                      <div key={pkmn.Dex_no + lvlup.Form + 'lvlup'} className={styles.sub_heading}>
                        {lvlup.Form} Learnset
                      </div>
                      <ul key={pkmn.Dex_no + lvlup.Form + 'learnset'} className={styles.list}>
                        {lvlup.Learnset.map((move) => (
                          <li key={pkmn.Dex_no + move.Level + move.Move} className={styles.list_item}>
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
    </Layout>
  )
}
