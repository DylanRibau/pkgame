import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/rp-npc-changes.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import { getGameChanges } from '../../lib/games'

const game = "renegade_platinum";
const fileName = "npc_changes";

export async function getStaticProps() {
  const npcChanges = getGameChanges(game, fileName);
  return {
    props: {
      npcChanges
    }
  }
}

export default function RPNPCChanges({ npcChanges }) {
  return (
    <Layout>
      <Head>
        <title>NPC Changes</title>
      </Head>

      <h1 className={utilStyles.page_title}>NPC Changes</h1>

      <div>
        {npcChanges.map((npc) => (
          <div key={npc.Id} className={utilStyles.content_container}>
            <div key={npc.Id + 'title'} className={[utilStyles.section_tag, utilStyles.heading2x1, styles.title_colour].join(" ")}>
              <span key={npc.Id + 'status'} className={[utilStyles.sm_font, utilStyles.sm_space].join(" ")}>{npc.Status}</span>
              {npc.NPC}
              <span key={npc.Id + 'location'} className={[utilStyles.sm_font, utilStyles.sm_space].join(" ")}>{npc.Location}</span>
              <div key={npc.Id + 'seperator'} className={styles.seperator}/>
            </div>

            {npc.Notes !== null &&
              <div key={npc.Id + 'notes'} className={utilStyles.text}>
                <ul key={npc.Id + 'notesUL'} className={utilStyles.list_style}>
                  {npc.Notes.map((note) => (
                    <li key={npc.Id + note}>{note}</li>
                  ))}
                </ul>
              </div>
            }

            {npc.Experience !== undefined &&
              <div key={npc.Id + 'experience'} className={utilStyles.text}>
                <div key={npc.Id + 'experienceTitle'} className={[utilStyles.sub_heading, styles.title_colour].join(" ")}>
                  Experience:
                </div>
                <ul key={npc.Id + 'experienceUL'} className={utilStyles.list_style}>
                  {npc.Experience.map((note) => (
                    <li key={npc.Id + note}>{note}</li>
                  ))}
                </ul>
              </div>
            }

            {npc.Stats !== undefined &&
              <div key={npc.Id + 'stats'} className={utilStyles.text}>
                <div key={npc.Id + 'statsTitle'} className={[utilStyles.sub_heading, styles.title_colour].join(" ")}>
                  Stats:
                </div>
                <ul key={npc.Id + 'statsUL'} className={utilStyles.list_style}>
                  {npc.Stats.map((note) => (
                    <li key={npc.Id + note}>{note}</li>
                  ))}
                </ul>
              </div>
            }
          </div>
        ))}
      </div>
    </Layout>
  )
}
