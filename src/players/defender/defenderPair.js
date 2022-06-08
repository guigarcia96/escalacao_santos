import defenders from "./defenders.js";
import { } from '../../utils/arrayUtils.js'

const firstDefenderIndex = defenders.randomIndex()
const firstDefender = defenders[firstDefenderIndex]

const defendersWithoutFirstDefender = defenders.filter(defender => defender !== firstDefender )

const secondDefenderIndex  = defendersWithoutFirstDefender.randomIndex()
const secondDefender = defendersWithoutFirstDefender[secondDefenderIndex]


export {firstDefender, secondDefender}