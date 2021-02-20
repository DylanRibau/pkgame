import Head from 'next/head'
import Layout from '../../components/layout'
import styles from '../../styles/rp-trainer-changes.module.scss'
import utilStyles from '../../styles/utils.module.scss'
import { getGameChanges } from '../../lib/games'

const game = "renegade_platinum";
const fileName = "trainer_changes";

export async function getStaticProps() {
  const changes = getGameChanges(game, fileName);
  return {
    props: {
      changes
    }
  }
}

export default function RPTrainers({ changes }) {
  return (
    <Layout>
      <Head>
        <title>Trainer Info</title>
      </Head>
      <h1 className={utilStyles.page_title}>Trainer Changes</h1>

      <div className={utilStyles.text}>
        <span className={utilStyles.bold}>General Changes:</span>
        <ul className={utilStyles.list_style}>
          <li>Trainer rosters in every area has been modified. They are all listed below with species and levels.</li>
          <li>Important trainers have their entire roster listed including species, levels, items, moves and natures.</li>
          <li>Natures have not been set for all Trainers - if a '?' is listed where the nature should be then it hasn't been specifically set.</li>
          <li>Some postgame Trainers have a * next to their name. This signals that you need to beat them to advance into Stark Mountain.</li>
          <li>Some trainers have a (!) next to their name. This means that they have further rosters via the Vs. Seeker.</li>
          <li>Some trainers have a (3) or other number next to their name. This means they should start using these teams once you have that number of badges.</li>
          <li>Instead of a number, you may see a (C) for Champion or (S) for Stark Mountain, which means after completing these they'll gain those teams.</li>
          <li>Please note that the number of badges may not always be correct. Feel free to report any incorrect information!</li>
        </ul>
      </div>

      <div>
        {changes.map((data) => (
          <div key={data.Location} className={utilStyles.content_container}>
            <div key={data.Location + 'title'} className={[utilStyles.section_tag, utilStyles.heading2x1, styles.title_colour].join(" ")}>
              {data.Location}
              <div key={data.location + 'seperator'} className={styles.seperator}/>
            </div>
            {data.Trainers !== null &&
              <div key={data.Location + 'TrainerContainer'} className={utilStyles.text}>
                <div key={data.Location + 'TrainerHeader'} className={utilStyles.sub_heading}>
                  Trainers
                </div>
                {data.Trainers.map((trainer) => (
                  <div key={trainer.Id + trainer.Name + "Container"} className={utilStyles.space_inbetween}>
                    <span key={trainer.Id + trainer.Name} className={styles.trainer_name}>
                      {trainer.Name}
                    </span>
                    <span key={trainer.Id + trainer.Name + 'Roster'}>
                      {trainer.Roster.map((roster) => (
                        <span key={trainer.Id + roster.Id} className={styles.roster_item}>
                          {roster.Name} Lv.{roster.Level}
                        </span>
                      ))}
                    </span>
                  </div>
                ))}
                <div key={data.Trainers + 'TrainerSeperator'} className={styles.seperator}/>
              </div>
            }
            {data.Extra !== null &&
              <div key={data.Location + 'ExtraContainer'} className={utilStyles.text}>
                {data.Extra.map((extra) => (
                  <div key={data.Location + extra.Name}>
                    <div key={data.Location + extra.Name + 'Header'} className={utilStyles.sub_heading}>
                      {extra.Name}
                    </div>
                    <div key={data.Location + extra.Name + 'Trainers'}>
                      {extra.Trainers.map((trainer) => (
                        <div key={data.Location + trainer.Id} className={utilStyles.space_inbetween}>
                          <span key={data.Location + extra.Name + trainer.Id + 'Header'} className={styles.trainer_name}>
                            {trainer.Name}
                          </span>
                          <span key={extra.Name + trainer.Id + trainer.Name + 'Roster'}>
                            {trainer.Roster.map((roster) => (
                              <span key={trainer.Id + roster.Id} className={styles.roster_item}>
                                {roster.Name} Lv.{roster.Level}
                              </span>
                            ))}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div key={data.Trainers + 'TrainerSeperator'} className={styles.seperator}/>
                  </div>
                ))}
              </div>
            }
            {data.TrainersDetailed !== null &&
              <div key={data.Location + 'TrainersDetailedContainer'} className={[utilStyles.text, utilStyles.sm_font].join(' ')}>
                <div key={data.Location + 'TrainersDetailedHeader'} className={utilStyles.sub_heading}>
                  Detailed Trainers
                </div>
                <div key={data.Location + 'TrainersDetailedTrainers'}>
                  {data.TrainersDetailed.map((trainer) => (
                    <div key={trainer.Id} className={utilStyles.space_inbetween}>
                      <div key={trainer.Id + 'Name'} className={utilStyles.bold}>
                        {trainer.Name}
                      </div>
                      <div key={trainer.Id + 'Roster'}>
                        {trainer.Roster.map((pkmn) => (
                          <div key={pkmn.Id} className={styles.space_below}>
                            <span key={pkmn.Id + 'Name'} className={styles.pkmn_name_info}>{pkmn.Name} (Lv. {pkmn.Level}) @ {pkmn.Held_Item}</span>
                            <span key={pkmn.Id + 'Nature'} className={styles.pkmn_nature_info}>/ {pkmn.Nature}</span>
                            <span key={pkmn.Id + 'Ability'} className={styles.pkmn_ability_info}>/ {pkmn.Ability}</span>
                            <span key={pkmn.Id + 'Moveset'}>/
                              {pkmn.Moveset.map((move, index) => (
                                <span key={pkmn.Id + 'Move' + move} className={utilStyles.sm_space}>
                                  {move}{index < pkmn.Moveset.length - 1 && <span key={pkmn.Id + move + ","}>,</span>}
                                </span>
                              ))}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div key={data.Trainers + 'DetailedTrainersSeperator'} className={styles.seperator}/>
              </div>
            }
          </div>
        ))}
      </div>
    </Layout>
  )
}
