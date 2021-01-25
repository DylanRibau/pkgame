import fs from 'fs'
import path from 'path'

const gamesDirectory = path.join(process.cwd(), 'public/data');

export function getGamePkmnChanges(game) {
  const pkmnChanges = JSON.parse(fs.readFileSync(gamesDirectory.concat("/" + game).concat("/pokemon_changes.json")));
  return pkmnChanges;
}
