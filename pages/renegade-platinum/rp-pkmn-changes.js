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
            <div key={pkmn.name + pkmn.Dex_no}>
              {pkmn.Name} - {pkmn.Dex_no}
            </div>
            {pkmn.Ability !== null &&
              <div key={pkmn.Dex_no + 'AbilityContainer'}>
                <div key={pkmn.Dex_no + 'AbilityHeader'}>
                  Ability Changes:
                </div>
                {pkmn.Ability.map((ability) => (
                  <div key={pkmn.Dex_no + ability.Status + ability.Edition + 'Ability'}>
                    {ability.Edition} {ability.Status} {ability.Ability_1} / {ability.Ability_2}
                  </div>
                ))}
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
