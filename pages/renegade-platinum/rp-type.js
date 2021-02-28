import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/rp-type-changes.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import { getGameChanges } from '../../lib/games'

const game = "renegade_platinum";
const fileName = "type_changes";

export async function getStaticProps() {
  const changes = getGameChanges(game, fileName);
  return {
    props: {
      changes
    }
  }
}

export default function RPType({ changes }) {
  return (
    <Layout>
      <Head>
        <title>Type Changes</title>
      </Head>

      <h1 className={utilStyles.page_title}>Type Changes</h1>

      <div className={utilStyles.text}>
        <span className={utilStyles.bold}>General Changes:</span>
        <ul className={utilStyles.list_style}>
          <li>Fairy-type is now in the game, replacing what was previously the ??? type.</li>
          <li>All Pokémon that are Fairy-type in Gen VI onwards are also Fairy-type in Renegade Platinum. This is true for the Complete and the Classic versions.</li>
          <li>Rotom's five alternate forms take the secondary type that they have in the Gen V games and onward (i.e. they are not Ghost-type like the normal Platinum).</li>
          <li>For other type changes, they are only present in the Complete version of the hack. If you don't like these changes, use the Classic version patch instead.</li>
        </ul>
      </div>

      <div>
        {changes.map((data) => (
          <div key={data.Id} className={utilStyles.content_container}>
            <div key={data.Id + 'title'} className={utilStyles.section_tag}>
              <span className={[utilStyles.heading2x1, styles.title_colour].join(" ")}>{data.Name}</span> {data.Dex_no}
              <div key={data.Id + 'TitleLine'} className={styles.seperator}></div>
            </div>
            <div key={data.Id + 'Type Flexbox'} className={styles.flexbox}>
              {data.Old_Type !== null &&
                <div key={data.Old_Type.Id} className={utilStyles.sub_heading}>
                  {data.Old_Type.Type_1}
                  {data.Old_Type.Type_2 !== null &&
                    <span key={data.Old_Type.Id + 'type2'}>
                      / {data.Old_Type.Type_2}
                    </span>
                  }
                </div>
              }
              {data.New_Type !== null &&
                <div key={data.New_Type.Id} className={utilStyles.sub_heading}>
                  <span key={data.New_Type.Id + '>'} className={[utilStyles.sm_space, utilStyles.text].join(" ")}>></span>
                  {data.New_Type.Type_1}
                  {data.New_Type.Type_2 !== null &&
                    <span key={data.New_Type.Id + 'Type 2 Container'}>
                      <span key={data.New_Type.Id + '/'} className={utilStyles.sm_space}>/</span>
                      <span key={data.New_Type.Id + 'Type2'}>{data.New_Type.Type_2}</span>
                    </span>
                  }
                </div>
              }
            </div>
            {data.Justification !== null &&
              <div key={data.Id + 'Justification'} className={utilStyles.center}>
                {data.Justification}
              </div>
            }
          </div>
        ))}
      </div>
    </Layout>
  )
}
