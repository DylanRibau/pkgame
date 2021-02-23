import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/rp-evolution-changes.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import { getGameChanges } from '../../lib/games'

const game = "renegade_platinum";
const fileName = "evolution_changes";

export async function getStaticProps() {
  const evoChanges = getGameChanges(game, fileName);
  return {
    props: {
      evoChanges
    }
  }
}

export default function RPEvolutionChanges({ evoChanges }) {
  return (
    <Layout>
      <Head>
        <title>Evolution Changes</title>
      </Head>

      <h1 className={utilStyles.page_title}>Evolution Changes</h1>

      <div>
        {evoChanges.map((evo) => (
          <div key={evo.Id} className={utilStyles.content_container}>
            <div key={evo.Id + 'title'} className={[utilStyles.section_tag, utilStyles.heading2x1, styles.title_colour].join(" ")}>
              {evo.Section}
              <div key={evo.Id + 'seperator'} className={styles.seperator}/>
            </div>
            <ul key={evo.Id + 'sectionUL'} className={utilStyles.list_style}>
              {evo.Evolutions.map((pkmn) => (
                <li key={pkmn.Id}>{pkmn.Pokemon}: {pkmn.Method}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  )
}
