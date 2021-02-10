import fs from 'fs'
import path from 'path'

const gamesDirectory = path.join(process.cwd(), 'public/data');

export function getGameChanges(game, fileName) {
  const changes = JSON.parse(fs.readFileSync(gamesDirectory.concat("/" + game + "/" + fileName + ".json")));
  return changes;
}
