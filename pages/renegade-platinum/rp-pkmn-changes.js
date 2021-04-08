import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'
import Router from 'next/router'
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
      <h1 className={utilStyles.page_title}>Pokemon Changes</h1>

      <div className={utilStyles.text}>
        <span className={utilStyles.bold}>General Changes:</span>
        <ul className={utilStyles.list_style}>
          <li>The Fairy-type has been added to the game, replacing the almost unused ???-type.</li>
          <li>All Pokémon have had their base stats updated to match Ultra Sun and Ultra Moon.</li>
          <li>All Pokémon have had their types updated to match Ultra Sun and Ultra Moon.</li>
          <li>All Pokémon have had their wild held item updated to match Ultra Sun and Ultra Moon (with some exceptions).</li>
          <li>All Pokémon now have an egg cycle of 0, i.e. they will hatch extremely quickly.</li>
          <li>Wingull, Pelipper and Torkoal have gained their new abilities from Gen VII.</li>
          <li>Some Pokémon have ability slots flipped (e.g. Scyther). This is because enemy Trainers always use the first ability.</li>
        </ul>
      </div>

      <div className={utilStyles.text}>
        <span className={utilStyles.bold}>Held Item Exceptions:</span>
        <ul className={utilStyles.list_style}>
          <li>Pokémon who may hold an item in Ultra Sun and Ultra Moon that doesn't exist in Platinum will not hold anything.</li>
          <li>Corsola has a 5% chance to hold a Hard Stone.</li>
          <li>Pelipper has a 5% chance to hold a Lucky Egg.</li>
          <li>Absol has a 5% chance to hold a Life Orb.</li>
          <li>Spiritomb has a 100% chance to hold a Smoke Ball.</li>
        </ul>
      </div>

      <div>
        {pkmnChanges.map((pkmn) => (
          <div key={pkmn.Dex_no} className={utilStyles.content_container} id={pkmn.Dex_no}>
            <div key={pkmn.name + pkmn.Dex_no} className={utilStyles.section_tag}>
              <span className={[utilStyles.heading2x1, styles.title_colour].join(" ")}>{pkmn.Name}</span> {pkmn.Dex_no}
              <div key={pkmn.Dex_no + 'TitleLine'} className={styles.seperator}></div>
            </div>
            {pkmn.Ability !== null &&
              <div key={pkmn.Dex_no + 'AbilityContainer'}>
                <div key={pkmn.Dex_no + 'AbilityHeader'} className={utilStyles.sub_heading}>
                  Ability Changes
                </div>
                {pkmn.Ability.map((ability) => (
                  <div key={pkmn.Dex_no + ability.Status + ability.Edition + 'Ability'}>
                    <span className={styles.text_label}>{ability.Edition} {ability.Status}</span> <span className={utilStyles.text}>{ability.Ability_1} / {ability.Ability_2}</span>
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'AbilityLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Evolution !== null &&
              <div key={pkmn.Dex_no + 'EvolutionContainer'}>
                <div key={pkmn.Dex_no + 'EvolutionHeader'} className={utilStyles.sub_heading}>
                  Evolution
                </div>
                {pkmn.Evolution.map((evolution) => (
                  <div key={pkmn.Dex_no + evolution} className={utilStyles.text}>
                    {evolution}
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'EvolutionLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Base_Stats !== null &&
              <div key={pkmn.Dex_no + 'BaseStatsContainer'}>
                <div key={pkmn.Dex_no + 'BaseStatsHeader'} className={utilStyles.sub_heading}>
                  Base Stats
                </div>
                {pkmn.Base_Stats.map((bs) => (
                  <div key={pkmn.Dex_no + bs.Status + bs.Form + 'BaseStats'}>
                    <span className={styles.text_label}> {bs.Status} {bs.Form}</span>
                    <span className={utilStyles.text}>       HP:</span>
                    <span className={styles.text_value}> {bs.HP}</span>
                    <span className={utilStyles.text}>       / Atk:</span>
                    <span className={styles.text_value}> {bs.Atk}</span>
                    <span className={utilStyles.text}>       / SAtk:</span>
                    <span className={styles.text_value}> {bs.SAtk}</span>
                    <span className={utilStyles.text}>       / Def:</span>
                    <span className={styles.text_value}> {bs.Def}</span>
                    <span className={utilStyles.text}>       / SDef:</span>
                    <span className={styles.text_value}> {bs.SDef}</span>
                    <span className={utilStyles.text}>       / Spd:</span>
                    <span className={styles.text_value}> {bs.Spd}</span>
                    <span className={utilStyles.text}>       / BST:</span>
                    <span className={styles.text_value}> {bs.BST}</span>
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'BaseStatsLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Evs !== null &&
              <div key={pkmn.Dex_no + 'EvsContainer'}>
                <div key={pkmn.Dex_no + 'EvsHeader'} className={utilStyles.sub_heading}>
                  Ev's
                </div>
                {pkmn.Evs.map((ev) => (
                  <div key={pkmn.Dex_no + ev.Status + 'Ev'}>
                    <span className={styles.text_label}>{ev.Status} </span>
                    <span className={utilStyles.text}>{ev.Amount} {ev.Stat}</span>
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'EvsLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Type !== null &&
              <div key={pkmn.Dex_no + 'TypeContainer'}>
                <div key={pkmn.Dex_no + 'TypeHeader'} className={utilStyles.sub_heading}>
                  Type
                </div>
                {pkmn.Type.map((type) => (
                  <div key={pkmn.Dex_no + type.Status + 'Type'}>
                    <span className={styles.text_label}>{type.Status}</span> <span className={utilStyles.text}>{type.Type_1} {type.Type_2 !== null ? <span> / {type.Type_2}</span>:''}</span>
                  </div>
                ))}
                <div key={pkmn.Dex_no + 'TypeLine'} className={styles.seperator}></div>
              </div>
            }
            {pkmn.Moves !== null &&
              <div key={pkmn.Dex_no + 'MoveContainer'}>
                <div key={pkmn.Dex_no + 'MoveHeader'} className={utilStyles.sub_heading}>
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
                <div key={pkmn.Dex_no + 'HeldItemsHeader'} className={utilStyles.sub_heading}>
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
                      <div key={pkmn.Dex_no + lvlup.Form + 'lvlup'} className={utilStyles.sub_heading}>
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
            <div key={pkmn.Dex_no + 'FinalSeperator'} className={styles.seperator}></div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
