import { } from '../../utils/arrayUtils.js'
import wingers from "./wingers.js";

const firstWingerIndex = wingers.randomIndex()
const firstWinger = wingers[firstWingerIndex]

const wingersWithoutFirstWinger = wingers.filter(winger => winger !== firstWinger )

const secondWingerIndex  = wingersWithoutFirstWinger.randomIndex()
const secondWinger = wingersWithoutFirstWinger[secondWingerIndex]


export {firstWinger, secondWinger}