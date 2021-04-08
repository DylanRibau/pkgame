import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/rp-trade-changes.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import { getGameChanges } from '../../lib/games'

const game = "renegade_platinum";
const fileName = "trade_changes";

export async function getStaticProps() {
  const changes = getGameChanges(game, fileName);
  return {
    props: {
      changes
    }
  }
}

export default function RPTrade({ changes }) {
  return (
    <Layout>
      <Head>
        <title>Trade Changes</title>
      </Head>

      <h1 className={utilStyles.page_title}>Trade Changes</h1>

      <div className={utilStyles.text}>
        <span className={utilStyles.bold}>General Changes:</span>
        <ul className={utilStyles.list_style}>
          <li>Each of the four trades has been modified to accept different Pokémon.</li>
          <li>The trade that was previously in Snowpoint City has been moved to Floaroma Town.</li>
          <li>The mechanic that causes traded Pokémon to not listen to you without certain badges has been removed. Traded Pokémon will now always listen to your commands.</li>
        </ul>
      </div>

      <div>
        {changes.map((data) => (
          <div key={data.Id} className={utilStyles.content_container}>
            <div key={data.Id + 'location'} className={[utilStyles.section_tag, utilStyles.heading2x1, styles.title_colour].join(" ")}>
              {data.Location}
              <div key={data.Id + 'location seperator'} className={styles.seperator}></div>
            </div>
            <div key={data.Id + 'flexbox'} className={styles.flexbox}>
              {data.Info !== null &&
                <div key={data.Id + 'info'}>
                  {data.Info}
                </div>
              }
              {data.Trade_Pkmn.map((pkmn) => (
                <div key={pkmn.Id} className={styles.flexbox}>
                  <div key={pkmn.Id + pkmn.Pkmn}>{pkmn.Pkmn} ({pkmn.Nickname})</div>
                  <div key={pkmn.Id + 'item'}>Item: {pkmn.Held_Item}</div>
                  <div key={pkmn.Id + 'nature'}>Nature: {pkmn.Nature}</div>
                  <div key={pkmn.Id + 'Ivs'}>
                    IV's: {pkmn.Ivs.HP} HP / {pkmn.Ivs.Atk} Atk / {pkmn.Ivs.Def} Def / {pkmn.Ivs.SAtk} SAtk / {pkmn.Ivs.SDef} SDef / {pkmn.Ivs.Spd} Spd
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
